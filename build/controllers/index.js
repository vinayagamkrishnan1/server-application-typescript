"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fcmNotificationController = exports.userController = void 0;
const user_1 = __importDefault(require("./user/user"));
exports.userController = user_1.default;
const notificationfcm_1 = __importDefault(require("./notificationfcm/notificationfcm"));
exports.fcmNotificationController = notificationfcm_1.default;
