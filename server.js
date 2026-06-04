let app = require("./src/app");
let connectDB = require("./src/db/db.js");


connectDB().then(()=>{
    console.log("connected to db");
}).catch((e)=>{
    console.log(`Error in Connecting to Db ${e}`);
})


app.listen(3000,()=>{
    console.log("app is listening on port 3000");
})