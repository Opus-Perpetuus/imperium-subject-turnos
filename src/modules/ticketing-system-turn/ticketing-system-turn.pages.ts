import {
  build_feature_shell_page,
  type KirletPageDecl,
} from "@opus-perpetuus/imperium-core-kit";

const API = "api://m/subject-turnos";

export const ticketing_system_turn_pages: KirletPageDecl[] = [
  {
    id: "turnos.ticketing-system-turn",
    path: "ticketing-system-turn",
    permission: "subject.turnos.ticketing-system-turn.read",
    build: () =>
      build_feature_shell_page({
        id: "turnos.ticketing-system-turn",
        owner: "subject-turnos",
        title: "Turnos de caja",
        props: {
          basePath: "ticketing-system-turn",
          idKey: "id",
          nameKey: "name",
          view: {
            title: "Turnos de caja",
            subtitle: "Submenú de turnos",
            pluralLabel: "turnos de caja",
            singularLabel: "turnos de caja",
            emptyTitle: "Sin registros",
            emptyDescription: "Migra desde Mongo o crea el primero",
          },
          data: {
            list: `${API}/ticketing-system-turn`,
            record: `${API}/ticketing-system-turn/:id`,
            create: { method: "POST", action: `${API}/ticketing-system-turn` },
            update: { method: "PATCH", action: `${API}/ticketing-system-turn/:id` },
            delete: { method: "DELETE", action: `${API}/ticketing-system-turn/:id` },
          },
          table: {
            columns: [
              { key: "name", label: "Nombre", sortable: true, priority: 1 },
              { key: "is_active", label: "Activo", sortable: true, priority: 2 },
              { key: "ref", label: "Ref", sortable: true, priority: 3 },
              { key: "services", label: "services", sortable: true, priority: 3 },
              { key: "movements", label: "movements", sortable: true, priority: 3 },
              { key: "customer_type", label: "customer type", sortable: true, priority: 3 },
              { key: "assigned_box", label: "assigned box", sortable: true, priority: 3 },
              { key: "status", label: "status", sortable: true, priority: 3 },
              { key: "priority_level", label: "priority level", sortable: true, priority: 3 },
            ],
            fillHeight: true,
            serverQuery: true,
          },
          form: {
            fields: [
              { name: "name", component: "input-text", label: "Nombre", required: true },
              { name: "description", component: "input-text", label: "Descripción" },
              { name: "ref", component: "input-text", label: "Referencia (_ref)" },
              { name: "services", component: "input-text", label: "services" },
              { name: "movements", component: "input-number", label: "movements" },
              { name: "customer_type", component: "input-text", label: "customer type" },
              { name: "assigned_box", component: "input-text", label: "assigned box" },
              { name: "status", component: "input-text", label: "status" },
              { name: "priority_level", component: "input-number", label: "priority level" },
              { name: "time_box", component: "input-json", label: "time box" },
              { name: "time_attending", component: "input-json", label: "time attending" },
              { name: "time", component: "input-json", label: "time" },
            ],
          },
        },
      }),
  },
];
