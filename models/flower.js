// const { Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
    const Flower = sequelize.define("flower", {
        name: {
            type: Sequelize.STRING,
        },
        color: {
            type: Sequelize.STRING,
        },
        petalsNumber: {
            type: Sequelize.INTEGER,
        },
        price: {
            type: Sequelize.INTEGER,
        },
        image: {
            type: Sequelize.STRING,
        },
    });
    return Flower;
}