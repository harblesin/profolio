//This is devoid of correct syntax or sequalize and is wholly incomplete
module.exports = (sequelize, DataTypes) => {
  var Skill = sequelize.define("Skill", {
    skill: DataTypes.STRING,
    image: DataTypes.BLOB
  });

  return Skill;
};
