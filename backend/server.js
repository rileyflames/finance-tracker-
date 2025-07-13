import dotenv from 'dotenv'
import app from './src/app.js'
import connectDB from './src/config/db.js'


dotenv.config()

const startServer = async () => {
    // connect the DB
    await connectDB()

    // create the port 
    const PORT = process.env.PORT || 5000
    const server = app.listen(PORT, () =>{
        console.log(`Server running on http://localhost:${PORT}`);
        
    })

    // Handle server errors
    
}

startServer()