const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://nick:" + process.env.PASS + "@realmcluster.lddnd.mongodb.net/" + process.env.DBNAME + "?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
  try {
    await client.connect();
    console.log("Connected correctly to server");

  } catch (err) {
    console.log(err.stack);
  }
  finally {
    await client.close();
  }
}
run().catch(console.dir);