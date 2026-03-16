--สั่งเพิ่มข้อมูลของ suppliers ลงในตาราง


-- Clear existing data to prevent duplication
TRUNCATE TABLE Suppliers RESTART IDENTITY CASCADE;  
--ทุกครั้งที่รันให้ clear data เดิมทิ้งไปเลยจะได้ไม่ซ้ำกัน


-- Mock Data for Suppliers (dataจำลอง)
INSERT INTO Suppliers (supplier_id, name, contact_person, phone_number) VALUES
(1, 'Patty''s Premium Meats', 'Patty Smith', '555-0101'),
(2, 'The Bun Barn', 'Brad Breadson', '555-0102'),
(3, 'Freshest Farm Produce', 'Frank Farmer', '555-0103');