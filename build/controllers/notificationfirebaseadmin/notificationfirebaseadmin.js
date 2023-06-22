"use strict";
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
const ble_sample_app_firebase_adminsdk_json_1 = __importDefault(require("../../securefiles/ble-sample-app-firebase-adminsdk.json"));
firebase_admin_1.default.initializeApp({
    credential: firebase_admin_1.default.credential.cert(ble_sample_app_firebase_adminsdk_json_1.default)
});
const sendNotification = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
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
            .then(result => {
            console.log("Successfully sent message:", result);
            response.json(result);
        })
            .catch(error => {
            console.log("ERROR while firebase admin", error);
            response.json(error);
        });
    }
    catch (error) {
        response.json({ error: error });
    }
});
exports.default = {
    sendNotification
};
