const express = require('express')
const app = express()
const cors =require('cors')
const dotenv = require('dotenv')
const mongoose = require('mongoose');
const  bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false })) 
app.use(bodyParser.json())
dotenv.config()
app.use(cors())
 

DB_PASSWORD=process.env.DB_PASSWORD
DB_CONNECTION=process.env.DB_CONNECTION
mongoose.connect(DB_CONNECTION.replace("<password>",DB_PASSWORD))
.then(()=>console.log('MONGO DB CONNECTED'));

const CountrySchema=new mongoose.Schema({
 
    image:String,
    country:String
})

const CountryModel=mongoose.model("country",CountrySchema)


app.get('/', (req, res) => {
  res.send('Hello World!')
})

// get all
app.get('/country',async(req,res)=>{
    const{country}=req.query;
    const countries = await CountryModel.find();
    if (country === undefined) {
        res.status(200).send(countries);
    } else {
        res
            .status(200)
            .send(
                countries.filter((x) =>
                    x.country.toLowerCase().trim().includes(country.toLowerCase().trim())
                )
            );
    }
});
// get by id
app.get("/country/:id", async (req, res) => {
    const id = req.params.id;
    const newcountry = await CountryModel.findById(id);
    if (!newcountry) {
        res.status(204).send("item not found!");
    } else {
        res.status(200).send(newcountry);
    }
});
//  post
app.post("/country", async (req, res) => {
    const { image, country} = req.body;
    const newCountries = new CountryModel({
        image: image,
        country: country,
     
    });
    await newCountries.save();
    res.status(201).send("created");
});

// put
app.put("/country/:id", async (req, res) => {
    const id = req.params.id;
    const { image, country } = req.body;
    const existedCountry = await CountryModel.findByIdAndUpdate(id, {
        image: image,
        country: country,
     
    });
    if (existedCountry == undefined) {
        res.status(404).send("item not found!");
    } else {
        res.status(200).send(`${country} updated successfully!`);
    }
});
//delete
app.delete("/country/:id", async (req, res) => {
    const id = req.params.id;
    const county = await CountryModel.findByIdAndDelete(id);
    if (county === undefined) {
        res.status(404).send("item not found");
    } else {
        res.status(203).send(county);
    }
},)


PORT=process.env.PORT
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})