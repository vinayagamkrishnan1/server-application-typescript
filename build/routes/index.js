"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("./user/user"));
const notificationfcm_1 = __importDefault(require("./notificationfcm/notificationfcm"));
const notificationfirebaseadmin_1 = __importDefault(require("./notificationfirebaseadmin/notificationfirebaseadmin"));
const router = express_1.default.Router();
router.use("/api/user", user_1.default);
router.use("/notification/fcm", notificationfcm_1.default);
router.use("/notification/firebaseadmin", notificationfirebaseadmin_1.default);
exports.default = router;
