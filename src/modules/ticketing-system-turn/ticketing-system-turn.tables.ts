import type { KirletTableDecl } from "@opus-perpetuus/imperium-core-kit";

export const ticketing_system_turn_tables: KirletTableDecl[] = [
  {
    name: "ticketing_system_turn",
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
      { name: "services", type: "text" },
      { name: "movements", type: "real" },
      { name: "customer_type", type: "text" },
      { name: "assigned_box", type: "text" },
      { name: "status", type: "text" },
      { name: "priority_level", type: "real" },
      { name: "time_box", type: "json" },
      { name: "time_attending", type: "json" },
      { name: "time", type: "json" },
    ],
    indexes: [
      { name: "idx_ticketing_system_turn_name", columns: ["name"] },
      { name: "idx_ticketing_system_turn_active", columns: ["is_active"] },
    ],
  },
];
