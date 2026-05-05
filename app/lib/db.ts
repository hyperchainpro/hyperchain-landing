import { neon } from "@neondatabase/serverless";

// Neon HTTP connection - works in edge/serverless environments
const sql = neon(process.env.DATABASE_URL!);

export { sql };

// Helper for raw queries
export async function query<T = Record<string, unknown>>(
  strings: TemplateStringsArray,
  ...values: unknown[]
): Promise<T[]> {
  return sql(strings, ...values) as Promise<T[]>;
}
