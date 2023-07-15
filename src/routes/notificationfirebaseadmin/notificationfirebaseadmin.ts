import express, { NextFunction, Request, Response } from "express";
import { firebaseAdminNotificationController } from "../../controllers/index";
const router = express.Router();

router.post('/send', (req: Request, res: Response, next: NextFunction) => {
  firebaseAdminNotificationController.sendNotification(req, res, next);
});

export default router;