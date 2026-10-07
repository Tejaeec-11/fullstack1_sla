SET SQL_SAFE_UPDATES = 1;

create database myemptable;
use myemptable;


create table product (
productid int primary key auto_increment,
productname varchar(20),
productprice decimal(3,0) not null,
productqnt int,
productcat varchar(20),
createdby varchar(20) default "Admin",
createdat date,
updatedby varchar(20) default "Admin",
updatedat date
);

drop table product;
-- insert,update,delete

insert into product  (productname,productprice,productqnt,productcat,createdat,updatedat) values ("Milo",5,100,"Powder",curdate(),current_timestamp());


update product set productname = "Boost",productprice = 300 where productname = "Boost";


delete from product where productid = 2;

truncate table product;

drop table product;










