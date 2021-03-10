module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        email: {
            type: DataTypes.STRING,
            validate: {
              isEmail:{msg:"You have entered an invalid email address!"},
            },
            unique: { msg: 'Email address already in use!' },
      
          },
    });
    return User;
  };