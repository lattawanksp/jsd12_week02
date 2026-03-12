TRUNCATE TABLE Payments RESTART IDENTITY CASCADE;
INSERT INTO Payments (payment_id, order_id, payment_method, amount, payment_date, status) VALUES
(1, 101, 'promptpay', 180.00, '2025-03-10', 'success');
