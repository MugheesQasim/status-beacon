import { createConnection, Connection } from "typeorm";
import { User } from "../../src/models/user";
import request from "supertest";
import express, { Application } from "express"; // Express and App
import userRouter from "../../src/routes/userRoutes"; // Importing routes
import dotenv from "dotenv";

// Load environment variables for the test
dotenv.config({ path: ".env.test" });

let app: Application;
let connection: Connection;  // TypeORM connection

beforeAll(async () => {
  // Create a connection using the original database configuration
  connection = await createConnection({
    type: "sqlite",  // Use SQLite for an in-memory database
    database: ":memory:",  // In-memory database
    entities: [User],  // Add your entities here
    synchronize: true,  // Automatically sync schema for tests
    logging: false,  // Disable logging in tests
  });

  // Initialize the express app
  app = express();
  app.use(express.json());  // Middleware to parse JSON
  app.use(userRouter);  // Use the user router in the app
});

afterAll(async () => {
  // Close the connection after all tests are done
  await connection.close();
});

describe("User Controller Tests", () => {
  describe("POST /signup", () => {
    let createdUserId: number;

    it("should create a new user and return a token", async () => {
      const newUser = {
        id: 1,
        email: "test@example.com",
        first_name: "John",
        last_name: "Doe",
        password: "password123",
      };

      const response = await request(app)
        .post("/signup")
        .send(newUser)
        .expect(201);  // Expect HTTP status 201 (Created)

      expect(response.body).toHaveProperty("token");  // Check that a token is returned

      createdUserId = newUser.id;
    });

    it("should return an error when missing required fields", async () => {
      const invalidUser = {
        email: "test@example.com",
        password: "password123",
      };

      const response = await request(app)
        .post("/signup")
        .send(invalidUser)
        .expect(400);  // Expect HTTP status 400 (Bad Request)

      expect(response.body.error).toBe("All fields are required");
    });
    afterEach(async () => {
      // Clean up: Delete the user created during the test
      if (createdUserId) {
        await connection.getRepository(User).delete({ id: createdUserId });
      }
    });
  });
});
