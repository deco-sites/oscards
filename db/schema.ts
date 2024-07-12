/**
 * The code snippet below is an example.
 */

import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const profiles = sqliteTable("profiles", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name"),
  description: text("description"),
  image: text("image"),
  role: text("role"),
  score: integer("score"),
  xUrl: integer("xUrl"),
  linkedInUrl: integer("linkedInUrl"),
  gitHubUrl: integer("gitHubUrl"),
});
