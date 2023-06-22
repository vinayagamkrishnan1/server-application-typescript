"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const serviceAccount = __importStar(require("../securefiles/ble-sample-app-firebase-adminsdk.json"));
firebase_admin_1.default.initializeApp({
    credential: firebase_admin_1.default.credential.cert(serviceAccount)
});
const sendNotification = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const msg = {
            notification: {
                body: "This is an FCM notification that displays an image!",
                title: "FCM Notification",
            },
            tokens: [
                "f8fR58EcR5OKGeHkMXAYoX:APA91bGZISlJeVZC0eA5GpUmYBDNtudoHC-460F6nkFL2wlwq4b7OoEGFnwo97AZFkIstoKUma7FRettTRKjPolnQ7xGyLXvhBR8dOh8Nt89DUuyg2aOQc0QYTA7RlI4LQjXmeSm0xrR",
                "cIFioSgNQwSdByVWp8e42R:APA91bG27YZAJ7Dg6yhYjmUWFnGUc0Xhm_H_PJ7wMO-yndoneHbDbs9Tz4KJbIgAIZhWn3NaXHoYCWTRSXEf5YIzhfarBWUfTwiDckg6uC88Hn4_ImY4-tSGjYHLdXxh1vA2ac0wcF2C"
            ],
            android: {
                priority: "high"
            }
        };
        firebase_admin_1.default.messaging().sendEachForMulticast(msg)
            .then(response => {
            console.log("Successfully sent message:", response);
            res.send(response);
        })
            .catch(error => {
            console.log("ERROR while firebase admin", error);
            res.send(error);
        });
    }
    catch (error) {
        res.json({ error: error });
    }
});
exports.default = {
    sendNotification
};
