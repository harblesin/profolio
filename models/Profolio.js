module.exports = (sequelize, DataTypes) => {
  var Profolio = sequelize.define("Profolio", {
    name: DataTypes.STRING
  });

  Profolio.associate = function(models) {
    Profolio.belongsTo(models.User);
    Profolio.hasMany(models.Bio);
    Profolio.hasMany(models.Skill);
  };

  return Profolio;
};
