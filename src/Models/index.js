const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const User = require("./user")(sequelize, Sequelize.DataTypes);
const Project = require("./project")(sequelize, Sequelize.DataTypes);
const Task = require("./task")(sequelize, Sequelize.DataTypes);

// Define relationships
User.belongsToMany(Project, { through: "UserProjects" });
Project.belongsToMany(User, { through: "UserProjects" });
Project.hasMany(Task);
Task.belongsTo(Project);

module.exports = { sequelize, User, Project, Task };
