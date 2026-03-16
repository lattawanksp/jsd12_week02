
--------------------------EXERCISE 1--------------------------------

db.comments.find({});
db.comments.findOne({ email: "john_bishop@fakegmail.com" });

db          database ที่เราเชื่อมอยู่
comments    ชื่อ collection ที่จะดึงข้อมูล
find()      ดึงข้อมูล ทั้งหมด
{}          ไม่มีเงื่อนไข = เอามาหมดเลย
findOne()   ดึงข้อมูล แค่ 1 อัน ที่เจอเป็นอันแรก



--------------------------EXERCISE 2------------------------------------

.countDocuments(<query>, <options>)
เมธอดนี้ใช้สำหรับนับจำนวน documents ที่ตรงกับเงื่อนไข ที่กำหนดใน query — โดยที่ไม่ต้องดึงข้อมูลจริงๆ ออกมา

ตัวอย่าง
db.orders.countDocuments({ flavor: "Matcha" })
// ได้ผลลัพธ์เป็นตัวเลข เช่น 42
// ไม่ได้ return ข้อมูล order จริงๆ

<query>เงื่อนไขที่ต้องการกรอง (เหมือน WHERE ใน SQL)
<options>ตัวเลือกเพิ่มเติม เช่น limit, skip



---------------------------EXERCISE 3---------------------------------

ลักษณะเฉพาะของ MongoDB Document
1. Key-Value Pairs 
Document ประกอบด้วยคู่ key-value โดยที่ key เป็น string และ value สามารถเป็นได้หลายประเภท ไม่ว่าจะเป็น document อื่น, array, หรือค่าธรรมดา (เช่น ตัวเลข หรือ string)
2. Dynamic Schema (โครงสร้างแบบยืดหยุ่น)
MongoDB มี schema แบบยืดหยุ่น หมายความว่า document แต่ละอันใน collection เดียวกัน ไม่จำเป็นต้องมี field เหมือนกัน และ field เดียวกันก็อาจเก็บข้อมูลต่าง type กันได้
3. Nested Documents (Document ซ้อน Document)
Document สามารถมี document อื่นซ้อนอยู่ข้างใน ทำให้เก็บข้อมูลที่มีโครงสร้างซับซ้อนได้
4. BSON Format
MongoDB เก็บข้อมูลภายในในรูปแบบ BSON (Binary JSON) ซึ่งเป็นการต่อยอดจาก JSON — รองรับ data type มากกว่า และมีประสิทธิภาพในการจัดเก็บและค้นหาข้อมูลมากกว่า


Nested Fields (การเข้าถึง Field ที่ซ้อนอยู่ข้างใน)
รูปแบบการเขียน:
javascriptdb.collection.find({"root.child_1.child_1_1": "condition"})
ใช้ dot notation (จุด .) เพื่อเข้าถึง field ที่ซ้อนอยู่ข้างใน document

javascriptdb.movies.find({ "director.name": "Steven Spielberg" })
// Accessing a field in a subdocument
อธิบาย:
Query นี้ค้นหาหนังที่กำกับโดย Steven Spielberg โดย director เป็น subdocument ที่ซ้อนอยู่ข้างใน — ใช้ . เพื่อเข้าไปหา field name ข้างใน



---------------------------EXERCISE 4-------------------------------

การใช้ Regex ในการสืบค้นข้อมูลใน MongoDB
Regex คือการค้นหาแบบ "มีคำนี้ไหม / ขึ้นต้นด้วยอะไร / ลงท้ายด้วยอะไร" แทนที่จะต้องรู้คำเต็มๆ
Regex = Regular Expression = การค้นหาข้อมูลโดยใช้ pattern (รูปแบบ) แทนที่จะระบุคำตรงๆ

ตัวอย่างการใช้ Regex 3 แบบ
$regex: "prince"     มีคำว่า "prince" อยู่ที่ไหนก็ได้      ...by a prince before...
$regex: "^A convent"  ต้องขึ้นต้นด้วย "A convent"          A convent girl is...
$regex: "Africa.$"      ต้องลงท้ายด้วย "Africa."           ...in East Africa.'
$regex: "^Africa.$"     ต้องเป็นคำนั้นคำเดียวเท่านั้น           Africa.

syntax
db.collection.find( { plot: { $regex: “^A convent girl”, $options: "i"  }})

option i คือ insensitive case เป็น upper หรือ lower ก็ได้



---------------------------EXERCISE 5----------------------------------

Comparison Operators การเปรียบเทียบตัวเลขใน MongoDB

syntax
db.collection.find({num_field: {$gt: 300} 
//condition met, if num_field > 300}) //หาข้อมูลที่ num_field > 300

$gt = greater than = มากกว่า 
$lte = less than or equal = น้อยกว่าหรือเท่ากับ
$eq = equal = เท่ากับ


db.collection.find( <query> ).limit()
//.limit() คือการ จำกัดจำนวน ผลลัพธ์ที่จะแสดง เช่น (3)

db.collection.find( <query> ).sort({ field: 1 or -1 })
 1 = ascending (น้อย ไป มาก)
 -1 = descending (มาก ไป น้อย)
.sort() คือการ เรียงลำดับ ผลลัพธ์ที่ได้



---------------------------EXERCISE 6----------------------------------

การเข้าถึงข้อมูลใน Array

ส่วนบน — Array of Subdocuments
db.movies.find({ "director.awards.name": "Oscar" })
Subdocument = document ที่ซ้อนอยู่ข้างใน document อีกที

ส่วนล่าง — Array of Strings
db.movies.find({ genres: "Comedy" })
Array of Strings = array ที่เก็บแค่ข้อความธรรมดา ไม่มี document ซ้อน

Array of Strings = หยิบของในกล่องได้เลย
Array of Subdocuments = ต้องใช้ . เปิดกล่องซ้อนกล่องก่อนถึงจะหาของเจอ

syntax
db.collection.find({
“string_field”: {$in: [‘value1’, ‘value2’] } 
}) 
//หาหนังที่ ‘value1’ หรือ‘value2’ ก็ได้


db.collection.find({
“array_field”: {$in: [‘value1’, ‘value2’]} 
}) 

???งงสไลด์ 67 string field กับ Array field ต่างกันยังไง 

Operator	
$in	      หาว่ามีอยู่ในที่ list มั้ย
$gt	      มากกว่า //gte = มากกว่าหรือเท่ากับ
$lt	      น้อยกว่า //lte = น้อยกว่าหรือเท่ากับ
$all	    ต้องมีค่าทั้งหมดใน list นี้
$size	    เช็คจำนวน array
$exists	  มี field หรือ ไม่มี field //ค่า Boolean
$or	      หรือ
$ne	      ไม่เท่ากับ