const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// APPLY MIDDLEWARE
app.use(bodyParser.json(), cors());

const db = require('./config/access').mongoURI;
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(console.log("\x1b[36m", `Successfully connected to MongoDB`));

// ROUTES
const apartmentRouter = require('./routes/apartments');
app.use('/api/v1/apartments', apartmentRouter);

// SERVE STATIC ASSETS IF IN PRODUCTION
if(process.env.NODE_ENV === 'production') {
    // SET STATIC FOLDER
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
    })
}

const port = process.env.PORT || 5000;
app.listen(port, (err) => {
    if (err) throw err;
    console.log("\x1b[36m", `Server is running at port: ${port}`)
})