// CRUD operations

const mongodb = require("mongodb");
const { MongoClient, ObjectID } = mongodb;

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "usuarios-api";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database");
    }

    const db = client.db(databaseName);

    // db.collection("users").findOne(
    //   { _id: new ObjectID("5f52a9935c3e0214fdc359af") },
    //   (error, user) => {
    //     if (error) {
    //       return console.log(error, "Unable to fetch");
    //     }

    //     console.log(user);
    //   }
    // );

    // db.collection("tasks")
    //   .find()
    //   .toArray((error, results) => {
    //     console.log(results);
    //   });

    // db.collection("users")
    //   .updateOne(
    //     { _id: new ObjectID("5f52949bc755cf1490266463") },
    //     {
    //       $set: {
    //         age: "36",
    //       },
    //     }
    //   )
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // db.collection("tasks")
    //   .updateMany(
    //     {},
    //     {
    //       $set: {
    //         completed: true,
    //       },
    //     }
    //   )
    //   .then((result) => console.log(result))
    //   .catch((error) => console.log(error));

    // db.collection("users")
    //   .deleteMany({ name: "Luiza" })
    //   .then((result) => console.log(result.modifiedCount))
    //   .catch((error) => console.log(error));

    // db.collection("tasks")
    //   .deleteOne({ description: "Study" })
    //   .then((result) => console.log(result))
    //   .catch((error) => console.log(error));
  }
);
