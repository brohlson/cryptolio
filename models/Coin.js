'use strict';

module.exports = function(sequelize, DataTypes) {
  var Coin = sequelize.define('Coin', {
    coinName: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    coinSymbol:{
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    numCoins: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        isInt: true
      }
    }
  });
  Coin.associate = function(models) {
    Coin.belongsTo(models.user, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Coin;
};