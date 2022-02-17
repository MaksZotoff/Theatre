const db = require("../models");
const config = require("../config/auth.config");

const User = db.user;
const Role = db.role;

const Op = db.Sequelize.Op;


//retrieve all employees / find by Id
exports.findAll = (req, res) =>{
    const id_user = req.query.id_user;
    var condition = id_user ? {id_user: {[Op.like]: `%${id_user}%`} } : null;
    User.findAll({  where: condition    })
    .then( user =>{
        res.send(user);
    })
    .catch( err =>{
        res.status(500).send( { message: err.message });
    });
};

exports.findOne = (req, res) => {
  const id_user = req.params.id;
  var condition = id_user ? {id_user: {[Op.eq]: `${id_user}`} } : null;

  User.findOne({  where: condition    })
  .then( user =>{
      res.send(user);
  })
  .catch( err =>{
      res.status(500).send( { message: err.message });
  });
};


exports.findByLogin = (req, res) => {
  const login = req.query.login;
  var condition = login ? {login: {[Op.eq]: `${login}`} } : null;

    User.findAll({  where: condition })
    .then( user =>{
        res.send(user);
    })
    .catch( err =>{
        res.status(500).send( { message: err.message });
    });
};



exports.update = (req, res) =>{
    const id_user = req.params.id;

        User.update(req.body, {
            where: { id_user: id_user }
        })
        .then(num => {
            if (num == 1) {
              res.send({
                message: "User was updated successfully."
              });
            } else {
              res.send({
                message: `Cannot update User with id=${id}.`
              });
            }
        })
        .catch(err => {
            res.status(500).send({
              message: err.message || "Error updating User with id=" + id
            });
        });
};


exports.delete = (req, res) =>{
    const id_user = req.params.id;
    User.destroy({
        where: {    id_user: id_user  }
    })

    .then(num => {
        if (num == 1) {
          res.send({
            message: "User was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete User with id=${id_user}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || "Could not delete User with id=" + id_user
        });
      });
};
