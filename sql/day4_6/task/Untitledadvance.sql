-- 1. Employee count and average salary, only departments with at least 2 employees
SELECT department,
       COUNT(*) AS employee_count,
       AVG(salary) AS average_salary
FROM employees
GROUP BY department
HAVING COUNT(*) >= 2;

-- 2. Each city with total and maximum salary, only where total salary > 80,000
SELECT city,
       SUM(salary) AS total_salary,
       MAX(salary) AS max_salary
FROM employees
GROUP BY city
HAVING SUM(salary) > 80000;

-- 3. Full department summary, filtered and sorted by average salary (high to low)
SELECT department,
       COUNT(*) AS total_employees,
       SUM(salary) AS total_salary,
       AVG(salary) AS average_salary,
       MIN(salary) AS min_salary,
       MAX(salary) AS max_salary
FROM employees
GROUP BY department
HAVING COUNT(*) >= 2 AND AVG(salary) > 40000
ORDER BY average_salary DESC;