module.exports = (sequelize, DataTypes) => {
  var Project = sequelize.define("Project", {
    name: DataTypes.STRING,
    thumbnail: DataTypes.BLOB,
    deployedLink: DataTypes.STRING,
    githubLink: DataTypes.STRING
  });

  return Project;
};
