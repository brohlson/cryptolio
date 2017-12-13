'use strict';

module.exports = function(sequelize, DataTypes) {
  var Coin = sequelize.define('Coin', {
    coinName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    coinSymbol:{
      type: DataTypes.STRING,
      allowNull: false
    },
    numCoins: {
      type: DataTypes.INTEGER,
      allowNull: false,
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