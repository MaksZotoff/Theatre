module.exports = (sequelize, Sequelize) => {
    const Order = sequelize.define("orders", {
        id_order: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_user: { type: Sequelize.INTEGER  },
        id_ticket: { type: Sequelize.INTEGER  },

    });
    return Order;
};