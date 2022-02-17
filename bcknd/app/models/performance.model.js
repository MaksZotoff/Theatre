module.exports = (sequelize, Sequelize) => {
    const Performance = sequelize.define("performances", {
        id_performance: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: { type: Sequelize.STRING  },
        autor: { type: Sequelize.STRING  },
        genre: { type: Sequelize.STRING  },

        duration: {  type: Sequelize.TIME  },
    });
    return Performance;
};