const config = require("../config/db.config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    },

    define: { timestamps: false }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user.model")(sequelize, Sequelize);
db.role = require("./role.model")(sequelize, Sequelize);

db.performance = require("./performance.model")(sequelize, Sequelize);
db.ticket = require("./ticket.model")(sequelize, Sequelize);
db.order = require("./order.model")(sequelize, Sequelize);



// M:M(N:M) -> BelongsToMany Association 
db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId",
  define: {
    timestamps: false
  }
});

db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId",
  define: {
    timestamps: false
  }
});


db.user.hasMany(db.order, {
  foreignKey: "id_user",
})
db.order.belongsTo(db.user, {
  foreignKey: "id_user",
})


db.order.hasMany(db.ticket, {
  foreignKey: "id_ticket",
})
db.ticket.belongsTo(db.order, {
  foreignKey: "id_ticket",
})


db.ticket.belongsTo(db.performance, {
  foreignKey: "id_performance",
})




db.ROLES = [ "admin", "user"];

module.exports = db; 



/* 
drop database theatre;
create database theatre;
use theatre;
INSERT INTO roles(id_role,name_role) VALUES(1,'admin'),(2,'employee');
*/