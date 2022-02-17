const { verifySignUp } = require("../middleware");

const authcontroller = require("../controllers/auth.controller")

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  
  app.post(
    "/signup",
    [
      verifySignUp.checkDuplicateLoginOrEmail,
      verifySignUp.checkRolesExisted
    ],
    authcontroller.signup
  );


  app.post("/signin", authcontroller.signin);
};

