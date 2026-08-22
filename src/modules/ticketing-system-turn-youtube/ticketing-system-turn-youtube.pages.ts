import {
  build_feature_shell_page,
  type KirletPageDecl,
} from "@opus-perpetuus/imperium-core-kit";

const API = "api://m/subject-turnos";

export const ticketing_system_turn_youtube_pages: KirletPageDecl[] = [
  {
    id: "turnos.ticketing-system-turn-youtube",
    path: "ticketing-system-turn-youtube",
    permission: "subject.turnos.ticketing-system-turn-youtube.read",
    build: () =>
      build_feature_shell_page({
        id: "turnos.ticketing-system-turn-youtube",
        owner: "subject-turnos",
        title: "Youtube para turnos",
        props: {
          basePath: "ticketing-system-turn-youtube",
          idKey: "id",
          nameKey: "name",
          view: {
            title: "Youtube para turnos",
            subtitle: "Submenú de turnos",
            pluralLabel: "youtube para turnos",
            singularLabel: "youtube para turnos",
            emptyTitle: "Sin registros",
            emptyDescription: "Migra desde Mongo o crea el primero",
          },
          data: {
            list: `${API}/ticketing-system-turn-youtube`,
            record: `${API}/ticketing-system-turn-youtube/:id`,
            create: { method: "POST", action: `${API}/ticketing-system-turn-youtube` },
            update: { method: "PATCH", action: `${API}/ticketing-system-turn-youtube/:id` },
            delete: { method: "DELETE", action: `${API}/ticketing-system-turn-youtube/:id` },
          },
          table: {
            columns: [
              { key: "name", label: "Nombre", sortable: true, priority: 1 },
              { key: "is_active", label: "Activo", sortable: true, priority: 2 },
              { key: "ref", label: "Ref", sortable: true, priority: 3 },
              { key: "video_id", label: "video id", sortable: true, priority: 3 },
            ],
            fillHeight: true,
            serverQuery: true,
          },
          form: {
            fields: [
              { name: "name", component: "input-text", label: "Nombre", required: true },
              { name: "description", component: "input-text", label: "Descripción" },
              { name: "ref", component: "input-text", label: "Referencia (_ref)" },
              { name: "video_id", component: "input-text", label: "video id" },
            ],
          },
        },
      }),
  },
];
