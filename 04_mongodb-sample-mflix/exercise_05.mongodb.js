use('sample_mflix');

//What are top 5 runtime movies?
db.movies.find().sort({ runtime: -1 }).limit(5)
/* แสดงแค่ชื่อ แสดงชื่อ title=1 ซ่อนค่าid=0
db.movies.find({}, { title: 1, _id: 0 }).sort({ runtime: -1 }).limit(5) 
*/


//What are top 5 runtime movies that less than 60 minutes?
db.movies.find(
    {runtime: {$lte: 60}}, 
    {title: 1, _id: 0} 
).sort({ runtime: -1 }).limit(5)



//I was born in 1955, which 3 movies should I watch in next 10 years?
//เกิด 1955 หนัง 3 เรื่องอะไรที่ควรดูในอีก 10 ปีข้างหน้า?
db.movies.find(
    {year: {$gt: 1965}}
).sort({ year: -1 }).limit(3)
/*
เฉลย
db.movies.find({ year: { $gt: 1954, $lt: 1966 } }).sort({ year: 1 }).limit(3)
*/



//How many movies were released during 1990 - 2000?
db.movies.find(
    {year: {$gte: 1990, $lte: 2000}}, 
).count() 

db.movies.countDocuments({ year: { $gte: 1990, $lte: 2000 } })

/*
เฉลย
db.movies.find(
{ released: 
 { $gte: ISODate("1990-01-01T00:00:00Z"), $lt: ISODate("2001-01-01T00:00:00Z") } 
  }
 ).count()
*/