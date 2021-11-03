import { Router } from "express";
import {
  getUser,
  createUser,
  deleteUser,
  updateUserInformation,
} from "../user.js";

const router = Router();

router.get("/", getUser);
router.post("/", createUser);
router.delete("/:userId", deleteUser);
router.put("/:userId", updateUserInformation);

export default router;
