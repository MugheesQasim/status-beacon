// controllers/user.controller.ts

import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import userService from "../services/userService";

const secret = "lala123"; // secret key for token

interface SignupRequest extends Request {
    body: {
        email: string;
        first_name: string;
        last_name: string;
        password: string;
    };
}

interface LoginRequest extends Request {
    body: {
        email: string;
        password: string;
    };
}

// Signup handler
const signup = async (req: SignupRequest, res: Response) => {
    try {
        const { email, first_name, last_name, password } = req.body;

        if (!email || !first_name || !last_name || !password) {
            res.status(400).json({ error: "All fields are required" });
            return;
        }

        const user = await userService.createUser(email, first_name, last_name, password);
        const payload = { email };
        
        const token = jwt.sign(payload, secret, { expiresIn: "6m" });

        res.status(201).json({ token });
        return;
    } catch (error: any) {
        res.status(500).json({ error: error.message });
        return;
    }
};

// Login handler
const login = async (req: LoginRequest, res: Response) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            res.status(400).json({ error: "Email and password are required" });
            return;
        }

        const user = await userService.validateUserCredentials(email, password);

        if (!user) {
            res.status(401).json({ error: "Invalid email or password" });
            return;
        }

        const payload = { email };
        const token = jwt.sign(payload, secret, { expiresIn: "6m" });

        res.status(200).json({ token });
        return;
    } catch (error: any) {
        res.status(500).json({ error: error.message });
        return;
    }
};

export { signup, login };
