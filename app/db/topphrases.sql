SELECT * FROM runon_db.finishedphrases;

INSERT INTO finishedphrases (finalphrase, word)
VALUES ("I found in a hopless place", "sandpaper");
INSERT INTO finishedphrases (finalphrase, word)
VALUES ("What I like best about billy is he ", "died");
INSERT INTO finishedphrases (finalphrase, word)
VALUES ("What I like best about billy is he ", "died");
INSERT INTO finishedphrases (finalphrase, word)
VALUES ("What I like best about billy is he ", "died");

SELECT finalphrase, word, count(*)
FROM runon_db.finishedphrases
GROUP BY finalphrase, word
HAVING ( COUNT(*) > 1 )
