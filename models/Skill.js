module.exports = (sequelize, DataTypes) => {
  var Skill = sequelize.define("Skill", {
    skill: DataTypes.STRING,
    image: DataTypes.TEXT
  });

  return Skill;
};
