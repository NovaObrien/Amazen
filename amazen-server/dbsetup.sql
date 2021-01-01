-- CREATE TABLE profiles (
--     id VARCHAR(255) NOT NULL,
--     name VARCHAR(255) NOT NULL,
--     email VARCHAR(255) NOT NULL,
--     picture VARCHAR(255) NOT NULL,
--     PRIMARY KEY (id)
-- )
CREATE TABLE items(
  id int not NULL AUTO_INCREMENT,
  name VARCHAR(255) not NULL,
  cost int not NULL,
  description VARCHAR(255),
  isSold TINYINT DEFAULT 0
);

-- INSERT INTO items (id, name, cost)
-- VALUE (1, "Mandela", 10);

-- DROP TABLE items;

-- CREATE TABLE companyblogs(
--   id INT NOT NULL AUTO_INCREMENT,   
--   companyId INT,
--   blogId INT,
--   creatorId VARCHAR(255) NOT NULL,

--   PRIMARY KEY (id),

--   FOREIGN KEY (companyId)
--   REFERENCES companies (id)
--   ON DELETE CASCADE,

--   FOREIGN KEY (blogId)
--   REFERENCES blogs (id)
--   ON DELETE CASCADE,

--    FOREIGN KEY (creatorId)
--         REFERENCES profiles(id)
--         ON DELETE CASCADE

-- )