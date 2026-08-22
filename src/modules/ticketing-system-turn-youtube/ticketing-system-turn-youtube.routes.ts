import { define_crud, define_module } from "@opus-perpetuus/imperium-core-kit";
import { ticketing_system_turn_youtube_pages } from "./ticketing-system-turn-youtube.pages.ts";
import { ticketing_system_turn_youtube_tables } from "./ticketing-system-turn-youtube.tables.ts";

export const ticketing_system_turn_youtube_module = define_module({
  resource: "ticketing-system-turn-youtube",
  labels: {
    singular: "Youtube para turnos",
    plural: "Youtube para turnos",
    read: "Ver Youtube para turnos",
    write: "Editar Youtube para turnos",
  },
  routes: define_crud({
    resource: "ticketing-system-turn-youtube",
    table: "ticketing_system_turn_youtube",
    soft_delete: true,
    soft_delete_field: "is_active",
    history: true,
    default_sort: "name:asc",
    id_prefix: "ticketin",
    fields: {
      name: { type: "string", required: true, search: true },
      description: { type: "string", search: true },
      is_active: { type: "boolean" },
      state: { type: "string" },
      ref: { type: "string", search: true },
      search_field: { type: "string", search: true },
      created_by: { type: "string" },
      custom_data: { type: "json" },
      payload: { type: "json" },
      video_id: { type: "string", search: true },
    },
    options_map: { value: "id", label: "name" },
  }),
  tables: ticketing_system_turn_youtube_tables,
  pages: ticketing_system_turn_youtube_pages,
  menu: [],
});
