import express from "express";

import userRouter from "./user/user";
import fcmNotificationRouter from "./notificationfcm/notificationfcm";

const router = express.Router();

router.use('/api/user', userRouter);
router.use('/notification/fcm', fcmNotificationRouter);

export default router;