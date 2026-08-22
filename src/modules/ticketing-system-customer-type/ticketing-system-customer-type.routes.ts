import { define_crud, define_module } from "@opus-perpetuus/imperium-core-kit";
import { ticketing_system_customer_type_pages } from "./ticketing-system-customer-type.pages.ts";
import { ticketing_system_customer_type_tables } from "./ticketing-system-customer-type.tables.ts";

export const ticketing_system_customer_type_module = define_module({
  resource: "ticketing-system-customer-type",
  labels: {
    singular: "Tipos de usuario",
    plural: "Tipos de usuario",
    read: "Ver Tipos de usuario",
    write: "Editar Tipos de usuario",
  },
  routes: define_crud({
    resource: "ticketing-system-customer-type",
    table: "ticketing_system_customer_type",
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
      priority_level: { type: "string", search: true },
      letter: { type: "string", search: true },
      show_to_select: { type: "boolean" },
    },
    options_map: { value: "id", label: "name" },
  }),
  tables: ticketing_system_customer_type_tables,
  pages: ticketing_system_customer_type_pages,
  menu: [],
});
