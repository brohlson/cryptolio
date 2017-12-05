'use strict';


module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define('User', {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            primaryKey: true,
            validate: {
                isEmail: true
            }
        }
    });
    User.associate = function(models) {
        User.hasMany(models.Coin, {
            onDelete: "cascade"
        });
    };

  return User;

};

