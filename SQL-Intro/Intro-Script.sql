-- creating a new Table in our DB
CREATE TABLE bands(
	id SERIAL PRIMARY KEY,
	name VARCHAR NOT NULL,
	genre VARCHAR
);

-- Add data to the table
INSERT INTO bands(name,genre)
VALUES('The Beatles','Rock'),
		('Linkin Park','Rock');


 

-- gets all the values from the table bands
SELECT * FROM bands;

-- get 1 column from bands table
SELECT id,name FROM bands;


-- Deleting a row
DELETE FROM bands;


-- Updating from table
UPDATE bands
SET genre='pop'
WHERE name ='Michael Jackson';


-- Order By DESC

SELECT * FROM bands
ORDER BY name ;




-- Relationships in SQL
CREATE TABLE musicians(
	id SERIAL PRIMARY KEY,
	name VARCHAR NOT NULL UNIQUE,
	age INTEGER NOT NULL,
	sings BOOLEAN,
	dances BOOLEAN,
	-- foreign key
	band_id INTEGER REFERENCES bands(id)
);

SELECT * FROM musicians;
SELECT * FROM bands;


INSERT INTO musicians(name,age,sings,dances)
VALUES('Omar',35,false,false);






-- JOIN
SELECT 
	m.id AS musician_id,
	m.name AS musician_name,
	m.age,
	b.id AS band_id,
	b.name AS banad_name,
	b.genre
FROM musicians m
FULL JOIN bands b ON b.id = m.band_id;



-- Many To Many
DROP TABLE musicians;


CREATE TABLE musicians(
	id SERIAL PRIMARY KEY,
	name VARCHAR NOT NULL UNIQUE,
	age INTEGER NOT NULL,
	sings BOOLEAN,
	dances BOOLEAN
);


CREATE TABLE musicians_bands(
	band_id INTEGER REFERENCES bands(id),
	musician_id INTEGER REFERENCES musicians(id),
	PRIMARY KEY(band_id, musician_id)
);

INSERT INTO musicians(name,age,sings,dances)
VALUES('PauL Mccartney',55,false,true);


SELECT * FROM musicians_bands;
SELECT * FROM musicians;
SELECT * FROM bands;


INSERT INTO musicians_bands(band_id,musician_id)
VALUES(2,1);



SELECT 
	b.id AS band_id,
	b.name AS band_name,
	m.id AS musician_id,
	m.name AS musician_name,
	m.age,
	m.sings,
	m.dances
FROM musicians_bands mb
JOIN bands b ON b.id = mb.band_id
JOIN musicians m ON m.id =mb.musician_id;


-- CREATE a new table called songs. A band can have many songs but a song can only
--  belong to one band
-- BONUS: write a query to get all the songs in our databse and include the band name with it

CREATE TABLE songs(
	id SERIAL PRIMARY KEY,
	title VARCHAR(255) NOT NULL,
	band_id INTEGER REFERENCES bands(id)
);

SELECT * FROM songs;
SELECT * FROM bands;

INSERT INTO songs(title,band_id)
VALUES('In the End',2);


SELECT
	s.title AS song_title,
	b.name AS band_name,
	s.id AS song_id,
	b.id AS band_id
FROM songs s
JOIN bands b ON s.band_id = b.id;

