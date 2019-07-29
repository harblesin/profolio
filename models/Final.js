module.exports = (sequelize, DataTypes) => {
  var Final = sequelize.define("Final", {
    finalLink: DataTypes.STRING,
    userId: DataTypes.INTEGER
  });

  return Final;
};
