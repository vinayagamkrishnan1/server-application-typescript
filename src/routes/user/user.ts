import express, { NextFunction, Request, Response } from "express";
import { userController } from "../../controllers/index";
const router = express.Router();

router.post('/create', async (req: Request, res: Response, next: NextFunction) => {
  userController.createUser(req, res, next);
});

router.put('/update', async (req: Request, res: Response, next: NextFunction) => {
  userController.updateUser(req, res, next);
});

router.delete('/delete', async (req: Request, res: Response, next: NextFunction) => {
  userController.deleteUser(req, res, next);
});

export default router;