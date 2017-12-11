'use strict';

var bcrypt = require("bcrypt-nodejs");

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define('user', {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            primaryKey: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, 
        {
        hooks: {
            beforeCreate: function(user, options, cb) {
            user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
            }
        }
    });
    User.associate = function(models) {
        User.hasMany(models.Coin, {
            onDelete: "cascade"
        });
    };
    User.prototype.validPassword = function(password) {
        return bcrypt.compareSync(password, this.password);
    };

  return User;

};

