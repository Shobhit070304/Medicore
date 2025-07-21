import admin from "firebase-admin";

import serviceAccount from "./firebase-info.js";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export default admin;
