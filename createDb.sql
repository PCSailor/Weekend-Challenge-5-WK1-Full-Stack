-- create db table
CREATE TABLE employee_salary_data (
  id SERIAL PRIMARY KEY,
);

ALTER TABLE "employee_salary_data"
ADD "Last_Name" varchar(40) NOT NULL;
ALTER TABLE "employee_salary_data"
ADD "First_Name" varchar(40) NOT NULL;
ALTER TABLE "employee_salary_data"
ADD "Job_Title" varchar(40);
ALTER TABLE "employee_salary_data"
ADD "Employee_ID" int UNIQUE NOT NULL;
ALTER TABLE "employee_salary_data"
ADD "Salary_Yearly" DEC(10,2);
active BOOLEAN NOT NULL DEFAULT true;

INSERT INTO employee_salary_data ("Last_Name", "First_Name", "Job_Title","Employee_ID", "Salary_Yearly") VALUES ('employee-last-01', 'employee-first-01', 'CEO', 001, 400000);
INSERT INTO employee_salary_data ("Last_Name", "First_Name", "Job_Title","Employee_ID", "Salary_Yearly") VALUES ('employee-last-002', 'employee-first-002', 'GM', 002, 160000);
INSERT INTO employee_salary_data ("Last_Name", "First_Name", "Job_Title","Employee_ID", "Salary_Yearly") VALUES ('employee-last-003', 'employee-first-003', 'CTO', 003, 155000);
INSERT INTO employee_salary_data ("Last_Name", "First_Name", "Job_Title","Employee_ID", "Salary_Yearly") VALUES ('employee-last-004', 'employee-first-004', 'CFO', 004, 155000);
INSERT INTO employee_salary_data ("Last_Name", "First_Name", "Job_Title","Employee_ID", "Salary_Yearly") VALUES ('employee-last-005', 'employee-first-005', 'Bookkeeper', 005, 65000);

ALTER TABLE employee_salary_data RENAME "last name" TO "Last_Name";
