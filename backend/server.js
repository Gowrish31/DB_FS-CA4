const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://gowrish3:gowrish3107@cluster0.0ipca.mongodb.net/DB_fs_4").then(()=>{
    console.log("MongoDB connected")
}).catch((err)=>{
    console.log("MongoDB not connected")
})


const bookSchema = new mongoose.Schema({
    title:String,
    genre:String,
    author:{type: mongoose.Schema.Types.ObjectId}
})
const Books = mongoose.model("Books",bookSchema)

const authorSchema = new mongoose.Schema({
    name:String,
    nationnality:String,
})
const Author = mongoose.model("Author",authorSchema)


app.get("/books",async (req,res) => {
    try {
        const book = await Books.find()
        return res.json(book)
        
    } catch (error) {
        return res.status(500).json({error})
    }
    
})

app.post("/books",async (req,res) => {
    try {
        const books = new Books(req.body)
        await books.save()
        return res.json(books)
        
    } catch (error) {
        return res.status(500).json({error})
    }
    
})

app.put("/books/:id/auhtor", async (req,res) => {
    const {id} = req.params
    const {author} = req.body
    try {
        const res = await Books.findByIdAndUpdate({_id:id},{author:author})
        return res.json(res)
        
    } catch (error) {
        return res.status(500).json({error})
        
    }
    
})
app.delete("/books/:id", async (req,res) => {
    const {id} = req.params
  
    try {
        const res = await Books.findByIdAndDelete(id)
        return res.send("deleted successfully")
        
    } catch (error) {
        return res.status(500).json({error})
        
    }
    
})

app.listen(8080,()=>{
    console.log("server running on port: http://localhost:8080")
})