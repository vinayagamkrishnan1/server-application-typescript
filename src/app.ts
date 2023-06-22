import express, { Application, Request, Response } from 'express';

// import userRoutes from "../src/routes/users";
// import fcmNotificationRoutes from "../src/routes/users";
// import firebaseAdminNotificationRoutes from "../src/routes/users";

const app: Application = express();

app.use("/", (req: Request, res: Response): void => {
    res.send('Hello world!');
});

// app.use("/user/api", userRoutes);
// app.use("/notification/fcm", fcmNotificationRoutes);
// app.use("/notification/firebaseadmin", firebaseAdminNotificationRoutes);

// app.listen(PORT, (): void => {
//     console.log('SERVER IS UP ON PORT:', PORT);
// });

export default app;
