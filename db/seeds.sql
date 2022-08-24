USE organization_db
INSERT INTO department (id, name)
VALUES (1, "Sales"),
       (2, "Engineering"),
       (3, "Finance"),
       (4, "Legal");

INSERT INTO role ( id, title, salary, department_id)
VALUES (101, "Salesperson", 80000, 1 ),
       (201, "Lead Engineer", 150000, 2),
       (202, "Software Engineer", 120000, 2),
       (301, "Account Manager", 160000, 3),
       (302, "Accountant", 125000, 3),
       (401, "Legal Team Lead", 250000, 4),
       (402, "Lawyer", 190000, 4);
       

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Mike" "Chan", 101, NULL ),
       ("Ashley" "Rodriguez", 201, NULL ),
       ("Kevin" "Tupik", 202, NULL ),
       ("Kunal" "Singh", 301, NULL ),
       ("Malia" "Brown", 302, NULL ),
       ("Sarah" "Lourd", 401, NULL ),
       ("Tom" "Allen", 402, NULL );


       
