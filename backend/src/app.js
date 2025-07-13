import express, { urlencoded } from 'express'
import hpp from 'hpp'
import helmet from 'helmet'
// import morgan from 'morgan'

// app instance
const app = express()


// Security middleware
app.use(helmet())
app.use(hpp())


// General middleware
app.use(express.json())
app.use(urlencoded({extended: true}))

app.get('/', (req , res) => {
    res.send('API is up and running!')
})




export default app