import express, { Router } from "express";
import { userController } from "../utils/provider";

const router = Router();
export default (): express.Router => {
  router.get("/", userController.getAllUsers);
  router.get("/:id", userController.getUserById);
  router.post("/", userController.createUser);
  router.put("/:id", userController.updateUser);
  router.delete("/:id", userController.deleteUser);
  return router;
};
