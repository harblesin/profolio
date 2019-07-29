module.exports = (sequelize, DataTypes) => {
  var Bio = sequelize.define("Bio", {
    fullName: DataTypes.STRING,
    aboutMe: DataTypes.STRING,
    photo: DataTypes.TEXT("medium")
  });

  return Bio;
};
