const functions = require("firebase-functions");

module.exports.doSomething = functions.https.onCall(doSomething);

function doSomething(data, context){
    const n1 = data.n1;
    const n2 = data.n2;

    return {
        add: n1 + n2,
        mul: n1 * n2
    }
}