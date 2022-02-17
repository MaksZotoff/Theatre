module.exports = (sequelize, Sequelize) => {
    const Role = sequelize.define("roles", {
      id_role: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name_role: {  type: Sequelize.STRING  }
    });
    return Role;
  };
