module.exports = function(app) {
    const ticketcontroller = require("../controllers/ticket.controller");

    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });
    app.get("/ticket/", ticketcontroller.findAll);
    app.get("/ticket/:id", ticketcontroller.findOne);
    app.post("/ticket", ticketcontroller.create);
    app.post("/ticket/:id", ticketcontroller.update);
    app.delete("/ticket/:id", ticketcontroller.delete);
    
  };