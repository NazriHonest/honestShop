import mongoose from 'mongoose';

const ConnectToDB = async ()=>{
    try {
        
        const conn = await mongoose.connect(process.env.MONGO_URL);

        console.log(`Connected to database ${conn.connection.name}`)
        
    } catch (e) {
        console.log(e)
    }
}

export default ConnectToDB