TRUNCATE TABLE Customers RESTART IDENTITY CASCADE;
INSERT INTO Customers (customer_id, name, email, phone, address) VALUES
(1, 'Naruto', 'Narunaru@gmail.com', '0123456789', 'Konoha'),
(2, 'Sanji', 'Sanjiblackleg@gmail.com', '0789456123', 'North Blue');
