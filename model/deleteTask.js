const client = require("./con")
const {ObjectId} = require("mongodb");
const deleteTask = async (id) => {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        const db = await client.db('test');
        console.log("You successfully connected to MongoDB");
        const objectId = new ObjectId(id)
        await db.collection("task").deleteOne({_id: objectId})
        await client.close()
        return true
    }catch (e){
        await client.close()
        return false
    }

}
module.exports = deleteTask