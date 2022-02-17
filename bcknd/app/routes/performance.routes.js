module.exports = function(app) {
    const performancecontroller = require("../controllers/performance.controller");

    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });
    app.get("/performance/", performancecontroller.findAll);
    app.get("/performance/:id", performancecontroller.findOne);
    app.post("/performance", performancecontroller.create);
    app.post("/performance/:id", performancecontroller.update);
    app.delete("/performance/:id", performancecontroller.delete);
    
  };