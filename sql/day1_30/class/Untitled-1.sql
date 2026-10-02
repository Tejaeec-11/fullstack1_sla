-- CREATE, ALTER, RENAME, TRUNCATE, DROP -Database, table, column

create database mydb;
use mydb;
create TABLE sttable(  
usesttablerid INT PRIMARY KEY,
username VARCHAR(20),
useremail VARCHAR(30) UNIQUE, 
usermobile VARCHAR(20),    
userdepartment VARCHAR(20),
userjoin DATE,
userrole VARCHAR(20) DEFAULT 'admin'

) ;

-- alter now 
ALTER TABLE sttable ADD usercolour VARCHAR(10);

-- rename 
ALTER TABLE sttable RENAME COLUMN username TO usercompany;


-- CHANGE
ALTER TABLE sttable MODIFY COLUMN usermobile INT;          
-- check the datatype change varchar to int 
DESCRIBE sttable;

-- remove column
ALTER TABLE sttable DROP COLUMN userjoin;

-- remove again insert 
ALTER TABLE sttable ADD userjoin DATE;

--
ALTER TABLE sttable RENAME COLUMN useremail TO email;

--
RENAME TABLE sttable TO fstustable;

-- drop 
DROP TABLE fstustable;



