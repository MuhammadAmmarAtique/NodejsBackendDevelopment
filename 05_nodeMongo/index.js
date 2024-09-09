import { MongoClient } from "mongodb";

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const dbName = "shop";

const main = async () => {
  await client.connect();
  console.log("Database connection Successfull!");

  const db = client.db(dbName);
  const productsCollection = db.collection("products");
  const allProductsDocuments = await productsCollection.find({}).toArray();
  console.log("allProductsDocuments: ", allProductsDocuments);

  return "done";
};

main()
  .then((res) => console.log(res))
  .catch((err) => console.error("Error connectiong mongodb database!", err))
  .finally(() => client.close());
