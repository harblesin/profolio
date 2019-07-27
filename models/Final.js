module.exports = (sequelize, DataTypes) => {
  var Final = sequelize.define("Final", {
    finalLink: DataTypes.STRING
  });

  return Final;
};
