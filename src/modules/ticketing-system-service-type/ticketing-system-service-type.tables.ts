import type { KirletTableDecl } from "@opus-perpetuus/imperium-core-kit";

export const ticketing_system_service_type_tables: KirletTableDecl[] = [
  {
    name: "ticketing_system_service_type",
    columns: [
      { name: "id", type: "text", primaryKey: true },
      { name: "name", type: "text", notNull: true },
      { name: "description", type: "text" },
      { name: "is_active", type: "boolean", notNull: true, default: true },
      { name: "state", type: "text" },
      { name: "ref", type: "text", unique: true },
      { name: "search_field", type: "text" },
      { name: "created_by", type: "text" },
      { name: "custom_data", type: "json" },
      { name: "payload", type: "json" },
      { name: "created_at", type: "text", notNull: true },
      { name: "updated_at", type: "text", notNull: true },
      { name: "priority_level", type: "text" },
      { name: "letter", type: "text" },
      { name: "show_to_select", type: "boolean" },
    ],
    indexes: [
      { name: "idx_ticketing_system_service_type_name", columns: ["name"] },
      { name: "idx_ticketing_system_service_type_active", columns: ["is_active"] },
    ],
  },
];
