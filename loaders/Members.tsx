import { members } from "site/db/schema.ts";
import type { AppContext } from "site/apps/deco/records.ts";
import { type InferSelectModel } from "drizzle-orm";

export type Member = InferSelectModel<typeof members>;

export default async function getMembers(
  _: any,
  req: Request,
  { invoke }: AppContext,
): Promise<Member[]> {
  // Drizzle ORM client
  const drizzle = await invoke.records.loaders.drizzle();

  // Select all members from the database
  const data = await drizzle.select().from(members);
  console.log(data);
  return data;
}
