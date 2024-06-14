USE flashcards_db;

-- Delete all decks
-- Delete all decks-cards relationships
SET SQL_SAFE_UPDATES=0;
DELETE FROM decks_cards;
-- Delete all cards
DELETE FROM cards;
-- Delete all decks
DELETE FROM decks;
SET SQL_SAFE_UPDATES=1;

-- Create some empty decks
INSERT INTO decks (uuid, name, description)
VALUES(UUID_TO_BIN(UUID()), "Japanese vocabulary", "My deck with japanese vocabulary");

INSERT INTO decks (uuid, name, description)
VALUES(UUID_TO_BIN(UUID()), "English vocabulary", "My deck with english vocabulary");

INSERT INTO decks (uuid, name, description)
VALUES(UUID_TO_BIN(UUID()), "Linux commands", "My deck with Linux commands");

INSERT INTO decks (uuid, name, description)
VALUES(UUID_TO_BIN(UUID()), "Mysterious deck", NULL);

-- INSERT INTO decks (uuid, name, description)
-- VALUES(UUID_TO_BIN(UUID()), NULL, "Mysterious description");

-- Get all decks
SELECT * FROM decks;

-- Get deck by name
SELECT * FROM decks WHERE name="Linux commands";

-- Patch deck title searching deck by title
SET SQL_SAFE_UPDATES=0;
UPDATE decks
SET name="Bash commands"
WHERE name="Linux commands";
SELECT * FROM decks;
SET SQL_SAFE_UPDATES=1;

-- Patch deck description searching deck by title
SET SQL_SAFE_UPDATES=0;
UPDATE decks
SET description="Now it is not a mysterious deck"
WHERE name="Mysterious deck";
SELECT * FROM decks;
SET SQL_SAFE_UPDATES=1;

-- Add several cards to an existing deck
-- Insert it into cards table:
INSERT INTO CARDS (uuid, question, answer)
VALUES(UUID_TO_BIN(UUID()), "What is the meaning of Hello World?", "Hola, mundo");
-- Insert it into decks_cards relationship table:
INSERT INTO decks_cards (deck_uuid, card_uuid)
VALUES ((SELECT uuid FROM decks WHERE name="English vocabulary" LIMIT 1), (SELECT uuid FROM cards WHERE question="What is the meaning of Hello World?" LIMIT 1));
-- Insert it into cards table:
INSERT INTO CARDS (uuid, question, answer)
VALUES(UUID_TO_BIN(UUID()), "Go", "Ir");
-- Insert it into decks_cards relationship table:
INSERT INTO decks_cards (deck_uuid, card_uuid)
VALUES ((SELECT uuid FROM decks WHERE name="English vocabulary" LIMIT 1), (SELECT uuid FROM cards WHERE question="Go" LIMIT 1));
-- Insert it into cards table:
INSERT INTO CARDS (uuid, question, answer)
VALUES(UUID_TO_BIN(UUID()), "Be", "Ser, estar");
-- Insert it into decks_cards relationship table:
INSERT INTO decks_cards (deck_uuid, card_uuid)
VALUES ((SELECT uuid FROM decks WHERE name="English vocabulary" LIMIT 1), (SELECT uuid FROM cards WHERE question="Be" LIMIT 1));
-- Insert it into cards table:
INSERT INTO CARDS (uuid, question, answer)
VALUES(UUID_TO_BIN(UUID()), "scp", "Stream copy by SSH");
-- Insert it into decks_cards relationship table:
INSERT INTO decks_cards (deck_uuid, card_uuid)
VALUES ((SELECT uuid FROM decks WHERE name="Bash commands" LIMIT 1), (SELECT uuid FROM cards WHERE question="scp" LIMIT 1));

-- Patch some cards
SET SQL_SAFE_UPDATES=0;
UPDATE cards
SET question="To Be"
WHERE question="Be";

UPDATE cards
SET repetitions=1
WHERE question="To Be";
SET SQL_SAFE_UPDATES=1;

-- Get all cards:
SELECT * FROM cards;

-- Get a card by ID:
SELECT * FROM cards WHERE uuid = (SELECT uuid FROM cards WHERE question="scp");

-- Get all cards inside a deck:
SELECT * FROM cards WHERE uuid IN (
	SELECT card_uuid FROM decks_cards WHERE deck_uuid = (
		SELECT uuid FROM decks WHERE name="English vocabulary" LIMIT 1
	)
);

-- Delete a deck by name
-- Create auxiliar table:
CREATE TEMPORARY TABLE IF NOT EXISTS cards_to_delete AS
SELECT card_uuid FROM decks_cards WHERE deck_uuid = (
	SELECT uuid FROM decks WHERE name="English vocabulary" LIMIT 1
);
-- Delete them in relationship table:
SET SQL_SAFE_UPDATES=0;
DELETE FROM decks_cards WHERE deck_uuid = (SELECT uuid FROM decks WHERE name="English vocabulary" LIMIT 1);
-- Delete inner cards:
DELETE FROM cards WHERE uuid IN (SELECT * FROM cards_to_delete);
-- Delete deck:
DELETE FROM decks WHERE name="English vocabulary";
-- Drop auxiliar table:
DROP TEMPORARY TABLE cards_to_delete;
SET SQL_SAFE_UPDATES=1;

-- Delete a certain card inside a deck:
-- Delete relationship:
DELETE FROM decks_cards WHERE card_uuid=(
	SELECT uuid FROM cards WHERE question="scp"
);
-- Delete card from cards table:
SET SQL_SAFE_UPDATES=0;
DELETE FROM cards WHERE question = "scp";
SET SQL_SAFE_UPDATES=1;

