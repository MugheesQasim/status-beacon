"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
dotenv_1.default.config({ path: '.env.local' }); // Load environment variables from .env.local
const app = (0, express_1.default)();
const PORT = process.env.PORT;
// Middleware
app.use(body_parser_1.default.json()); // Parse incoming JSON requests
app.use((0, cors_1.default)()); // Enable Cross-Origin Resource Sharing
app.use(authRoutes_1.default);
app.get("/ping", (req, res) => {
    res.send("Up");
});
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
