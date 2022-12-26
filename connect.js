  var admin = require("firebase-admin");

  var serviceAccount = require('./firebase_realtime.json');

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://baochay-hcmus-default-rtdb.firebaseio.com"
  });
module.exports = admin;
