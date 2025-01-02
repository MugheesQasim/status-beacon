import { Request, RequestHandler, Response } from "express";
import jwt from "jsonwebtoken";
const secret = "lala123"    // secret key for token

interface SignupRequest extends Request { // interface is for defining the structure of incoming request object..
    body: {

        email: string;
        first_name: string;
        last_name: string;
        password: string;

    }
}

interface LoginRequest extends Request { // interface is for defining the structure of incoming request object..
    body: {
        email: string;
        password: string;
    }
}

// ////////////////////////////////////////   Signup Part ////////////////////////////////////////////
const signup = (req: SignupRequest, res: Response) => {
    try {
        const { email, first_name, last_name, password } = req.body;  // Destructuring user data ..
        if (!email || !first_name || !last_name || !password) {
            res.status(400).json({ error: "All the fields are required" });
            return;
        }

        // here database integration part should be added //

        // payloads should be changed
        const payload = { email, first_name, last_name };    // preparing payload for a token generation..
        const token = jwt.sign(payload, secret, { expiresIn: "6m" });   // generating jwt token
        res.status(201).json({ token });
        return;
    } catch (error: any) {
        res.status(500).json({ error: error.message });
        return;
    }
};


////////////////////////////////////////////  Login Part /////////////////////////////////////////////

const login = (req: LoginRequest, res: Response) => {
    try {
        console.log("login sucessfully")
        const { email, password } = req.body;

        if (!email || !password) {         // Here, we are validating the values
            res.status(400).json({ error: "Email and passwords both are required" })
            return;
        }

        // Should Fetch user from the database here instead of mock database user here
        const DatabaseUser = { email: "text@example.com", password: "123456" }
        if (email !== DatabaseUser.email || password != DatabaseUser.password) {
            res.status(401).json({ error: "invalid user email or password" })
        }
        // payloads should be changed
        const payload = { email };
        const token = jwt.sign(payload, secret, { expiresIn: "6m" })  // here  generating token 
        res.status(200).json({ token })  /// here returning token to frontend

    } catch (error: any) {
        res.status(500).json({ error: error.message })
    }
}



export { signup, login };