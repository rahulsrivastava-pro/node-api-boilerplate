USE JustOrderAndEat;

/* TABLE OrderStatus */

INSERT INTO OrderStatus(OrderStatusId, OrderStatusName, IsActive) VALUES ( 1,'NEW', 1);
INSERT INTO OrderStatus(OrderStatusId, OrderStatusName, IsActive) VALUES ( 2,'ACCEPTED', 1);
INSERT INTO OrderStatus(OrderStatusId, OrderStatusName, IsActive) VALUES ( 3,'DISPATCHED', 1);
INSERT INTO OrderStatus(OrderStatusId, OrderStatusName, IsActive) VALUES ( 4,'DELIVERED', 1);
INSERT INTO OrderStatus(OrderStatusId, OrderStatusName, IsActive) VALUES ( 5,'USER_CANCELLED', 1);
INSERT INTO OrderStatus(OrderStatusId, OrderStatusName, IsActive) VALUES ( 6,'VENDOR_CANCELLED', 1);