const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

module.exports.doSomething = functions.https.onCall(doSomething);

function doSomething(data, context){
    const n1 = data.n1;
    const n2 = data.n2;

    return {
        add: n1 + n2,
        mul: n1 * n2
    }
}