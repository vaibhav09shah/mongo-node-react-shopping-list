const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
//var cors = require('cors');
var path = require('path');

const items = require('./routes/api/items');

const app = express();

//app.use(cors())

// Body Parser (Middle ware to parse incoming request)
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to Mongo DB
mongoose
    .connect(db)
    .then(() => console.log('Mongo DB Connected'))
    .catch(error => console.log(error));
    
// Use Routes
app.use('/api/items',items);
  
// Serve Static Assests if in production
if( process.env.NODE_ENV === 'production' ){
    // Set Static Folder
    app.use(express.static('client/build'));
    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    });
}

const port = process.env.PORT || 5000;

app.listen(port , () => console.log('Server Started on port '));