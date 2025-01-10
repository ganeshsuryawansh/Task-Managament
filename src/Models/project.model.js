

module.exports = (sequelize, DataTypes) => {
    const Project = sequelize.define("Project", {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        title: DataTypes.STRING,
        description: DataTypes.TEXT,
    });
    return Project;
};
