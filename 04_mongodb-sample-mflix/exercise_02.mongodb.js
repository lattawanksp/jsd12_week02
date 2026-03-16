use('sample_mflix');

//What is an example of  type “movie” and rated “TV-G” look like?
//หาตัวอย่างหนังอันนึง ที่มี type เป็น "movie" และ rated เป็น "TV-G"
db.movies.findOne({ type: "movie", rated: "TV-G" })


//How many movies are there in “movie” type and “TV-G” rated?
//มีหนังกี่เรื่องที่ type เป็น "movie" และ rated เป็น "TV-G" ใช้สำหรับนับจำนวน ไม่ต้องดึงข้อมูลออกมา
db.movies.countDocuments({ type: "movie", rated: "TV-G" })
/*
เฉลยในสไลด์
db.movies.find({ type: "movie", rated: "TV-G" }).count()
*/
