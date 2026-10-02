USE mydb;

-- 1. Employee Table

CREATE TABLE Employee (
    employeeId INT PRIMARY KEY,
    employeeName VARCHAR(50),
    employeeEmail VARCHAR(50) UNIQUE,
    employeeMobile VARCHAR(20),
    employeeDepartment VARCHAR(30),
    employeeSalary INT,
    employeeJoiningDate DATE
);


-- 2. Government Office Table

CREATE TABLE GovernmentOffice (
    officeId INT PRIMARY KEY,
    officeName VARCHAR(50),
    officeType VARCHAR(30),
    officeAddress VARCHAR(100),
    officePhone VARCHAR(20),
    officerName VARCHAR(50),
    openingDate DATE
);


-- 3. Product Table

CREATE TABLE Product (
    productId INT PRIMARY KEY,
    productName VARCHAR(50),
    productCategory VARCHAR(30),
    productPrice INT,
    productQuantity INT,
    productBrand VARCHAR(30),
    productDescription VARCHAR(100)
);


-- CHECK TABLE
DESCRIBE Employee;
DESCRIBE GovernmentOffice;
DESCRIBE Product;




