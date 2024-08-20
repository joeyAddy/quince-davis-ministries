"use server";

import nodemailer from "nodemailer";
import SMTPConnection from "nodemailer/lib/smtp-connection";
import Mail from "nodemailer/lib/mailer";

const transport = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
} as SMTPConnection.Options);

type sendEmailObject = {
  sender: Mail.Address;
  receipient: Mail.Address;
  subject: string;
  message?: string;
};

export async function sendEmail(options: sendEmailObject) {
  const mailOptions = {
    from: options.sender,
    to: options.receipient,
    subject: options.subject,
    html: options.message,
    text: options.message,
  };

  await transport.sendMail(mailOptions);
  console.log(`Email sent to ${options.receipient.address}`);
}
