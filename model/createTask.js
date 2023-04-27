const client = require("./con")
const createTask = async (data) => {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        const db = await client.db('test');
        console.log("You successfully connected to MongoDB");
        await db.collection("task").insertOne(data)
        await client.close()
        return true
    }catch (e){
        await client.close()
        return false
    }

}
module.exports = createTask