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
const constants_1 = require("../../constants/constants");
// import * as FCM from "fcm-node";
const FCM = require("fcm-node");
const fcm = new FCM(constants_1.FCM_SERVER_KEY);
const sendNotification = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { registration_ids, title, body } = request.body;
    let ids = [
        "f8fR58EcR5OKGeHkMXAYoX:APA91bGZISlJeVZC0eA5GpUmYBDNtudoHC-460F6nkFL2wlwq4b7OoEGFnwo97AZFkIstoKUma7FRettTRKjPolnQ7xGyLXvhBR8dOh8Nt89DUuyg2aOQc0QYTA7RlI4LQjXmeSm0xrR",
        "cIFioSgNQwSdByVWp8e42R:APA91bG27YZAJ7Dg6yhYjmUWFnGUc0Xhm_H_PJ7wMO-yndoneHbDbs9Tz4KJbIgAIZhWn3NaXHoYCWTRSXEf5YIzhfarBWUfTwiDckg6uC88Hn4_ImY4-tSGjYHLdXxh1vA2ac0wcF2C"
    ];
    try {
        if (ids.length > 0) {
            const message = {
                registration_ids: ids,
                notification: {
                    title: title || "Default title",
                    body: body || "Default Message",
                    sound: "default",
                    icon: "ic_launcher",
                    badge: "1",
                    click_action: "FCM_PLUGIN_ACTIVITY",
                },
                priority: "high",
                data: {
                    action: "Test",
                    payload: "message" // payload
                }
            };
            fcm.send(message, (err, result) => {
                if (err) {
                    console.log("Something has gone wrong!", JSON.stringify(err));
                    response.json(err);
                }
                else {
                    console.log("Successfully sent with response: ", result);
                    response.json(result);
                }
            });
        }
        else {
            response.json({ message: "No registration ids found." });
        }
    }
    catch (error) {
        response.json({ error: error });
    }
});
module.exports = {
    sendNotification,
};
