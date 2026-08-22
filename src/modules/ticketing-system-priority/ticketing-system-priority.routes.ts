import { define_crud, define_module } from "@opus-perpetuus/imperium-core-kit";
import { ticketing_system_priority_pages } from "./ticketing-system-priority.pages.ts";
import { ticketing_system_priority_tables } from "./ticketing-system-priority.tables.ts";

export const ticketing_system_priority_module = define_module({
  resource: "ticketing-system-priority",
  labels: {
    singular: "Prioridades",
    plural: "Prioridades",
    read: "Ver Prioridades",
    write: "Editar Prioridades",
  },
  routes: define_crud({
    resource: "ticketing-system-priority",
    table: "ticketing_system_priority",
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
      priority_level: { type: "number" },
    },
    options_map: { value: "id", label: "name" },
  }),
  tables: ticketing_system_priority_tables,
  pages: ticketing_system_priority_pages,
  menu: [],
});
