-- 1. Employees with salary greater than the average salary of all employees
SELECT *
FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);

-- 2. Employee(s) with the highest salary
SELECT *
FROM employees
WHERE salary = (SELECT MAX(salary) FROM employees);

-- 3. Employee(s) with the lowest salary
SELECT *
FROM employees
WHERE salary = (SELECT MIN(salary) FROM employees);

-- 4. Employees with salary greater than the average salary of the IT department
SELECT *
FROM employees
WHERE salary > (
    SELECT AVG(e.salary)
    FROM employees e
    JOIN departments d ON e.dept_id = d.dept_id
    WHERE d.dept_name = 'IT'
);

-- 5. Employees in the IT or HR departments (using IN)
SELECT *
FROM employees
WHERE dept_id IN (
    SELECT dept_id
    FROM departments
    WHERE dept_name IN ('IT', 'HR')
);

-- 6. Employees who do not belong to the HR department
SELECT *
FROM employees
WHERE dept_id NOT IN (
    SELECT dept_id
    FROM departments
    WHERE dept_name = 'HR'
);

-- 7. Departments that have at least one employee (EXISTS)
SELECT *
FROM departments d
WHERE EXISTS (
    SELECT 1
    FROM employees e
    WHERE e.dept_id = d.dept_id
);

-- 8. Departments that have no employees (NOT EXISTS)
SELECT *
FROM departments d
WHERE NOT EXISTS (
    SELECT 1
    FROM employees e
    WHERE e.dept_id = d.dept_id
);

-- 9. Employees whose salary is less than the maximum salary in the company
SELECT *
FROM employees
WHERE salary < (SELECT MAX(salary) FROM employees);

-- 10. Correlated subquery: employees earning more than the average of their own department
SELECT *
FROM employees e1
WHERE salary > (
    SELECT AVG(e2.salary)
    FROM employees e2
    WHERE e2.dept_id = e1.dept_id
);