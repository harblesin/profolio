module.exports = (sequelize, DataTypes) => {
  var Profolio = sequelize.define("Profolio", {
    name: DataTypes.STRING
  });

  Profolio.associate = function(models) {
    Profolio.hasOne(models.Bio, {
      onDelete: "cascade"
    });
    Profolio.hasMany(models.Skill, {
      onDelete: "cascade"
    });
    Profolio.hasMany(models.Project, {
      onDelete: "cascade"
    });
    Profolio.hasOne(models.Contact, {
      onDelete: "cascade"
    });
  };

  return Profolio;
};
