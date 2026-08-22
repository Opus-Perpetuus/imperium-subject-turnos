import type { KirletTableDecl } from "@opus-perpetuus/imperium-core-kit";

export const ticketing_system_box_config_tables: KirletTableDecl[] = [
  {
    name: "ticketing_system_box_config",
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
      { name: "box_number", type: "real" },
      { name: "allowed_services", type: "text" },
      { name: "min_movements", type: "real" },
      { name: "max_movements", type: "real" },
      { name: "allowed_customer_types", type: "text" },
      { name: "exclusive", type: "boolean" },
    ],
    indexes: [
      { name: "idx_ticketing_system_box_config_name", columns: ["name"] },
      { name: "idx_ticketing_system_box_config_active", columns: ["is_active"] },
    ],
  },
];
