"use server";

import nodemailer from "nodemailer";
import SMTPConnection from "nodemailer/lib/smtp-connection";
import Mail from "nodemailer/lib/mailer";

const transport = nodemailer.createTransport({
  host: "smtp.hostinger.com",
  secure: true,
  secureConnection: false,
  encryption: "SSL",
  tls: {
    ciphers: "SSLv3",
  },
  requireTLS: true,
  port: 465,
  debug: true,
  connectionTimeout: 10000,
  auth: {
    user: process.env.MAIL_USER,
    pass: "#Quincy2024",
  },
} as SMTPConnection.Options);

type sendEmailObject = {
  sender: Mail.Address;
  receipient: Mail.Address[];
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
  console.log(`Email sent to ${options.receipient[0].address}`);
}
