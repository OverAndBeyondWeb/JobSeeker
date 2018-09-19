DROP DATABASE IF EXISTS job_tracker_db;

CREATE DATABASE job_tracker_db;

USE job_tracker_db;

CREATE TABLE company (
  name VARCHAR(50) PRIMARY KEY,
  web_link VARCHAR(30),
  location VARCHAR(20)
);

CREATE TABLE job (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  job_title VARCHAR(30),
  job_number INT,
  job_link VARCHAR(50),
  date_applied DATETIME NOT NULL DEFAULT NOW(),
  screenshot_filename VARCHAR(30),
  company_name VARCHAR(50),
  active VARCHAR(3) DEFAULT 'yes',
  FOREIGN KEY(company_name)
  REFERENCES company(name)
  ON DELETE SET NULL
  ON UPDATE CASCADE
);

CREATE TABLE communication (
  id INT AUTO_INCREMENT PRIMARY KEY,
  subject VARCHAR(20),
  type VARCHAR(20),
  date DATE,
  job_id INT,
  point_of_contact_id INT,
  FOREIGN KEY(job_id) REFERENCES job(id) ON DELETE SET NULL
);

CREATE TABLE point_of_contact (
  id INT AUTO_INCREMENT PRIMARY KEY,
  fname VARCHAR(20),
  lname VARCHAR(20),
  title VARCHAR(30),
  company_name VARCHAR(50),
  internal BOOLEAN,
  email VARCHAR(30) UNIQUE,
  phone VARCHAR(12),
  job_id INT,
  communication_id INT,
  FOREIGN KEY(company_name) REFERENCES company(name) ON DELETE SET NULL,
  FOREIGN KEY(job_id) REFERENCES job(id) ON DELETE SET NULL,
  FOREIGN KEY(communication_id) REFERENCES communication(id) ON DELETE SET NULL
);

CREATE TABLE note (
  id INT AUTO_INCREMENT PRIMARY KEY,
  subject VARCHAR(20),
  table_name VARCHAR(20),
  filename VARCHAR(20),
  date_created DATE,
  job_id INT,
  company_name VARCHAR(50),
  point_of_contact_id INT,
  FOREIGN KEY(company_name) REFERENCES company(name) ON DELETE SET NULL,
  FOREIGN KEY(job_id) REFERENCES job(id) ON DELETE SET NULL,
  FOREIGN KEY(point_of_contact_id) REFERENCES point_of_contact(id) ON DELETE SET NULL
);

ALTER TABLE communication
ADD FOREIGN KEY(point_of_contact_id)
REFERENCES point_of_contact(id)
ON DELETE SET NULL;

