//This is devoid of correct syntax or sequalize and is wholly incomplete
module.exports = (sequelize, DataTypes) => {
  var Bio = sequelize.define("Bio", {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    title: DataTypes.STRING,
    shortDescription: DataTypes.STRING,
    fullDescription: DataTypes.STRING,
    resume: DataTypes.STRING,
    photo: DataTypes.STRING
  });

  Bio.associate = function(models) {
    Bio.belongsTo(models.Profolio, {
      onDelete: "cascade"
    });
  };

  return Bio;
};
