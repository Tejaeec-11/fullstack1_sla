employees(emp_id, emp_name, department, city, salary)

-- 1. Number of employees in each department
SELECT department, COUNT(*) AS employee_count
FROM employees
GROUP BY department;

-- 2. Total salary of each department
SELECT department, SUM(salary) AS total_salary
FROM employees
GROUP BY department;

-- 3. Average salary of each department
SELECT department, AVG(salary) AS average_salary
FROM employees
GROUP BY department;

-- 4. Number of employees in each city
SELECT city, COUNT(*) AS employee_count
FROM employees
GROUP BY city;