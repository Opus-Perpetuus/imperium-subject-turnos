import { describe, expect, test } from "bun:test";
import { readFileSync } from "node:fs";
import {
  TICKETING_TURN_STATUS_OPTIONS,
  push_status_seeds,
  STATUS_OPTION_SEED_PATH,
  STATUS_OPTION_SEEDS,
} from "./status-seeds";

describe("status seeds", () => {
  test("ticketing-system-turn status: 3 opciones", () => {
    expect(STATUS_OPTION_SEEDS).toHaveLength(1);
    const s = STATUS_OPTION_SEEDS[0]!;
    expect(s.model_id).toBe("subject-turnos/ticketing-system-turn");
    expect(s.status_fields).toEqual(["status"]);
    expect(s.options).toHaveLength(3);
    expect(s.options.map((o) => o.value)).toEqual(TICKETING_TURN_STATUS_OPTIONS.map((o) => o.value));
    expect(
      s.options.every((o) => /^#[0-9a-f]{6}$/.test(o.color) && /^fas fa-[a-z0-9-]+$/.test(o.icon ?? "")),
    ).toBe(true);
  });

  test("pages usan input-status sin options literales", () => {
    const src = readFileSync(
      new URL("./modules/ticketing-system-turn/ticketing-system-turn.pages.ts", import.meta.url),
      "utf8",
    );
    expect(src).toMatch(/name:\s*"status"/);
    expect(src).toMatch(/component:\s*"input-status"/);
    expect(src).not.toMatch(/name:\s*"status"[\s\S]*?options:\s*\[/);
  });
});

describe("push_status_seeds", () => {
  const env = {
    CORE_DATA_URL: "http://core:3000/api/kirlets/data/x",
    SUBJECT_TECHNICAL_ID: "subject-turnos",
    CORE_SUBJECT_GATEWAY_SECRET: "s",
  };

  test("sin env no llama", async () => {
    let called = false;
    const r = await push_status_seeds({
      env: {},
      fetchImpl: (async () => {
        called = true;
        return new Response();
      }) as unknown as typeof fetch,
    });
    expect(r).toEqual({ pushed: false, reason: "core_not_configured" });
    expect(called).toBe(false);
  });

  test("POST entries a seed-defaults del núcleo", async () => {
    let url = "";
    let init: RequestInit | undefined;
    const fetchImpl = (async (u: string, i: RequestInit) => {
      url = u;
      init = i;
      return Response.json({ data: [{ inserted: 1 }] });
    }) as unknown as typeof fetch;
    const r = await push_status_seeds({ env, fetchImpl });
    expect(url).toBe(`http://core:3000${STATUS_OPTION_SEED_PATH}`);
    expect(init?.method).toBe("POST");
    const body = JSON.parse(String(init?.body));
    expect(body.entries.map((e: { model_id: string }) => e.model_id)).toEqual([
      "subject-turnos/ticketing-system-turn",
    ]);
    expect(r.pushed).toBe(true);
  });

  test("rechazo del núcleo no lanza", async () => {
    const fetchImpl = (async () => Response.json({ error: "x" }, { status: 401 })) as unknown as typeof fetch;
    expect(await push_status_seeds({ env, fetchImpl })).toEqual({
      pushed: false,
      reason: "core_refused",
      status: 401,
    });
  });
});
