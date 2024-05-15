const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const mongoose = require('mongoose');
const { type } = require('os');

const app = express()
app.use(cors())
app.use(express.json())

dotenv.config();


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const {Schema}=mongoose;

const eatSchema = new Schema({
    img: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    }
});

const Eat = mongoose.model("Eat", eatSchema)


app.post("/eats", async(req,res)=>{
    try{
        const {img,price,title,category} = req.body
        const eat = new Eat({
            img,
            price,
            title,
            category
        })
       await eat.save();
    res.status(201).send(eat)

    }catch (error){
        res.status(500).json({
            message: error
        });

    }
});

app.get("/eats", async(req, res)=>{
    try{
        const eats = await Eat.find({})
    res.status(200).send(eats)

    }catch (error){
        res.status(500).json({
            message: error
        });

    }
});



app.delete("/eats/:id", async(req, res)=>{
    try{
        const {id}=req.params
    const eating = await Eat.findByIdAndDelete(id)
    res.status(200).send(eating)
    }catch(error){
        res.status(500).json({
            message: error
        });
    }
})


app.get("/eats/:id", async(req, res)=>{
    try{
        const {id}=req.params
    const findEat = await Eat.findById(id)
    res.status(200).send(findEat)
    }catch(error){
        res.status(500).json({
            message: error
        });
    }
})

app.put("/eats/:id", async(req, res)=>{
    try{
        const {id}=req.params
        const {img,price,title, category} = req.body
    const eat = await Eat.findByIdAndUpdate(id,{
        img,
        price,
        title,
        category
    },
      {new:true});
      
    res.status(200).send(eat)
    }catch(error){
        res.status(500).json({
            message: error
        });
    }
})

const PORT = process.env.PORT
const DB = process.env.DB_URL

mongoose.connect(DB)
  .then(() => console.log('Connected!'));
app.listen(PORT, ()=>console.log("Port is Active", PORT))