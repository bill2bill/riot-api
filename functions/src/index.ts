// import * as functions from "firebase-functions";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
// import * as firebaseHelper from 'firebase-functions-helper';
import * as express from 'express';
import * as bodyParser from "body-parser";
import init from "./tournament-v4";
admin.initializeApp(functions.config().firebase);
// const db = admin.firestore();
const app = express();
const main = express();
// const contactsCollection = 'contacts';
main.use('/lol', app);
main.use(bodyParser.json());
main.use(bodyParser.urlencoded({ extended: false }));
// webApi is your functions name, and you will pass main as
// a parameter
export const webApi = functions.https.onRequest(main);

//Tournament V4 API
init(app)

// // Add new contact
// app.post('/contacts', async (req, res) => {
//     try {
//         const contact: any = {
//             firstName: req.body['firstName'],
//             lastName: req.body['lastName'],
//             email: req.body['email']
//         }
//         const newDoc = await firebaseHelper.firestoreHelper
//             .createNewDocument(db, contactsCollection, contact);
//         res.status(201).send(`Created a new contact: ${newDoc.id}`);
//     } catch (error) {
//         res.status(400).send(`Contact should only contains firstName, lastName and email!!!`)
//     }
// })
// // Update new contact
// app.patch('/contacts/:contactId', async (req, res) => {
//     const updatedDoc = await firebaseHelper.firestoreHelper
//         .updateDocument(db, contactsCollection, req.params.contactId, req.body);
//     res.status(204).send(`Update a new contact: ${updatedDoc}`);
// })
// // View a contact
// app.get('/contacts/:contactId', (req, res) => {
//     firebaseHelper.firestoreHelper
//         .getDocument(db, contactsCollection, req.params.contactId)
//         .then(doc => res.status(200).send(doc))
//         .catch(error => res.status(400).send(`Cannot get contact: ${error}`));
// })
// // // View all contacts
// app.get('/contacts', (req, res) => {
//     firebaseHelper.firestoreHelper
//         .backup(contactsCollection)
//         .then(data => res.status(200).send(data))
//         .catch(error => res.status(400).send(`Cannot get contacts: ${error}`));
// })
// // Delete a contact
// app.delete('/contacts/:contactId', async (req, res) => {
//     const deletedContact = await firebaseHelper.firestoreHelper
//         .deleteDocument(db, contactsCollection, req.params.contactId);
//     res.status(204).send(`Contact is deleted: ${deletedContact}`);
// })