import {
  build_feature_shell_page,
  type KirletPageDecl,
} from "@opus-perpetuus/imperium-core-kit";

const API = "api://m/subject-turnos";

export const ticketing_system_customer_type_pages: KirletPageDecl[] = [
  {
    id: "turnos.ticketing-system-customer-type",
    path: "ticketing-system-customer-type",
    permission: "subject.turnos.ticketing-system-customer-type.read",
    build: () =>
      build_feature_shell_page({
        id: "turnos.ticketing-system-customer-type",
        owner: "subject-turnos",
        title: "Tipos de usuario",
        props: {
          basePath: "ticketing-system-customer-type",
          idKey: "id",
          nameKey: "name",
          view: {
            title: "Tipos de usuario",
            subtitle: "Submenú de turnos",
            pluralLabel: "tipos de usuario",
            singularLabel: "tipos de usuario",
            emptyTitle: "Sin registros",
            emptyDescription: "Migra desde Mongo o crea el primero",
          },
          data: {
            list: `${API}/ticketing-system-customer-type`,
            record: `${API}/ticketing-system-customer-type/:id`,
            create: { method: "POST", action: `${API}/ticketing-system-customer-type` },
            update: { method: "PATCH", action: `${API}/ticketing-system-customer-type/:id` },
            delete: { method: "DELETE", action: `${API}/ticketing-system-customer-type/:id` },
          },
          table: {
            columns: [
              { key: "name", label: "Nombre", sortable: true, priority: 1 },
              { key: "is_active", label: "Activo", sortable: true, priority: 2 },
              { key: "ref", label: "Ref", sortable: true, priority: 3 },
              { key: "priority_level", label: "priority level", sortable: true, priority: 3 },
              { key: "letter", label: "letter", sortable: true, priority: 3 },
              { key: "show_to_select", label: "show to select", sortable: true, priority: 3 },
            ],
            fillHeight: true,
            serverQuery: true,
          },
          form: {
            fields: [
              { name: "name", component: "input-text", label: "Nombre", required: true },
              { name: "description", component: "input-text", label: "Descripción" },
              { name: "ref", component: "input-text", label: "Referencia (_ref)" },
              { name: "priority_level", component: "input-text", label: "priority level" },
              { name: "letter", component: "input-text", label: "letter" },
              { name: "show_to_select", component: "input-checkbox", label: "show to select" },
            ],
          },
        },
      }),
  },
];
