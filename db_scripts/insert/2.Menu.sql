USE JustOrderAndEat;

/* TABLE OrderStatus */

INSERT INTO OrderStatus(OrderStatusId, OrderStatusName, IsActive) VALUES ( 1,'NEW', 1);
INSERT INTO OrderStatus(OrderStatusId, OrderStatusName, IsActive) VALUES ( 2,'ACCEPTED', 1);
INSERT INTO OrderStatus(OrderStatusId, OrderStatusName, IsActive) VALUES ( 3,'DISPATCHED', 1);
INSERT INTO OrderStatus(OrderStatusId, OrderStatusName, IsActive) VALUES ( 4,'DELIVERED', 1);
INSERT INTO OrderStatus(OrderStatusId, OrderStatusName, IsActive) VALUES ( 5,'USER_CANCELLED', 1);
INSERT INTO OrderStatus(OrderStatusId, OrderStatusName, IsActive) VALUES ( 6,'VENDOR_CANCELLED', 1);



/* TABLE MenuCategory */
INSERT INTO MenuCategory(MenuCategoryId, MenuCategoryName, Description, DisplayText, IsActive) VALUES ( 1,'STARTERS', 'STARTERS', 'STARTERS', 1);
INSERT INTO MenuCategory(MenuCategoryId, MenuCategoryName, Description, DisplayText, IsActive) VALUES ( 2,'BEVERAGES', 'BEVERAGES', 'BEVERAGES', 1);
INSERT INTO MenuCategory(MenuCategoryId, MenuCategoryName, Description, DisplayText, IsActive) VALUES ( 3,'INDIAN', 'INDIAN', 'INDIAN', 1);
INSERT INTO MenuCategory(MenuCategoryId, MenuCategoryName, Description, DisplayText, IsActive) VALUES ( 4,'FASTFOOD', 'FASTFOOD', 'FASTFOOD', 1);
INSERT INTO MenuCategory(MenuCategoryId, MenuCategoryName, Description, DisplayText, IsActive) VALUES ( 5,'ITALIAN', 'ITALIAN', 'ITALIAN', 1);
INSERT INTO MenuCategory(MenuCategoryId, MenuCategoryName, Description, DisplayText, IsActive) VALUES ( 6,'CHINESE', 'CHINESE', 'CHINESE', 1);
