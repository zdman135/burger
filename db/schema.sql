create database burgers_db;
use burgers_db;

create table burgers (
    id int auto_increment not null,
    burger_name varchar(50) null,
    devoured boolean default false,
    primary key (id)
);