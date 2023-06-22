import express, { NextFunction, Request, Response } from "express";
import firebaseAdmin from "firebase-admin";
import serviceAccount from "../../securefiles/ble-sample-app-firebase-adminsdk.json";
import { MulticastMessage } from "firebase-admin/lib/messaging/messaging-api";


firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(serviceAccount as firebaseAdmin.ServiceAccount)
});

const sendNotification = async(request: Request, response: Response, next: NextFunction) => {
    try {
        const msg: MulticastMessage = {
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
        firebaseAdmin.messaging().sendEachForMulticast(msg)
        .then(result => {
            console.log("Successfully sent message:", result);
            response.json(result);
        })
        .catch(error => {
            console.log("ERROR while firebase admin", error);
            response.json(error);
        });
    } catch (error) {
        response.json({error: error});
    }
}

export default {
    sendNotification
}