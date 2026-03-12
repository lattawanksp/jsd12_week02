TRUNCATE TABLE Products RESTART IDENTITY CASCADE;
INSERT INTO Products (product_id, product_name, flavor, description, price) VALUES
(1, 'Royal Vanilla Dream', 'Vanilla', 'Smooth vanilla ice cream made with premium vanilla beans from Madagascar.', 70.00),
(2, 'Royal Belgian Chocolate', 'Chocolate', 'Creamy chocolate ice cream made with famous cocoa from Belgium.', 85.00),
(3, 'Strawberry Pop', 'Strawberry', 'Creamy strawberry ice cream made with fresh strawberries from Japan.', 80.00);
