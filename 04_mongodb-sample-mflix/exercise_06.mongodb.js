use('sample_mflix');

//Find all movies in the "movies" collection released between 1950 and 1970 (inclusive) that are documented as being shown in countries located in the USA.
//หาหนังทุกเรื่องใน movies collection ที่ออกฉายระหว่างปี 1950 ถึง 1970 
//(รวมทั้งสองปีด้วย) และฉายในประเทศสหรัฐอเมริกา
db.movies.find({ 
    released: { 
        $gte: ISODate("1950-01-01T00:00:00Z"), 
        $lte: ISODate("1970-01-01T00:00:00Z") 
    },
    },
    {countries: "USA"}
)

/*เฉลย
db.movies.find({
  countries: {$in: ["USA"]},
  year: {$gte: 1950, $lte: 1970}
})
*/


//What is the number of movies in the "movies" collection with 
//genres "Drama" and "History" released after the year 1970?
db.movies.countDocuments({
    genres: {$all: ['Drama', 'History'] },
    released: {$gte: ISODate("1970-01-01T00:00:00Z")}
})
/*เฉลย
db.movies.find({ 
  genres: { $all: ["Drama", "History"] },
  released: { $gt: ISODate("1970-01-01T00:00:00Z") }
}).count()
*/



//In how many films is Roy L. McCardell credited as an actor?
db.movies.countDocuments({
    cast: "Roy L. McCardell"
})
/*เฉลย
db.movies.find({ cast: "Roy L. McCardell" }).count()
*/


//How many movies did Hal Roach directed?
db.movies.countDocuments({
    directors: "Hal Roach"
})
/*เฉลย
db.movies.find({ directors: "Hal Roach" }).count()
*/

//What is the movie with the earliest release year directed by Hal Roach?
db.movies.find({ 
    directors: "Hal Roach",
    },
)
.sort({ released: -1})
.limit(1)
/*เฉลย
db.movies.find({ directors: { $in: ["Hal Roach"] } });
*/

//How many awards did Hal Roach’s movies win?
db.movies.countDocuments({
    directors: "Hal Roach",
    awards: 1
})
