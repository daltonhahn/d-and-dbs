CREATE TABLE IF NOT EXISTS characters (
	character_ID INT AUTO_INCREMENT,
	character_name VARCHAR(255) NOT NULL,
	character_lvl INT NOT NULL,
	PRIMARY KEY (character_ID)
);

CREATE TABLE IF NOT EXISTS alignments (
	align_ID INT AUTO_INCREMENT,
	align_name VARCHAR(255) NOT NULL,
	align_desc TEXT,
	PRIMARY KEY (align_ID)
);

CREATE TABLE IF NOT EXISTS classes (
	class_ID INT AUTO_INCREMENT,
	class_name VARCHAR(255) NOT NULL,
	class_desc TEXT,
	class_profieciency TEXT,
	class_spell_type VARCHAR(255) NOT NULL,
	PRIMARY KEY (class_ID)
);

CREATE TABLE IF NOT EXISTS magicitems (
	item_ID INT AUTO_INCREMENT,
	item_name VARCHAR(255) NOT NULL,
	item_desc TEXT,
	item_type VARCHAR(255) NOT NULL,
	item_rarity VARCHAR(255),
	PRIMARY KEY (item_ID)
);

CREATE TABLE IF NOT EXISTS races (
	race_ID INT AUTO_INCREMENT,
	race_name VARCHAR(255) NOT NULL,
	race_desc TEXT,
	race_speed VARCHAR(255) NOT NULL,
	race_langs TEXT,
	PRIMARY KEY (race_ID)
);

CREATE TABLE IF NOT EXISTS spells (
	spell_ID INT AUTO_INCREMENT,
	spell_name VARCHAR(255) NOT NULL,
	spell_desc TEXT, 
	spell_lvl VARCHAR(255) NOT NULL,
	spell_school VARCHAR(255) NOT NULL,
	spell_classes VARCHAR(255) NOT NULL,
	PRIMARY KEY (spell_ID)
);

CREATE TABLE IF NOT EXISTS weapons (
	weapon_ID INT AUTO_INCREMENT,
	weapon_name VARCHAR(255) NOT NULL,
	weapon_type VARCHAR(255) NOT NULL,
	weapon_dmg VARCHAR(255) NOT NULL,
	PRIMARY KEY (weapon_ID)
);

CREATE TABLE IF NOT EXISTS character_alignment (
	character_ID INT,
	align_ID INT,
	FOREIGN KEY (character_ID) REFERENCES characters (character_ID),
	FOREIGN KEY (align_ID) REFERENCES alignments (align_ID)
);

CREATE TABLE IF NOT EXISTS character_class (
	character_ID INT,
	class_ID INT,
	FOREIGN KEY (character_ID) REFERENCES characters (character_ID),
	FOREIGN KEY (class_ID) REFERENCES classes (class_ID)
);

CREATE TABLE IF NOT EXISTS character_race (
	character_ID INT,
	race_ID INT,
	FOREIGN KEY (character_ID) REFERENCES characters (character_ID),
	FOREIGN KEY (race_ID) REFERENCES races (race_ID)
);

CREATE TABLE IF NOT EXISTS character_magicitem (
	character_ID INT,
	item_ID INT,
	FOREIGN KEY (character_ID) REFERENCES characters (character_ID),
	FOREIGN KEY (item_ID) REFERENCES magicitems (item_ID)
);

CREATE TABLE IF NOT EXISTS character_weapon (
	character_ID INT,
	weapon_ID INT,
	FOREIGN KEY (character_ID) REFERENCES characters (character_ID),
	FOREIGN KEY (weapon_ID) REFERENCES weapons (weapon_ID)
);

CREATE TABLE IF NOT EXISTS character_spell (
	character_ID INT,
	spell_ID INT,
	FOREIGN KEY (character_ID) REFERENCES characters (character_ID),
	FOREIGN KEY (spell_ID) REFERENCES spells (spell_ID)
);
