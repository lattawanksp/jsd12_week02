
use('sample_mflix');

//How many movies mentioned American in their plot?
db.movies.find( { plot: { $regex: "American", $options: "i" }}).count()

//How many movies does end plot (sentence) with the word street.
db.movies.find( { plot: { $regex: "street.$", $options: "i" }}).count()


//What does the data of above examples look like?
db.movies.findOne( { plot: { $regex: "American", $options: "i" }})
db.movies.findOne( { plot: { $regex: "street.$", $options: "i" }})

