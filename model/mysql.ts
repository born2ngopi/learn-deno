import { Client } from "https://deno.land/x/mysql/mod.ts";

export function client(): Promise<Client> {
  const client = await new Client().connect({
    hostname: "127.0.0.1",
    username: "root",
    db: "learn-deno",
    poolSize: 3, // connection limit
    password: "example",
  });

  return client;
}
