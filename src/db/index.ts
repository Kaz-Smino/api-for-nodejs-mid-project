import { Client, Pool } from "pg";

export const client = new Client({
  host: "localhost",
  port: 5432,
  user: "kazuyasumino",
  password: "",
  database: "project_management"
});

export const pool = new Pool({
  host: "localhost",
  port: Number(process.env.PGPORT) || 5432,
  user: process.env.PGUSER || 'kazuyasumino',
  password: process.env.PGPASSWORD || '',
  database: process.env.PGDATABASE || 'ec_sample'
});