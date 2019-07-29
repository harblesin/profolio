module.exports = (sequelize, DataTypes) => {
  var Project = sequelize.define("Project", {
    name: DataTypes.STRING,
    thumbnail: DataTypes.TEXT("medium"),
    deployedLink: DataTypes.STRING,
    githubLink: DataTypes.STRING,
    aboutProject: DataTypes.STRING
  });

  return Project;
};
