import { DataSource } from "typeorm";
import { User } from "../models/user";
import dotenv from "dotenv";

dotenv.config({path:'.env.local'});

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 3306,
  username: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "test",
  synchronize: true, // Automatically syncs database schema (avoid in production)
  entities: [User],
});

AppDataSource.initialize()
  .then(() => console.log("Database connected!"))
  .catch((err) => console.error("Database connection error:", err));
