module.exports = (sequelize, DataTypes) => {
  var Final = sequelize.define("Final", {
    finalLink: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    profolioId: DataTypes.INTEGER
  });

  return Final;
};
