'use strict';

var bcrypt = require("bcrypt-nodejs");

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
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        instanceMethods: {
            validPassword: function(password) {
            return bcrypt.compareSync(password, this.password);
            }
        },
        hooks: {
            beforeCreate: function(user, options, cb) {
            user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
            cb(null, options);
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

