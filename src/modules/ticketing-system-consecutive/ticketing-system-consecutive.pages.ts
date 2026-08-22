import {
  build_feature_shell_page,
  type KirletPageDecl,
} from "@opus-perpetuus/imperium-core-kit";

const API = "api://m/subject-turnos";

export const ticketing_system_consecutive_pages: KirletPageDecl[] = [
  {
    id: "turnos.ticketing-system-consecutive",
    path: "ticketing-system-consecutive",
    permission: "subject.turnos.ticketing-system-consecutive.read",
    build: () =>
      build_feature_shell_page({
        id: "turnos.ticketing-system-consecutive",
        owner: "subject-turnos",
        title: "Consecutivos de turnos",
        props: {
          basePath: "ticketing-system-consecutive",
          idKey: "id",
          nameKey: "name",
          view: {
            title: "Consecutivos de turnos",
            subtitle: "Submenú de turnos",
            pluralLabel: "consecutivos de turnos",
            singularLabel: "consecutivos de turnos",
            emptyTitle: "Sin registros",
            emptyDescription: "Migra desde Mongo o crea el primero",
          },
          data: {
            list: `${API}/ticketing-system-consecutive`,
            record: `${API}/ticketing-system-consecutive/:id`,
            create: { method: "POST", action: `${API}/ticketing-system-consecutive` },
            update: { method: "PATCH", action: `${API}/ticketing-system-consecutive/:id` },
            delete: { method: "DELETE", action: `${API}/ticketing-system-consecutive/:id` },
          },
          table: {
            columns: [
              { key: "name", label: "Nombre", sortable: true, priority: 1 },
              { key: "is_active", label: "Activo", sortable: true, priority: 2 },
              { key: "ref", label: "Ref", sortable: true, priority: 3 },
              { key: "consecutive", label: "consecutive", sortable: true, priority: 3 },
            ],
            fillHeight: true,
            serverQuery: true,
          },
          form: {
            fields: [
              { name: "name", component: "input-text", label: "Nombre", required: true },
              { name: "description", component: "input-text", label: "Descripción" },
              { name: "ref", component: "input-text", label: "Referencia (_ref)" },
              { name: "consecutive", component: "input-number", label: "consecutive" },
            ],
          },
        },
      }),
  },
];
