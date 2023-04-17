import express from 'express'
import postRoutes from './routes/posts.js'
import userRoutes from './routes/users.js'
import authRoutes from './routes/auth.js'
import { db } from './db.js'
import cookieParser from 'cookie-parser'

const app = express()

app.use(express.json())
app.use(cookieParser( ))
app.use("/api/posts",postRoutes)
app.use("/api/auth",authRoutes)
app.use("/api/users",userRoutes)



app.get('/test',(req,res)=>{
      const q = "SELECT * FROM users"
      db.query(q,(err,data)=>{
         if(err) return res.json(err)
         return res.json(data)
      })
})

app.listen(8800,()=>{
    console.log('connected ')
})