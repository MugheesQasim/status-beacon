"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const PORT = 3000; // You can change this to any desired port
// Middleware
app.use(body_parser_1.default.json()); // Parse incoming JSON requests
app.use((0, cors_1.default)()); // Enable Cross-Origin Resource Sharing
// app.use(router);
app.get("/ping", (req, res) => {
    res.send("Up");
});
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
