import {
  build_feature_shell_page,
  type KirletPageDecl,
} from "@opus-perpetuus/imperium-core-kit";

const API = "api://m/subject-turnos";

export const news_banner_control_pages: KirletPageDecl[] = [
  {
    id: "turnos.news-banner-control",
    path: "news-banner-control",
    permission: "subject.turnos.news-banner-control.read",
    build: () =>
      build_feature_shell_page({
        id: "turnos.news-banner-control",
        owner: "subject-turnos",
        title: "Control de banner de noticias",
        props: {
          basePath: "news-banner-control",
          idKey: "id",
          nameKey: "name",
          view: {
            title: "Control de banner de noticias",
            subtitle: "Submenú de turnos",
            pluralLabel: "control de banner de noticias",
            singularLabel: "control de banner de noticias",
            emptyTitle: "Sin registros",
            emptyDescription: "Migra desde Mongo o crea el primero",
          },
          data: {
            list: `${API}/news-banner-control`,
            record: `${API}/news-banner-control/:id`,
            create: { method: "POST", action: `${API}/news-banner-control` },
            update: { method: "PATCH", action: `${API}/news-banner-control/:id` },
            delete: { method: "DELETE", action: `${API}/news-banner-control/:id` },
          },
          table: {
            columns: [
              { key: "name", label: "Nombre", sortable: true, priority: 1 },
              { key: "is_active", label: "Activo", sortable: true, priority: 2 },
              { key: "ref", label: "Ref", sortable: true, priority: 3 },
            ],
            fillHeight: true,
            serverQuery: true,
          },
          form: {
            fields: [
              { name: "name", component: "input-text", label: "Nombre", required: true },
              { name: "description", component: "input-text", label: "Descripción" },
              { name: "ref", component: "input-text", label: "Referencia (_ref)" },
            ],
          },
        },
      }),
  },
];
