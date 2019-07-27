//This is devoid of correct syntax or sequalize and is wholly incomplete
module.exports = (sequelize, DataTypes) => {
  var Bio = sequelize.define("Bio", {
    fullName: DataTypes.STRING,
    aboutMe: DataTypes.STRING,
    photo: DataTypes.TEXT
  });

  return Bio;
};
