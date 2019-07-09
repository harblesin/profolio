//This is devoid of correct syntax or sequalize and is wholly incomplete
module.exports = (sequelize, DataTypes) => {
  var Details = sequelize.define("Details", {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    title: DataTypes.STRING,
    shortDescription: DataTypes.STRING,
    fullDescription: DataTypes.STRING,
    resume: DataTypes.STRING,
    photo: DataTypes.STRING
  });

  Details.associate = function(models) {
    Details.belongsTo(models.User, {
      onDelete: "cascade"
    });
  };

  return Details;
};
