import { DataTypes } from "sequelize";
import db from "../connection.js"

const User = db.define('user',{
   name: {
      type: DataTypes.STRING
   },
   age: {
      type: DataTypes.INTEGER
   }
});

export default User;

(async () => {
   await db.sync();
})();