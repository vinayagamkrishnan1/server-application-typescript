import express, { NextFunction, Request, Response } from "express";
import { fcmNotificationController } from "../../controllers/index";
const router = express.Router();

router.post('/send', async (req: Request, res: Response, next: NextFunction) => {
  console.log("route::::", req);
  fcmNotificationController.sendNotification(req, res, next);
});

export default router;