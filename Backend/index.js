const express = require("express");
const cors = require("cors");
const productRoutes= require("./routes/ProductsRoutes");

const app = express();

// middileware for cross-origin
app.use(cors());

// middileware for json
app.use(express.json());

// Routes
app.use(productRoutes);

app.listen(5000, () => console.log(`Server running on http://localhost:5000`));

// NotFound middleware
app.use((request,response,next)=>{
    response.status(404).json({message:'Not Found'});
})

// error middleware
app.use((error,request,response,next)=>{
    response.status(500).json({Errormessage: error+""});
})
