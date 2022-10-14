const { MongoClient } = require('mongodb');

async function main() {
    const uri = "mongodb+srv://admin:password1234@cluster0.prkjjfl.mongodb.net/todo?retryWrites=true&w=majority";

    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

    try {
        await client.connect(err => {
            const collection = client.db("test").collection("devices");
            // perform actions on the collection object
            client.close();
        });
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);

