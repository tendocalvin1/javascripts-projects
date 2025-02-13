show databases;

CREATE DATABASE BSCS;

USE BSCS;

CREATE TABLE Department (
    DeptNo INT PRIMARY KEY,
    DName VARCHAR(50) NOT NULL,
    Loc VARCHAR(50) NOT NULL
);

INSERT INTO Department (DeptNo, DName, Loc) VALUES
(10, 'SALES', 'KAMPALA'),
(40, 'MARKETING', 'ENTEBBE'),
(30, 'ACCOUNTING', 'MUKONO');

CREATE TABLE Employee (
    EmpNo VARCHAR(10) PRIMARY KEY,
    Ename VARCHAR(50),
    Job VARCHAR(50) NOT NULL,
    Salary INT NOT NULL,
    DeptNo INT,
    FOREIGN KEY (DeptNo) REFERENCES Department(DeptNo)
);

INSERT INTO Employee (EmpNo, Ename, Job, Salary, DeptNo) VALUES
('E001', NULL, 'Clerk', 40000, 30),
('E002', 'Agaba', 'Manager', 16000, 30),
('E003', 'Mary', 'SalesLady', 20000, 10),
('E004', 'Timo', 'Clerk', 40000, 30),
('E005', 'Simon', 'Manager', 60000, 40),
('E006', 'Mark', 'Manager', 45000, 10),
('E007', 'Solomon', 'Teacher', 30000, 30);







