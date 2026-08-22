import {
  build_feature_shell_page,
  type KirletPageDecl,
} from "@opus-perpetuus/imperium-core-kit";

const API = "api://m/subject-turnos";

export const ticketing_system_box_config_pages: KirletPageDecl[] = [
  {
    id: "turnos.ticketing-system-box-config",
    path: "ticketing-system-box-config",
    permission: "subject.turnos.ticketing-system-box-config.read",
    build: () =>
      build_feature_shell_page({
        id: "turnos.ticketing-system-box-config",
        owner: "subject-turnos",
        title: "Configurar cajas",
        props: {
          basePath: "ticketing-system-box-config",
          idKey: "id",
          nameKey: "name",
          view: {
            title: "Configurar cajas",
            subtitle: "Submenú de turnos",
            pluralLabel: "configurar cajas",
            singularLabel: "configurar cajas",
            emptyTitle: "Sin registros",
            emptyDescription: "Migra desde Mongo o crea el primero",
          },
          data: {
            list: `${API}/ticketing-system-box-config`,
            record: `${API}/ticketing-system-box-config/:id`,
            create: { method: "POST", action: `${API}/ticketing-system-box-config` },
            update: { method: "PATCH", action: `${API}/ticketing-system-box-config/:id` },
            delete: { method: "DELETE", action: `${API}/ticketing-system-box-config/:id` },
          },
          table: {
            columns: [
              { key: "name", label: "Nombre", sortable: true, priority: 1 },
              { key: "is_active", label: "Activo", sortable: true, priority: 2 },
              { key: "ref", label: "Ref", sortable: true, priority: 3 },
              { key: "box_number", label: "box number", sortable: true, priority: 3 },
              { key: "allowed_services", label: "allowed services", sortable: true, priority: 3 },
              { key: "min_movements", label: "min movements", sortable: true, priority: 3 },
              { key: "max_movements", label: "max movements", sortable: true, priority: 3 },
              { key: "allowed_customer_types", label: "allowed customer types", sortable: true, priority: 3 },
              { key: "exclusive", label: "exclusive", sortable: true, priority: 3 },
            ],
            fillHeight: true,
            serverQuery: true,
          },
          form: {
            fields: [
              { name: "name", component: "input-text", label: "Nombre", required: true },
              { name: "description", component: "input-text", label: "Descripción" },
              { name: "ref", component: "input-text", label: "Referencia (_ref)" },
              { name: "box_number", component: "input-number", label: "box number" },
              { name: "allowed_services", component: "input-text", label: "allowed services" },
              { name: "min_movements", component: "input-number", label: "min movements" },
              { name: "max_movements", component: "input-number", label: "max movements" },
              { name: "allowed_customer_types", component: "input-text", label: "allowed customer types" },
              { name: "exclusive", component: "input-checkbox", label: "exclusive" },
            ],
          },
        },
      }),
  },
];
