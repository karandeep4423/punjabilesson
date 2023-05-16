// const { MongoClient } = require("mongodb");

// const MONGODB_URI = process.env.MONGODB_URI;
// const MONGODB_DB = process.env.MONGODB_DB;

// let cachedClient;
// let cachedDb;

// async function connectToDatabase() {
//   // Check the cache.
//   if (cachedClient && cachedDb) {
//     // Load from cache.
//     return {
//       client: cachedClient,
//       db: cachedDb,
//     };
//   }

//   // Set the connection options.
//   const opts = {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   };

//   // Check the MongoDB URI.
// //   if (!MONGODB_URI) {
// //     throw new Error("Define the MONGODB_URI environmental variable");
// //   }
// //   // Check the MongoDB DB.
// //   if (!MONGODB_DB) {
// //     throw new Error("Define the MONGODB_DB environmental variable");
// //   }

//   // Connect to cluster.
//   let client = new MongoClient("mongodb+srv://karandeepsingh:bachiwind123@cluster0.0xmjoor.mongodb.net/?retryWrites=true", opts);
//   await client.connect();
//   let db = client.db("test");

//   // Set cache.
//   cachedClient = client;
//   cachedDb = db;

//   return {
//     client: cachedClient,
//     db: cachedDb,
//   };
// }

// module.exports = {
//   connectToDatabase,
// };

import mongoose from "mongoose";

const connectedDb = handler=>async(req,res)=>{
    if(mongoose.connections[0].readyState){
        console.log("connected mongodb",mongoose.connections[0].readyState);
        return handler(req,res);
    }
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("connected mongodb",res);
    return handler(req,res);
}

export default connectedDb;
