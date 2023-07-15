import express, { NextFunction, Request, Response } from "express";
import { fcmNotificationController } from "../../controllers/index";
const router = express.Router();

router.post('/send', (req: Request, res: Response, next: NextFunction) => {
  fcmNotificationController.sendNotification(req, res, next);
});

export default router;