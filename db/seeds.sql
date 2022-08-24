USE organization_db
INSERT INTO department (id, name)
VALUES (1, "Sales"),
       (2, "Engineering"),
       (3, "Finance"),
       (4, "Legal");

INSERT INTO role ( id, title, salary, department_id)
VALUES (11, "Salesperson", 80000, 1 ),
       (21, "Lead Engineer", 150000, 2),
       (22, "Software Engineer", 120000, 2),
       (31, "Account Manager", 160000, 3),
       (32, "Accountant", 125000, 3),
       (41, "Legal Team Lead", 250000, 4),
       (42, "Lawyer", 190000, 4);
       

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Mike", "Chan", 11, NULL ),
       ("Ashley", "Rodriguez", 21, NULL ),
       ("Kevin", "Tupik", 22, 2101 ),
       ("Kunal", "Singh", 31, NULL ),
       ("Malia", "Brown", 32, 3101 ),
       ("Sarah", "Lourd", 41, NULL ),
       ("Tom", "Allen", 42, 4101 );


       
