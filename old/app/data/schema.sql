DROP DATABASE IF EXISTS runon_db;

CREATE DATABASE runon_db;

USE runon_db;

CREATE TABLE activegames(
  item_id INT NOT NULL AUTO_INCREMENT,
  wish VARCHAR(45) NULL,
  PRIMARY KEY (item_id)
);


CREATE TABLE words(
  item_id INT NOT NULL AUTO_INCREMENT,
  words VARCHAR(45) NULL,
  PRIMARY KEY (item_id)
);

CREATE TABLE Phrases(
  item_id INT NOT NULL AUTO_INCREMENT,
  Phrases VARCHAR(120) NULL,
  PRIMARY KEY (item_id)
);
CREATE TABLE finishedphrases(
  item_id INT NOT NULL AUTO_INCREMENT,
  finalphrase VARCHAR(120) NULL,
  PRIMARY KEY (item_id)
);
INSERT INTO finishedphrases (finishedphrases)
VALUES ("I found sandpaper in a hopless place");

CREATE TABLE topphrases(
  item_id INT NOT NULL AUTO_INCREMENT,
  votes INTEGER,
  topphrase VARCHAR(45) NULL,
  PRIMARY KEY (item_id)
);