//This is devoid of correct syntax or sequalize and is wholly incomplete
module.exports = (sequalize, DataTypes) => {
  var User = sequalize.define("users", {
    email: DataTypes.STRING,
    password: DataTypes.STRING
  });

  return User;
};
