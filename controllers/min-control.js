const express = require('express');
const router = express.Router();
var db = require("../models")

// This is where we need to add the request code -----------------------
module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    category: {
      type: DataTypes.STRING,
      defaultValue: "Personal"
    }
  });
  return Post;
};


// 1. We need to pull the random game name from the database and put that on the first page as a button. 2. We need that button when clicked, create a table on the database that pulls a random phrase and rout s you to the second page with that file. 3. We need the letters when clicked to hit the database and come back from the database on the phrase line so others can see it as well. 4. We need a condition that when the word is 6 characters long, the phrase will populate on the finished phrases table. 5. On the last page we pull from the database the finished phrases and load them on the page. 

// DO NOT CHANGE ANYTHING AFTER THIS LINE------------------------------------

router.get('/', (req, res) => {
  res.render('home');
});

router.get('/page2', (req, res) => {
  res.render('page2');
});



router.get('/page3', (req, res) => {
  res.render('page3');
});

module.exports = router