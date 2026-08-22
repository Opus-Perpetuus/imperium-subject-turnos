import { define_crud, define_module } from "@opus-perpetuus/imperium-core-kit";
import { ticketing_system_box_config_pages } from "./ticketing-system-box-config.pages.ts";
import { ticketing_system_box_config_tables } from "./ticketing-system-box-config.tables.ts";

export const ticketing_system_box_config_module = define_module({
  resource: "ticketing-system-box-config",
  labels: {
    singular: "Configurar cajas",
    plural: "Configurar cajas",
    read: "Ver Configurar cajas",
    write: "Editar Configurar cajas",
  },
  routes: define_crud({
    resource: "ticketing-system-box-config",
    table: "ticketing_system_box_config",
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
      box_number: { type: "number" },
      allowed_services: { type: "string", search: true },
      min_movements: { type: "number" },
      max_movements: { type: "number" },
      allowed_customer_types: { type: "string", search: true },
      exclusive: { type: "boolean" },
    },
    options_map: { value: "id", label: "name" },
  }),
  tables: ticketing_system_box_config_tables,
  pages: ticketing_system_box_config_pages,
  menu: [],
});
