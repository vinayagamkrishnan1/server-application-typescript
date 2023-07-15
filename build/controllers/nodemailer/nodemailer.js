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
const nodemailer_1 = __importDefault(require("nodemailer"));
const constants_1 = require("../../constants/constants");
const Mailgen = require('mailgen');
/** send mail from testing account */
const signup = (request, response, next) => __awaiter(void 0, void 0, void 0, function* () {
    /** testing account */
    let testAccount = yield nodemailer_1.default.createTestAccount();
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer_1.default.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
            user: testAccount.user,
            pass: testAccount.pass, // generated ethereal password
        },
    });
    let message = {
        from: '"Fred Foo 👻" <foo@example.com>',
        to: "bar@example.com, baz@example.com",
        subject: "Hello ✔",
        text: "Successfully Register with us.",
        html: "<b>Successfully Register with us.</b>", // html body
    };
    transporter.sendMail(message).then((info) => {
        return response.status(201)
            .json({
            msg: "you should receive an email",
            info: info.messageId,
            preview: nodemailer_1.default.getTestMessageUrl(info)
        });
    }).catch(error => {
        return response.status(500).json({ error });
    });
});
/** send mail from real gmail account */
const sendEmail = (req, res, next) => {
    const { userEmail } = req.body;
    let config = {
        service: 'gmail',
        auth: {
            user: constants_1.EMAIL,
            pass: constants_1.PASSWORD
        }
    };
    let transporter = nodemailer_1.default.createTransport(config);
    let MailGenerator = new Mailgen({
        theme: "default",
        product: {
            name: "Mailgen",
            link: 'https://mailgen.js/'
        }
    });
    let response = {
        body: {
            name: "Daily Tuition",
            intro: "Your bill has arrived!",
            table: {
                data: [
                    {
                        item: "Nodemailer Stack Book",
                        description: "A Backend application",
                        price: "$10.99",
                    }
                ]
            },
            outro: "Looking forward to do more business"
        }
    };
    let mail = MailGenerator.generate(response);
    let message = {
        from: constants_1.EMAIL,
        to: userEmail,
        subject: "Place Order",
        html: mail
    };
    transporter.sendMail(message).then(() => {
        return res.status(201).json({
            msg: "you should receive an email"
        });
    }).catch((error) => {
        return res.status(500).json({ error });
    });
};
module.exports = {
    signup,
    sendEmail
};
