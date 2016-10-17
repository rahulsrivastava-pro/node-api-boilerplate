CREATE DATABASE JustOrderAndEat;

USE JustOrderAndEat;

CREATE TABLE States (
StateId int not null auto_increment primary key,
StateName varchar(100) not null
) ENGINE=InnoDB;

CREATE TABLE Addresses (
AddressId int not null auto_increment primary key,
AddressLine1 varchar(255) not null,
AddressLine2 varchar(255),
NearestLandmark varchar(255),
City varchar(50) not null,
StateId int not null,
Longitute varchar(255),
Latitude varchar(255),
Pincode int,
foreign key fk_StateId(StateId) references States(StateId)
) ENGINE=InnoDB;

CREATE TABLE Users (
UserId int not null auto_increment primary key,
FirstName varchar(100) not null,
LastName varchar(100),
Email VARCHAR(50) not null,
Mobile VARCHAR(50) not null,
AlternateContact VARCHAR(50),
CreatedDate datetime default current_timestamp,
IsActive tinyint
) ENGINE=InnoDB;


CREATE TABLE UserAddress (
UserAddressId int not null auto_increment primary key,
UserId int not null,
AddressId int not null,
IsActive tinyint,
foreign key fk_AddressId(AddressId) references Addresses(AddressId)
) ENGINE=InnoDB;



CREATE TABLE UserLogin (
UserId int not null,
UserName varchar(100) not null,
UserPassword varchar(255) not null,
foreign key fk_UserId(UserId) references Users(UserId)
) ENGINE=InnoDB;



