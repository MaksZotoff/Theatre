module.exports = (sequelize, Sequelize) => {
    const Ticket = sequelize.define("tickets", {
        id_ticket: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        place: { type: Sequelize.STRING  },
        price: {  type: Sequelize.INTEGER  },
        id_performance: {  type: Sequelize.INTEGER  },
    });
    return Ticket;
};