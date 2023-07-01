var admin = require("firebase-admin");

var serviceAccount = require("../config/fbServiceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://wnb-gr-fe68c-default-rtdb.asia-southeast1.firebasedatabase.app"
});
