TRUNCATE TABLE Orders RESTART IDENTITY CASCADE;
INSERT INTO Orders (order_id, customer_id, order_date, order_status, total_price, payment_status, shipping_address, order_number) VALUES
(101, 1, '2025-03-10', 'confirmed', 180.00, 'paid', 'Konoha', 1),
(102, 2, '2025-03-10', 'confirmed', 120.00, 'unpaid', 'North Blue', 2);
