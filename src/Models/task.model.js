

module.exports = (sequelize, DataTypes) => {
    const Task = sequelize.define("Task", {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        title: DataTypes.STRING,
        status: { type: DataTypes.STRING, defaultValue: "To Do" },
    });
    return Task;
};
