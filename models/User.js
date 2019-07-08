//This is devoid of correct syntax or sequalize and is wholly incomplete
module.exports = (sequalize, DataTypes) => {
  var User = sequalize.define("users", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    email: DataTypes.STRING,
    password: DataTypes.STRING
  });

  return User;
};
