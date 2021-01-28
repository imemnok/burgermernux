const MongoClient = require("mongodb").MongoClient;

const dbConnectionUrl = "mongodb+srv://bgdbAdmin:l2XuYqeNZjBjlsMEGt3o@burger-clu0.ghcup.mongodb.net/menu_item?retryWrites=true&w=majority";

function initialize(
    dbName,
    dbCollectionName,
    successCallback,
    failureCallback
) {
    MongoClient.connect(dbConnectionUrl, function(err, dbInstance) {
        if (err) {
            console.log(`[MongoDB Connection] ERROR: ${err}`);
            failureCallback(err);
        } else {
            const dbObject = dbInstance.db(dbName);
            const dbCollection = dbObject.collection(dbCollectionName);
            console.log("[MongoDB connection] SUCCESS")

            successCallback(dbCollection)
        }
    });
}

module.exports = {
    initialize
}