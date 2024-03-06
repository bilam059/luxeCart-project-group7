const { default: mongoose } = require("mongoose")

const dbConnect = () => {
    try{
        const conn = mongoose.connect(process.env.MONGODB_URL, {
            dbName: 'LuxeCart'});
        console.log("Database Connection Successful");
    }
    catch(error){
        console.log("Error Database Connection");
    }
};

module.exports = dbConnect;