module.exports = function(app) {
  
  const admincontroller = require("../controllers/admin.controller");
  const authcontroller = require("../controllers/auth.controller")
  const {  verifySignUp  } = require("../middleware");

  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  
    app.get("/user/", admincontroller.findAll);
    app.get("/user/:id", admincontroller.findOne);

    app.get("/user?login=", admincontroller.findByLogin); 
    app.post("/user/:id", admincontroller.update);
    app.delete("/user/:id", admincontroller.delete);
  
};