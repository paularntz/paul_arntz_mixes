/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

admin.initializeApp();

// Nodemailer configuration
let transporter = nodemailer.createTransport({
  service: 'gmail', // You can use any email provider
  auth: {
    user: 'paularntz@gmail.com',
    pass: 'GPdaGnd15!',
  },
});

// Function to send email when a new message is added
exports.sendEmailNotification = functions.firestore
  .document('messages/{messageId}')
  .onCreate((snap, context) => {
    const messageData = snap.data();
    const mailOptions = {
      from: 'paularntz@gmail.com',
      to: 'paul@paularntz.com',
      subject: 'New paularntz.com message',
      text: `You have received a new message:\n\nName: ${messageData.name}\nEmail: ${messageData.email}\nPhone: ${messageData.phone}\nMessage: ${messageData.message}\nDate: ${messageData.date}`,
    };

    return transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log('Error sending email:', error);
      }
      return console.log('Email sent:', info.response);
    });
  });
