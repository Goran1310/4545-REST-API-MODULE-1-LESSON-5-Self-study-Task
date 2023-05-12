const Sequelize = require('sequelize');
const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);
require('dotenv').config();
const sequelize = new Sequelize(process.env.DB_NAME, process.env.ADMIN_USERNAME, process.env.ADMIN_PASSWORD, { dialect: process.env.DIALECT, host: process.env.HOST, port: process.env.PORT }); 
const db = {};
db.Sequelize = Sequelize;
fs.readdirSync(__dirname).filter((file) => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
}).forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
});
Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});
module.exports = db;
