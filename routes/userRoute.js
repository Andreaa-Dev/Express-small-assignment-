import { Router } from "express";
import { addUser } from "../user.js";

const router = Router();

router.get("/user", addUser);

export default router;
