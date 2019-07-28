module.exports = (sequelize, DataTypes) => {
  var Contact = sequelize.define("Contact", {
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    github: DataTypes.STRING,
    linkedIn: DataTypes.STRING
  });

  return Contact;
};
