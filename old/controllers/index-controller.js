const connection = require("../database/connection")

const helloWorld = (req, res) => {
    res.send("Hello World");
};

const databaseList = async (req, res) => {
    const list = await connection.main().catch(console.error())
    console.log(list)
    res.send(list)
}

module.exports = {
    helloWorld,
    databaseList,
};