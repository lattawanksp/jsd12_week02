use('sample_mflix');

//How many theaters does AL state has?
db.theaters.countDocuments({ "location.address.state": "AL" })


//How many theaters does La Quinta city has?
db.theaters.countDocuments({ "location.address.city": "La Quinta" })


//What is an example of each documents of above like?
//ดึงมาดู 1 ตัวอย่าง ว่า document จริงๆ ในฐานข้อมูลมีหน้าตายังไง 
//ขอดูหน้าตา document จริงๆ ของทั้งสองข้อ
db.theaters.findOne({ "location.address.state": "AL" })
db.theaters.findOne({ "location.address.city": "La Quinta" })

