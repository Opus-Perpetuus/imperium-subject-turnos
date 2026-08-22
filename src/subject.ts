import { define_subject } from "@opus-perpetuus/imperium-core-kit";
import pkg from "../package.json" with { type: "json" };
import { ticketing_system_turn_module } from "./modules/ticketing-system-turn/ticketing-system-turn.routes.ts";
import { ticketing_system_consecutive_module } from "./modules/ticketing-system-consecutive/ticketing-system-consecutive.routes.ts";
import { ticketing_system_box_config_module } from "./modules/ticketing-system-box-config/ticketing-system-box-config.routes.ts";
import { news_banner_control_module } from "./modules/news-banner-control/news-banner-control.routes.ts";
import { ticketing_system_service_type_module } from "./modules/ticketing-system-service-type/ticketing-system-service-type.routes.ts";
import { ticketing_system_customer_type_module } from "./modules/ticketing-system-customer-type/ticketing-system-customer-type.routes.ts";
import { ticketing_system_turn_youtube_module } from "./modules/ticketing-system-turn-youtube/ticketing-system-turn-youtube.routes.ts";
import { ticketing_system_priority_module } from "./modules/ticketing-system-priority/ticketing-system-priority.routes.ts";
import { seed_demo } from "./seed.ts";

export const SUBJECT = define_subject({
  id: "SUBJECT-turnos",
  name: "Turnos",
  version: pkg.version,
  image: `ghcr.io/opus-perpetuus/subject-turnos:${pkg.version}`,
  compat: { nox: ">=0.5.0", kit: "^0.5.0" },
  schema_version: 1,
  menu_root: {
    id: "turnos.root",
    label: "Turnos",
    order: 0,
  },
  modules: [ticketing_system_turn_module, ticketing_system_consecutive_module, ticketing_system_box_config_module, news_banner_control_module, ticketing_system_service_type_module, ticketing_system_customer_type_module, ticketing_system_turn_youtube_module, ticketing_system_priority_module],
  seed: seed_demo,
});

export const KIRLET = SUBJECT;
