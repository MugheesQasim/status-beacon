import { DataSource } from "typeorm";
import { User } from "../models/user";
import dotenv from "dotenv";

if (process.env.NODE_ENV === "test") {
  dotenv.config({ path: ".env.test" });  // Load .env.test for testing
} else {
  dotenv.config({ path: ".env.local" });  // Load .env.local for normal environment
}

console.log(process.env.DB_HOST);  // Debug: Check which environment variables are loaded

const isTestEnv = process.env.NODE_ENV === "test";

// Create the DataSource
export const AppDataSource = new DataSource({
  type: isTestEnv ? "sqlite" : "mysql",  // Use sqlite for testing and mysql for normal
  host: isTestEnv ? "" : process.env.DB_HOST || "localhost",  // SQLite doesn't need a host
  port: isTestEnv ? 0 : Number(process.env.DB_PORT) || 3306,  // SQLite doesn't need a port
  username: isTestEnv ? "" : process.env.DB_USER || "root",  // SQLite doesn't need a username
  password: isTestEnv ? "" : process.env.DB_PASSWORD || "",  // SQLite doesn't need a password
  database: isTestEnv ? ":memory:" : process.env.DB_NAME || "test",  // Use in-memory SQLite for tests
  synchronize: true,  // Automatically sync schema (avoid in production)
  entities: [User],   // Add your entities here
  logging: isTestEnv ? false : true,  // Disable logging for tests
});

AppDataSource.initialize()
  .then(() => console.log("Database connected!"))
  .catch((err) => console.error("Database connection error:", err));
