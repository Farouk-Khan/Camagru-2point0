var MongoClient = require('mongodb').MongoClient,format = require('util').format;
var url = 'mongodb://localhost/test';

// -left outer join collections / lookup
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("test");
//   dbo.collection('orders').aggregate([
//     { $lookup:
//        {
//          from: 'products',
//          localField: 'product_id',
//          foreignField: '_id',
//          as: 'orderdetails'
//        }
//      }
//     ]).toArray(function(err, res) {
//     if (err) throw err;
//     console.log(JSON.stringify(res));
//     db.close();
//   });
// });

// -updating a collection
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("test");
//   var myquery = { address: "Valley 345" };
//   var newvalues = { $set: {name: "Mickey", address: "Canyon 123" } };
//   dbo.collection("customers").updateOne(myquery, newvalues, function(err, res) {
//     if (err) throw err;
//     console.log("1 document updated");
//     db.close();
//   });
// });

// -dropping a Collection
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("test");
//   dbo.collection("customers").drop(function(err, delOK) {
//     if (err) throw err;
//     if (delOK) console.log("Collection deleted");
//     db.close();
//   });
// });

// -deleting data
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("test");
//   var myquery = { address: 'Parade 134' };
//   dbo.collection("customers").deleteOne(myquery, function(err, obj) {
//     if (err) throw err;
//     console.log("1 document deleted");
//     db.close();
//   });
// });

// -sorting data
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("test");
//   var mysort = { name: 1 };
//   dbo.collection("customers").find().sort(mysort).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });

// -how to query a collection
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("test");
//   var query = { address: "Highway 37" };
//   dbo.collection("customers").find(query).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });

// -finding a collection
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("test");
//   dbo.collection("customers").findOne({}, function(err, result) {
//     if (err) throw err;
//     console.log(result.name);
//     console.log(result.address);
//     db.close();
//   });
// });

// - inserting data into a collection
// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("test");
//   var myobj = [{ name: "Greg", address: "Main way 37" },
//   {name: "Lip", address: "Parade 134"},
//   {name: "Farouk", address: "Ocean View 164"}];
//   dbo.collection("customers").insert(myobj, function(err, res) {
//     if (err) throw err;
//     console.log("1 document inserted");
//     db.close();
//   });
// });

// - creating a collection
// MongoClient.connect(url, function(err, db){
//   if(err) throw err;
//   var dbo = db.db("test");
//   dbo.createCollection('customers', function(err, res){
//     if (err) throw err;
//     console.log("collection created")
//     db.close();
//   })
// });
