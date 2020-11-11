const mongoose =require ('mongoose');

const connectDB= async ()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            useUnifiedTopology:true,
            useNewUrlParser:true,
            useCreateIndex:true
        })

        console.log(`mongoDB Conected : ${conn.connection.host}`)
    }catch(err) {
        console.error(`Error : ${err.message}`)
        process.exit(1)  //to exit with failure
    }
}

module.exports = connectDB