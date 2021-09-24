const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./src/Routes');
const cors = require('cors');

app.use(cors());
const PORT = process.env.PORT || 5000;

mongoose.connect("mongodb+srv://PedroTrindade:pedro2804@cluster0.bialn.mongodb.net/imoveis?retryWrites=true&w=majority",{useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error',(error) => {
    console.log(error)
});
db.once('open',() => {
    console.log('DB connected!')
});

app.use(express.json());
app.use(routes);

app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
});