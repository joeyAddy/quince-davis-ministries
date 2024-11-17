/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import { onRequest } from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// export const helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

import * as functions from "firebase-functions";
import * as nodemailer from "nodemailer";
import * as cors from "cors";

const corsHandler = cors(); // Allow all origins, customize as needed

// Define the transporter function
const getTransporter = (
  sender: "info" | "newsletter",
): nodemailer.Transporter => {
  const emailConfigs = {
    info: {
      address: functions.config().email.info.address,
      password: functions.config().email.info.password,
    },
    newsletter: {
      address: functions.config().email.newsletter.address,
      password: functions.config().email.newsletter.password,
    },
  };

  const emailConfig = emailConfigs[sender];
  if (!emailConfig) {
    throw new Error("Invalid sender provided!");
  }

  return nodemailer.createTransport({
    service: "gmail", // Or other provider
    auth: {
      user: emailConfig.address,
      pass: emailConfig.password,
    },
  });
};

// Define the HTTPS function
export const sendEmail = onRequest((req, res) => {
  corsHandler(req, res, async () => {
    if (req.method !== "POST") {
      return res.status(405).send({ error: "Only POST requests are allowed." });
    }

    const { sender, to, subject, message } = req.body;

    if (!sender || !to || !subject || !message) {
      return res.status(400).send({ error: "Missing required fields." });
    }

    try {
      const transporter = getTransporter(sender as "info" | "newsletter");

      const mailOptions: nodemailer.SendMailOptions = {
        from: `"${sender}" <${functions.config().email[sender].address}>`,
        to,
        subject,
        text: message,
      };

      await transporter.sendMail(mailOptions);
      return res
        .status(200)
        .send({ success: true, message: "Email sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      return res.status(500).send({ error: "Failed to send email." });
    }
  });
});
