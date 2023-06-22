"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import userRoutes from "../src/routes/users";
// import fcmNotificationRoutes from "../src/routes/users";
// import firebaseAdminNotificationRoutes from "../src/routes/users";
const app = (0, express_1.default)();
app.use("/", (req, res) => {
    res.send('Hello world!');
});
// app.use("/user/api", userRoutes);
// app.use("/notification/fcm", fcmNotificationRoutes);
// app.use("/notification/firebaseadmin", firebaseAdminNotificationRoutes);
// app.listen(PORT, (): void => {
//     console.log('SERVER IS UP ON PORT:', PORT);
// });
exports.default = app;
