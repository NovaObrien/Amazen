-- CREATE TABLE profiles (
--     id VARCHAR(255) NOT NULL,
--     name VARCHAR(255) NOT NULL,
--     email VARCHAR(255) NOT NULL,
--     picture VARCHAR(255) NOT NULL,
--     PRIMARY KEY (id)
-- )
CREATE TABLE vaults(
  id int NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) not NULL,
  description VARCHAR(255),
  isPublic TINYINT DEFAULT 0,
  creatorId VARCHAR(255) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (creatorId)
  REFERENCES profiles(id)
  ON DELETE CASCADE
);

-- INSERT INTO profiles (id, name, email, creatorId)
-- VALUE (1, "Beautiful Hill-Top Home", 4, 3);
-- DROP TABLE items;

