/* รื้อตารางทิ้งเวลาเพิ่ม values ใหม่  (ลบตาราง ถ้า มันมีอยู่) *ตารางลูกถูกลบก่อนตารางแม่ คีย์ FK ต้องถูกลบก่อนคีย์ PK
DROP TABLE IF EXISTS Deliveries CASCADE;
DROP TABLE IF EXISTS Payments CASCADE;
DROP TABLE IF EXISTS CustomScoops CASCADE;
DROP TABLE IF EXISTS Orders CASCADE;
DROP TABLE IF EXISTS Products CASCADE;
DROP TABLE IF EXISTS Customers CASCADE;
*/

-- 1. Customers Table
CREATE TABLE Customers (
    customer_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(20),
    address TEXT
);

-- 2. Products Table (Main Ice Cream Menu)
CREATE TABLE Products (
    product_id SERIAL PRIMARY KEY,
    product_name VARCHAR(255) NOT NULL,
    flavor VARCHAR(100),
    description TEXT,
    stock INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL
);

-- 3. Orders Table
CREATE TABLE Orders (
    order_id SERIAL PRIMARY KEY,
    customer_id INTEGER REFERENCES Customers(customer_id),
    order_date DATE NOT NULL,
    order_status VARCHAR(50),
    total_price DECIMAL(10, 2),
    payment_status VARCHAR(50),
    shipping_address TEXT,
    order_number INTEGER
);

-- 4. CustomScoops Table
CREATE TABLE CustomScoops (
    custom_id SERIAL PRIMARY KEY,
    order_id INTEGER REFERENCES Orders(order_id),
    custom_base VARCHAR(100),
    custom_flavor VARCHAR(100),
    custom_topping TEXT,
    custom_price DECIMAL(10, 2)
);

-- 5. Payments Table
CREATE TABLE Payments (
    payment_id SERIAL PRIMARY KEY,
    order_id INTEGER REFERENCES Orders(order_id),
    payment_method VARCHAR(50),
    amount DECIMAL(10, 2),
    payment_date DATE,
    status VARCHAR(50)
);

-- 6. Deliveries Table
CREATE TABLE Deliveries (
    delivery_id SERIAL PRIMARY KEY,
    order_id INTEGER REFERENCES Orders(order_id),
    delivery_name VARCHAR(100),
    tracking_number VARCHAR(100),
    shipped_at DATE,
    delivered_at DATE,
    delivery_status VARCHAR(50)
);
