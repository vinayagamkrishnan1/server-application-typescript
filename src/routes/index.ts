import express from "express";

import userRouter from "./user/user";
import fcmNotificationRouter from "./notificationfcm/notificationfcm";
import firebaseAdminNotificationRouter from "./notificationfirebaseadmin/notificationfirebaseadmin";

const router = express.Router();

router.use('/api/user', userRouter);
router.use('/notification/fcm', fcmNotificationRouter);
router.use('/notification/firebaseadmin', firebaseAdminNotificationRouter);

export default router;