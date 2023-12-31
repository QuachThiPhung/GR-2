const admin = require("../firebase");

exports.authCheck = async (req, res, next) => {
  // console.log(req.headers); // token
  try {
    const firebaseUser = await admin
    .getAuth()
    .verifyIdToken(req.headers.authtoken);
    console.log('Firebase user in authcheck', firebaseUser);
    req.user = firebaseUser;
    next();
  } catch (err) {
    res.status(401).json({
      err:"Invalid or expired token",
    });
  }
  next();
};
