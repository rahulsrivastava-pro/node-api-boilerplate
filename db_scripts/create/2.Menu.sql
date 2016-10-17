USE JustOrderAndEat;

CREATE TABLE OrderStatus (
OrderStatusId int not null auto_increment primary key,
OrderStatusName varchar(100) not null,
IsActive tinyint
) ENGINE=InnoDB;


CREATE TABLE MediaGallery (
MediaId int not null auto_increment primary key,
MediaWebUrl varchar(255),
MediaPath varchar(255),
MediaBytes longblob,
MediaExtention varchar(50)
) ENGINE=InnoDB;


CREATE TABLE MenuCategory (
MenuCategoryId int not null auto_increment primary key,
MenuCategoryName varchar(255),
Description varchar(255),
DisplayText varchar(255),
MediaId int,
IsActive tinyint,
foreign key fk_MediaId(MediaId) references MediaGallery(MediaId)
) ENGINE=InnoDB;



CREATE TABLE MenuItem (
MenuItemId int not null auto_increment primary key,
MenuCategoryId int not null,
MenuItemName varchar(255),
Description varchar(255),
DisplayText varchar(255),
MediaId int,
IsActive tinyint,
foreign key fk_MenuCategoryId(MenuCategoryId) references MenuCategory(MenuCategoryId)
) ENGINE=InnoDB;


CREATE TABLE MenuItemPrice (
MenuItemPriceId int not null auto_increment primary key,
MenuItemId int not null,
Quantity decimal(10,2) not null,
Price decimal(10,2) not null,
foreign key fk_MenuItemId(MenuItemId) references MenuItem(MenuItemId)
) ENGINE=InnoDB;


CREATE TABLE Orders (
OrderId int not null auto_increment primary key,
UserId int not null,
AddressId int not null,
foreign key fk_UserId(UserId) references Users(UserId),
foreign key fk_AddressId(UserId) references Addresses(AddressId)
) ENGINE=InnoDB;


CREATE TABLE OrderStatusDetails (
OrderStatusDetailId int not null auto_increment primary key,
OrderId int not null,
OrderStatusId int not null,
OrderStatusDateTime datetime default current_timestamp,
foreign key fk_OrderId(OrderId) references Orders(OrderId),
foreign key fk_OrderStatusId(OrderStatusId) references OrderStatus(OrderStatusId)
) ENGINE=InnoDB;


CREATE TABLE OrderDetails (
OrderDetailId int not null auto_increment primary key,
OrderId int not null,
PriceExcludingTax decimal(10,2) not null,
PriceIncludingTax decimal(10,2) not null,
Discount decimal(10,2) not null,
OrderCompletionDateTime datetime default current_timestamp,
foreign key fk_OrderId(OrderId) references Orders(OrderId)
) ENGINE=InnoDB;


CREATE TABLE ComboDetails (
ComboId int not null auto_increment primary key,
ComboName varchar(255),
ComboDescription varchar(255),
PriceIncludingDiscount decimal(10,2),
PriceExcludingDiscount decimal(10,2),
MediaId int,
CreatedDate datetime default current_timestamp,
foreign key fk_MediaId(MediaId) references MediaGallery(MediaId)
) ENGINE=InnoDB;


CREATE TABLE Offers (
OfferId int not null auto_increment primary key,
OfferName varchar(255),
OfferDescription varchar(255),
DiscountPrice decimal(10,2),
DiscountPercentatge decimal(10,2),
StartDate datetime,
EndDate datetime
) ENGINE=InnoDB;


CREATE TABLE OrderMenu (
OrderMenuId int not null auto_increment primary key,
OrderId int not null,
MenuItemPriceId int,
ComboId int null,
OfferId int null,
ItemPrice decimal(10,2),
Units decimal(10,2),
foreign key fk_OrderId(OrderId) references Orders(OrderId),
foreign key fk_OfferId(OfferId) references Offers(OfferId),
foreign key fk_ComboId(ComboId) references ComboDetails(ComboId),
foreign key fk_MenuItemPriceId(MenuItemPriceId) references MenuItemPrice(MenuItemPriceId)
) ENGINE=InnoDB;