import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./routes/authRoutes";

const app = express();
const PORT = 3000; // You can change this to any desired port

// Middleware
app.use(bodyParser.json()); // Parse incoming JSON requests
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(router);

app.get("/ping", (req: Request, res: Response): void => {
  res.send("Up")
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
