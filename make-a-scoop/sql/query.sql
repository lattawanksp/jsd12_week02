-- Query ข้อมูลแสดงออเดอร์ของลูกค้า

-- 1. แสดงข้อมูลออเดอร์ทั้งหมด พร้อมชื่อลูกค้า และสถานะการชำระเงิน
SELECT o.order_id, c.name AS customer_name, o.total_price, o.payment_status, o.order_status
FROM Orders o
JOIN Customers c ON o.customer_id = c.customer_id;

-- 2. แสดงรายละเอียด Custom Scoop ของลูกค้า
SELECT c.name, cs.custom_flavor, cs.custom_topping, cs.custom_price
FROM CustomScoops cs
JOIN Orders o ON cs.order_id = o.order_id
JOIN Customers c ON o.customer_id = c.customer_id;

-- 3. ตรวจสอบสถานะการจัดส่ง
SELECT o.order_id, d.delivery_name, d.tracking_number, d.delivery_status
FROM Deliveries d
JOIN Orders o ON d.order_id = o.order_id;
