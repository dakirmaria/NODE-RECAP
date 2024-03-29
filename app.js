//the entry point
const path = require("path");
const express = require("express");
const app = express();
const port = 3008;
//routes
const productRoutes = require("./routes/product");
const userRoutes = require("./routes/user")
//database connection
const mongoConnect = require("./util/database").mongoConnect;

app.use(express.json());
app.use(express.urlencoded({ extended: false })); 

app.use('/products', productRoutes);
app.use('/users', userRoutes);
mongoConnect((client)=>{
    app.listen(port, () => console.log(`This app listening on port ${port}!`));
});