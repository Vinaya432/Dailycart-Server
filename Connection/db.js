const mongoose=require('mongoose')

const connectionString= process.env.DB_CONNECTION

mongoose.connect(connectionString).then(
    (res)=>{
        console.log("DailyCart servert connected sucessfully with mongodbAtlas");
    })
    .catch((err)=>{
        console.log(err);
    })
