DROP DATABASE IF EXISTS job_tracker_db;

CREATE DATABASE job_tracker_db;

USE job_tracker_db;

CREATE TABLE company(
  name VARCHAR(50) PRIMARY KEY,
  web_link VARCHAR(30),
  location VARCHAR(20)
);

CREATE TABLE job(
  id MEDIUMINT NOT NULL AUTO_INCREMENT,
  job_title VARCHAR(30),
  job_number INT,
  job_link VARCHAR(50),
  data_applied DATE,
  screenshot_filename VARCHAR(30),
  company_name VARCHAR(50),
  concluded BOOLEAN,
  PRIMARY KEY(id)
);

CREATE TABLE point_of_contact(
  id INT AUTO_INCREMENT PRIMARY KEY,
  fname VARCHAR(20),
  lname VARCHAR(20),
  title VARCHAR(30),
  company_name VARCHAR(50),
  internal BOOLEAN,
  email VARCHAR(30) UNIQUE,
  phone VARCHAR(12),
  job_id INT,
  communication_id INT
);

CREATE TABLE note(
  id INT AUTO_INCREMENT PRIMARY KEY,
  subject VARCHAR(20),
  table_name VARCHAR(20),
  filename VARCHAR(20),
  date_created DATE,
  job_id INT,
  company_id INT
);

CREATE TABLE communication(
  id INT (AUTO_INCREMENT) PRIMARY KEY,
  subject VARCHAR(20),
  type VARCHAR(20),
  date DATE,
  job_id INT
);

