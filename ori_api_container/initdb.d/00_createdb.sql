SET CHARSET UTF8;

CREATE DATABASE IF NOT EXISTS dive_dev_db DEFAULT CHARACTER SET = 'utf8mb4' DEFAULT COLLATE = 'utf8mb4_unicode_ci';

CREATE TABLE comment ( comment_id INTEGER , comment text );

ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY 'root';