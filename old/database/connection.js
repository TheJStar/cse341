const { MongoClient } = require("mongodb");

async function main() {

    const uri = "mongodb+srv://userone:userone@cluster0.leq0v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    
    const client = new MongoClient(uri);

    try {
        await client.connect();

        return await listDatabases(client);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

// main().catch(console.error);

async function listDatabases(client) {
    const databasesList = await client.db().admin().listDatabases();
    let dbList;

    //console.log("Databases:")
    databasesList.databases.forEach(db => {
        dbList += `\n-${db.name}`
        //console.log(`- ${db.name}`)
    });

    return dbList
}

module.exports = {
    main,
}