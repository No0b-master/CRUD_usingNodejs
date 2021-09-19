const mongoos = require('mongoose')

const connectDB = async() => {

    try{
        const conn = await mongoos.connect(process.env.MONGODB_URL,{

            useNewUrlParser:true,
            useUnifiedTopology:true,
          //  useFindAndModify: false
            
            
        });
        console.log("Mongodb Connected:"+ conn.connection.host);
        



    }
    catch(err){
        console.log(err);
        process.exit(1);
    }


}

module.exports= connectDB;