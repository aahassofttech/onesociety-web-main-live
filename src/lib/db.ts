import "server-only";
import mysql, {
  Pool,
  PoolOptions,
  ResultSetHeader,
  RowDataPacket,
} from "mysql2/promise";

export type { ResultSetHeader, RowDataPacket };

type QueryParam = string | number | boolean | null | Date | Buffer;

let pool: Pool | null = null;

function parseDatabaseUrl(url: string): PoolOptions {
  const parsed = new URL(url);
  return {
    host: parsed.hostname,
    port: parsed.port ? Number(parsed.port) : 3306,
    user: decodeURIComponent(parsed.username),
    password: decodeURIComponent(parsed.password),
    database: parsed.pathname.replace(/^\//, ""),
  };
}

function getPoolConfig(): PoolOptions {
  if (process.env.DATABASE_URL) {
    return parseDatabaseUrl(process.env.DATABASE_URL);
  }

  return {
    host: process.env.MYSQL_HOST ?? "localhost",
    port: Number(process.env.MYSQL_PORT ?? 3306),
    user: process.env.MYSQL_USER ?? "oneplace",
    password: process.env.MYSQL_PASSWORD ?? "",
    database: process.env.MYSQL_DATABASE ?? "oneplace",
  };
}

export function getPool(): Pool {
  if (!pool) {
    pool = mysql.createPool({
      ...getPoolConfig(),
      waitForConnections: true,
      connectionLimit: 5,
      dateStrings: true,
    });
  }
  return pool;
}

export async function query<T extends RowDataPacket[]>(
  sql: string,
  params: QueryParam[] = []
): Promise<T> {
  const [rows] = await getPool().query<T>(sql, params);
  return rows;
}

export async function execute(
  sql: string,
  params: QueryParam[] = []
): Promise<ResultSetHeader> {
  const [result] = await getPool().execute<ResultSetHeader>(sql, params);
  return result;
}
