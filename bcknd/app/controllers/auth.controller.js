const db = require("../models");
const config = require("../config/auth.config");

const User = db.user;
const Role = db.role;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  User.create({
    login: req.body.login,
    email: req.body.email,
    pass: bcrypt.hashSync(req.body.pass, 5),
    phone: req.body.phone,
    surname: req.body.surname,
    name: req.body.name,
  })
    .then(user => {
      if (req.body.roles) {
        Role.findAll({
          where: {
            name_role: {
              [Op.or]: req.body.roles
            }
          }
        }).then(roles => {
          user.setRoles(roles).then(() => {
            res.send({ message: "User was registered successfully!" });
          });
        });
      } else {
        user.setRoles([1]).then(() => {
          res.send({ message: "User was registered successfully!" });
        });
      }
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};


exports.signin = (req, res) => {
  
  User.findOne({
    where: {
      login: req.body.login 
    }
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.pass,
        user.pass
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      var token = jwt.sign({ id_role: user.id_user }, config.secret, {
        expiresIn: 86400 // 24 hours
      });





      var authorities = [];
      user.getRoles().then(roles => {
        for (let i = 0; i < roles.length; i++) {
          authorities.push("ROLE_" + roles[i].name_role.toUpperCase());
        }

        res.status(200).send({
          id_user: user.id_user,
          login: user.login,
          email: user.email,
          roles: authorities,
          accessToken: token,
          phone: user.phone,
          surname:user.surname,
          name: user.name,
        });
      });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};
