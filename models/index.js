/* eslint-disable no-undef */
import { Sequelize } from "sequelize";
import configData from "../config/config.js";
import UserModel from './user.js';
import TaskModel from './task.js';

const env = process.env.NODE_ENV || "development";
const config = configData[env];

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
  port:config.port
});

const User = UserModel(sequelize, Sequelize.DataTypes);
const Task = TaskModel(sequelize, Sequelize.DataTypes);

User.hasMany(Task, { foreignKey: 'userId', as: 'tasks' });
Task.belongsTo(User, { foreignKey: 'userId', as: 'user' });

const db = {
  User,
  Task,
};

(async ()=>{
  try{
    await sequelize.authenticate();
    console.log('Database connected');
  } catch(err){
    console.log('Failed to connect to the database', err.message);
  }
})();


export default db;
