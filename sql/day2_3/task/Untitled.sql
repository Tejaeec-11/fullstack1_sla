-- ============ SETUP ============
CREATE DATABASE IF NOT EXISTS college;
USE college;

DROP TABLE IF EXISTS students;

CREATE TABLE students (
    id         INT AUTO_INCREMENT PRIMARY KEY,
    name       VARCHAR(50),
    age        INT,
    department VARCHAR(20),
    city       VARCHAR(50),
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
               ON UPDATE CURRENT_TIMESTAMP
);

-- Workbench "safe update mode" blocks UPDATE/DELETE on non-key columns (Error 1175).
-- This turns it off for the session so Tasks 6 and 8 work.
SET SQL_SAFE_UPDATES = 0;

-- ============ TASK 1 ============
INSERT INTO students (name, age, department, city)
VALUES ('Ravi', 22, 'CSE', 'Chennai');

-- ============ TASK 2 ============
INSERT INTO students (name, age, department, city)
VALUES
('Arun', 23, 'IT', 'Madurai'),
('Bala', 21, 'ECE', 'Chennai'),
('Priya', 24, 'CSE', 'Coimbatore');

SELECT * FROM students;

-- ============ TASK 3 ============
UPDATE students
SET city = 'Bangalore'
WHERE id = 2;

-- ============ TASK 4 ============
UPDATE students
SET age = 25
WHERE id = 3;

-- ============ TASK 5 ============
UPDATE students
SET age = 24, department = 'IT', city = 'Chennai'
WHERE id = 1;

-- ============ TASK 6 ============
UPDATE students
SET city = 'Madurai'
WHERE department = 'CSE';

-- ============ TASK 7 ============
DELETE FROM students
WHERE id = 4;

-- ============ TASK 8 ============
-- (0 rows affected is normal if no student lives in Salem)
DELETE FROM students
WHERE city = 'Salem';

SELECT * FROM students;

-- ============ TASK 9 ============
-- Check the timestamp BEFORE
SELECT id, city, updated_at FROM students WHERE id = 2;

-- Wait 1 second so the change is visible
SELECT SLEEP(1);

-- The new city must differ from the current one,
-- otherwise MySQL changes nothing and updated_at stays the same
UPDATE students
SET city = 'Hyderabad'
WHERE id = 2;

-- Check the timestamp AFTER (it will be newer)
SELECT id, city, updated_at FROM students WHERE id = 2;

-- ============ TASK 10 ============
-- 1. Insert a new student
INSERT INTO students (name, age, department, city)
VALUES ('Kiran', 20, 'CSE', 'Trichy');

-- 2. Insert another two students
INSERT INTO students (name, age, department, city)
VALUES
('Meena', 22, 'ECE', 'Salem'),
('Suresh', 23, 'IT', 'Madurai');

-- 3. Update the first student's city (Kiran)
UPDATE students
SET city = 'Chennai'
WHERE name = 'Kiran';

-- 4. Update the second student's age and department (Meena)
UPDATE students
SET age = 25, department = 'CSE'
WHERE name = 'Meena';

-- 5. Delete the third student (Suresh)
DELETE FROM students
WHERE name = 'Suresh';

SELECT * FROM students;

-- Turn safe mode back on (optional)
SET SQL_SAFE_UPDATES = 1;