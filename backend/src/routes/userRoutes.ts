import express from "express";
import {signup, login} from "../controllers/userController";
const router = express.Router();

// router.post
router.post('/signup',signup) // Maps to signup logic
router.post('/login',login);   // Maps to login logic

export default router;