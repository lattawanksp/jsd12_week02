[postgresql]

SQL Query Pattern โครงสร้างของการเขียน Query
- SELECT              เลือก คอลัมม์ ที่ต้องการแสดง / * = ทุกคอลัมม์
- FROM                จาก ตารางไหน

- WHERE               ใช้กรองข้อมูล <, >, =
- GROUP BY            จัดกลุ่มข้อมูล
    - COUNT           นับจำนวนแถว
    - SUM             รวมค่าตัวเลข
    - AVG             หาค่าเฉลี่ย
- HAVING              ใช้ กรองข้อมูลหลัง GROUP BY
- ORDER BY            ใช้ เรียงข้อมูล (ASC= defult น้อยไปมาก / DESC มากไปน้อย)
- LIMIT / OFFSET      จำกัดจำนวนแถวที่แสดง / skip ข้อมูลก่อนแล้วค่อยแสดง

---------------------------------------

ลำดับการทำงานจริง
- FROM
- WHERE
- GROUP BY
- HAVING
- SELECT
- ORDER BY

----------------------------------------

JOIN Concepts
1. inner join 
เอา เฉพาะข้อมูลที่ match กันทั้งสองตาราง<br>
    SELECT users.name, orders.product<br>
    FROM users<br>
    INNER JOIN orders<br>
    ON users.id = orders.user_id;<br>
(ถ้ามีชื่อ user แต่ไม่มี order จะไม่แสดงผล)
2. left join
เอา ข้อมูลทั้งหมดจากตารางซ้าย ถ้าอีกตารางไม่มีข้อมูล → จะเป็น NULL
3. right join
เอา ข้อมูลทั้งหมดจากตารางขวา ถ้าอีกตารางไม่มีข้อมูล → จะเป็น NULL
4. full outer join
เอา ข้อมูลทั้งหมดจากทั้งสองตาราง ถ้ามี order ที่ไม่มี user ก็จะขึ้น NULL

**ใช้ตัวอักษรย่อแทนได้ เช่น Staff s / Orders o กำหนดไว้ด้านหลัง


----------------------------------------
----------------------------------------

SQL Normalization คือแนวคิดในการ จัดโครงสร้างตารางฐานข้อมูลให้เป็นระเบียบ ลดข้อมูลซ้ำ (redundancy) และป้องกันปัญหาการ update/delete/insert ข้อมูล<br>
มักใช้ในขั้นตอน Database Design ก่อนสร้างตารางจริง<br>
ลำดับการออกแบบทั่วไป
Requirement → ER Diagram → Normalization → Create Tables → Query

- 1️⃣ First Normal Form (1NF)
กฎ
    - แต่ละ column ต้องมีค่าเดียว (Atomic value)
    - ห้ามมี array / list ในช่องเดียว
    - ต้องมี primary key
- 2️⃣ Second Normal Form (2NF)
กฎ
    - ต้องเป็น 1NF ก่อน
    - ทุก column ต้องขึ้นอยู่กับ Primary Key ทั้งหมด
    - (ไม่มี partial dependency)
- 3️⃣ Third Normal Form (3NF)
กฎ
    - ต้องเป็น 2NF ก่อน
    - ห้ามมี transitive dependency
    - คือ column ต้องขึ้นกับ Primary Key เท่านั้น
