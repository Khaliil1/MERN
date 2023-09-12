const mongoose = require('mongoose');
const DB = "jokes-api";

mongoose.connect(`mongodb://127.0.0.1:27017/${DB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database ' + DB))
    .catch(err => console.log('SOMETHING WENT WRONG WHEN CONNECTING TO THE DATABASE ', err));