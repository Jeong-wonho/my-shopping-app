/** Sequelize */
// const Sequelize = require('sequelize');

// const sequelize = require('../util/database');

// const User = sequelize.define('user', {
//   id: {
//     type: Sequelize.INTEGER,
//     autoIncrement: true,
//     allowNull: false,
//     primaryKey: true
//   },
//   name : {
//     type: Sequelize.STRING,
//   },
//   email: {
//     type: Sequelize.STRING,
//   }
// });

/** mongo db */
const mongodb = require("mongodb");
const getDb = require("../util/database").getDb;

class User {
  constructor( username, email) {
    this.name = username;
    this.email = email;
  }

  save() {
    const db = getDb();
    
    return db.collection("users").insertOne(this);
  }

  static findById(userId) {
    const db = getDb();
    return db
      .collection("users")
      .findOne({ _id: new mongodb.ObjectId(userId) })
  }
}

module.exports = User;