-- Query ข้อมูลแสดงออเดอร์ของลูกค้า

--แสดง stock ที่เหลือของเมนูทั้งหมด
SELECT Products.product_name, Products.stock 
FROM Products


/*
--แสดงข้อมูลลูกค้าทั้งหมด
SELECT * FROM Customers

--แสดงข้อมูลออเดอร์ทั้งหมด พร้อมชื่อลูกค้า และสถานะการชำระเงิน
SELECT o.order_id, c.name AS customer_name, o.total_price, o.payment_status, o.order_status
FROM Orders o
JOIN Customers c ON o.customer_id = c.customer_id;

--แสดงรายละเอียด Custom Scoop ของลูกค้า
SELECT c.name, cs.custom_flavor, cs.custom_topping, cs.custom_price
FROM CustomScoops cs
JOIN Orders o ON cs.order_id = o.order_id
JOIN Customers c ON o.customer_id = c.customer_id;

--ตรวจสอบสถานะการจัดส่ง
SELECT o.order_id, d.delivery_name, d.tracking_number, d.delivery_status
FROM Deliveries d
JOIN Orders o ON d.order_id = o.order_id;

--ยอดขายรวมแยกตาม flavor ยอดนิยม
SELECT cs.custom_flavor, COUNT(*) AS total_orders
FROM CustomScoops cs
GROUP BY cs.custom_flavor
ORDER BY total_orders DESC;

--ลูกค้าที่ใช้จ่ายสูงสุด (Top Spender)
SELECT c.name, SUM(o.total_price) AS total_spent
FROM Customers c
JOIN Orders o ON c.customer_id = o.customer_id
GROUP BY c.name
ORDER BY total_spent DESC
LIMIT 5;

--ออเดอร์ที่ยังค้างชำระ (Unpaid)
SELECT o.order_id, c.name, o.total_price, o.payment_status
FROM Orders o
JOIN Customers c ON o.customer_id = c.customer_id
WHERE o.payment_status = 'unpaid';

--Topping ที่ถูกเลือกบ่อยที่สุด
SELECT cs.custom_topping, COUNT(*) AS total
FROM CustomScoops cs
GROUP BY cs.custom_topping
ORDER BY total DESC;
*/
