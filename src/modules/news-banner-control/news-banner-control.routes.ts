import { define_crud, define_module } from "@opus-perpetuus/imperium-core-kit";
import { news_banner_control_pages } from "./news-banner-control.pages.ts";
import { news_banner_control_tables } from "./news-banner-control.tables.ts";

export const news_banner_control_module = define_module({
  resource: "news-banner-control",
  labels: {
    singular: "Control de banner de noticias",
    plural: "Control de banner de noticias",
    read: "Ver Control de banner de noticias",
    write: "Editar Control de banner de noticias",
  },
  routes: define_crud({
    resource: "news-banner-control",
    table: "news_banner_control",
    soft_delete: true,
    soft_delete_field: "is_active",
    history: true,
    default_sort: "name:asc",
    id_prefix: "news-ban",
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
    },
    options_map: { value: "id", label: "name" },
  }),
  tables: news_banner_control_tables,
  pages: news_banner_control_pages,
  menu: [],
});
