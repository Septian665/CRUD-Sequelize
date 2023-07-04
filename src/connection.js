import { Sequelize } from "sequelize";

const sequelize = new Sequelize('tes-bandung', 'root', '', {
   host: 'localhost',
   dialect: 'mysql',
   logging: false
});

export default sequelize;