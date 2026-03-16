TRUNCATE TABLE Deliveries RESTART IDENTITY CASCADE;
INSERT INTO Deliveries (delivery_id, order_id, delivery_name, tracking_number, shipped_at, delivered_at, delivery_status) VALUES
(1, 101, 'Flash Express', 'TH123456789', '2025-03-10', '2025-03-11', 'delivered');
