//This is devoid of correct syntax or sequalize and is wholly incomplete
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define("User", {
    email: DataTypes.STRING,
    password: DataTypes.STRING
  });

  User.associate = function(models) {
    User.hasMany(models.Details, {
      onDelete: "cascade"
    });
  };

  return User;
};
