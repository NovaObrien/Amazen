-- CREATE TABLE profiles (
--     id VARCHAR(255) NOT NULL,
--     name VARCHAR(255) NOT NULL,
--     email VARCHAR(255) NOT NULL,
--     picture VARCHAR(255) NOT NULL,
--     PRIMARY KEY (id)
-- )
-- CREATE TABLE vaults(
--   Id int NOT NULL AUTO_INCREMENT,
--   Title VARCHAR(255) not NULL,
--   IsPrivate TINYINT DEFAULT 0,
--   CreatorId VARCHAR(255) NOT NULL,
--   PRIMARY KEY (Id),
--   FOREIGN KEY (CreatorId)
--   REFERENCES profiles(Id)   
--   ON DELETE CASCADE
-- );
-- CREATE TABLE keeps(
--   Id int NOT NULL AUTO_INCREMENT,
--   Name VARCHAR(255) not NULL,
--   Description VARCHAR(255),
--   Img VARCHAR(255) not NULL,
--   Views int DEFAULT 0,
--   KeepSaves int DEFAULT 0,
--   CreatorId VARCHAR(255) NOT NULL,
--   PRIMARY KEY (Id),
--   FOREIGN KEY (CreatorId)
--   REFERENCES profiles(Id)   
--   ON DELETE CASCADE
-- );
--  INSERT INTO keeps (name, Description, img, creatorId)
--   VALUE ("First Keep", "Funny kitty I found", "https://i1.wp.com/katzenworld.co.uk/wp-content/uploads/2019/06/funny-cat.jpeg?fit=1920%2C1920&ssl=1", "6e771f2c-94e3-49b3-881b-b6ad3c35a465");

  -- INSERT INTO vaults (title, isPrivate, creatorId)
  -- VALUE ("First Vault", 1, "6e771f2c-94e3-49b3-881b-b6ad3c35a465");

-- INSERT INTO profiles (id, name, email, creatorId)
-- VALUE (1, "Beautiful Hill-Top Home", 4, 3);

-- DROP TABLE vaults;

      -- SELECT * FROM keeps k
      -- INNER JOIN profiles p ON p.id = k.creatorId;

      -- SELECT * FROM keeps k
      -- INNER JOIN 
      -- profiles.Name,
      -- profiles.Img
      --  ON profiles.Id = k.CreatorId;

    -- SELECT k.*, p.id AS profileId, p.picture, p.name AS profileName FROM keeps k
    -- INNER JOIN profiles p ON p.id = k.creatorId;

      -- SELECT k.*, 
      -- p.id AS profileId, 
      -- p.name AS profileName,
      -- p.picture,
      -- p.email
      -- FROM keeps k
      -- INNER JOIN profiles p ON p.id = k.creatorId;
      

    -- SELECT * FROM profiles;

    -- SELECT * FROM profiles WHERE id = @Id

