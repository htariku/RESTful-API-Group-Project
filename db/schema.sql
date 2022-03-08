DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS comments;

CREATE TABLE users (
user_id INTEGER AUTO_INCREMENT PRIMARY KEY,
user_accountname VARCHAR(30) NOT NULL,
user_firstname VARCHAR(30) NOT NULL,
user_lastname VARCHAR(30) NOT NULL
);

CREATE TABLE posts (
    title VARCHAR(30) NOT NULL,
    post_id INTEGER AUTO_INCREMENT PRIMARY KEY
);

CREATE TABLE comments (
comment_text VARCHAR(30) NOT NULL,
comment_id INTEGER AUTO_INCREMENT PRIMARY KEY
);
