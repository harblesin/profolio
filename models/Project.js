module.exports = (sequelize, DataTypes) => {
  var Project = sequelize.define("Project", {
    name: DataTypes.STRING,
    thumbnail: DataTypes.TEXT,
    deployedLink: DataTypes.STRING,
    githubLink: DataTypes.STRING,
    aboutProject: DataTypes.STRING
  });

  return Project;
};
