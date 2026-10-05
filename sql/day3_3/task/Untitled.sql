-- ============ SETUP ============
CREATE DATABASE IF NOT EXISTS college;
USE college;

-- Note: this deletes any existing table named employees.
-- If you already have your own employees table, skip this setup block.
DROP TABLE IF EXISTS employees;

CREATE TABLE employees (
    id         INT AUTO_INCREMENT PRIMARY KEY,
    name       VARCHAR(50),
    age        INT,
    department VARCHAR(20),
    salary     INT,
    city       VARCHAR(50)
);

INSERT INTO employees (name, age, department, salary, city)
VALUES
('Arun',    26, 'IT',      48000, 'Chennai'),
('Ravi',    29, 'IT',      52000, 'Chennai'),
('Anitha',  24, 'HR',      32000, 'Madurai'),
('Vikram',  31, 'Finance', 60000, 'Salem'),
('Bala',    27, 'Sales',   38000, 'Chennai'),
('Priya',   28, 'HR',      42000, 'Madurai'),
('Aravind', 25, 'IT',      45000, 'Coimbatore'),
('Divya',   30, 'Finance', 35000, NULL),
('Kavin',   22, 'Sales',   30000, 'Salem'),
('Meena',   35, 'HR',      50000, NULL);

-- ============ TASK 1 ============
SELECT * FROM employees;

-- ============ TASK 2 ============
SELECT name, salary, city FROM employees;

-- ============ TASK 3 ============
SELECT * FROM employees
WHERE city = 'Chennai';

-- ============ TASK 4 ============
SELECT * FROM employees
WHERE salary > 45000;

-- ============ TASK 5 ============
SELECT * FROM employees
WHERE age < 28;

-- ============ TASK 6 ============
SELECT * FROM employees
WHERE salary >= 40000;

-- ============ TASK 7 ============
SELECT * FROM employees
WHERE department <> 'HR';

-- ============ TASK 8 ============
SELECT * FROM employees
WHERE department = 'IT' AND city = 'Chennai';

-- ============ TASK 9 ============
SELECT * FROM employees
WHERE city = 'Chennai' OR city = 'Madurai';

-- ============ TASK 10 ============
SELECT * FROM employees
WHERE salary > 40000 AND age < 30;

-- ============ TASK 11 ============
SELECT * FROM employees
WHERE city IN ('Chennai', 'Madurai', 'Salem');

-- ============ TASK 12 ============
SELECT * FROM employees
WHERE department NOT IN ('IT', 'HR');

-- ============ TASK 13 ============
SELECT * FROM employees
WHERE city IS NULL;

-- ============ TASK 14 ============
SELECT * FROM employees
WHERE city IS NOT NULL;

-- ============ TASK 15 ============
SELECT * FROM employees
WHERE salary BETWEEN 35000 AND 50000;

-- ============ TASK 16 ============
SELECT * FROM employees
WHERE age BETWEEN 25 AND 30 AND city = 'Chennai';

-- ============ TASK 17 ============
SELECT * FROM employees
WHERE name LIKE 'A%';

-- ============ TASK 18 ============
SELECT * FROM employees
WHERE name LIKE '%vi%';

-- ============ TASK 19 ============
SELECT DISTINCT department FROM employees;

-- ============ TASK 20 ============
SELECT name       AS employee_name,
       department AS department_name,
       salary     AS monthly_salary
FROM employees;