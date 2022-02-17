module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
      id_user: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      login : { type: Sequelize.STRING  },
      pass : { type: Sequelize.STRING },
      email : { type: Sequelize.STRING  },
      phone: {  type: Sequelize.STRING  },   
      surname: {  type: Sequelize.STRING  },
      name: {  type: Sequelize.STRING  },
    });
    return User;
  };


