const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const exec = require('child_process').exec;


const PORT = process.env.PORT || 3001;
const databaseRoute = 'mongodb://localhost/wojackindexTEST';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));
require("./routes/api-routes.js")(app);

mongoose.connect(databaseRoute, {useNewUrlParser: true});
mongoose.connection.once('open', () => {
    console.log('Connected to the database!');
});

app.listen(PORT, () => {
    console.log(`Server init successful! App is listening on port ${PORT}.`);
    
});

function scrape() {
    var linklist = '';
    exec('python scrape.py', function (error, stdout, stderr) {
        if (error instanceof Error) {
            console.error(error);
            throw error;
        }
        if (stderr != '') return(stderr);
        linklist = stdout.split('\n');
    });
    return linklist;
};

function genIndexTest(linklist) {
    //test code for before i train the AI to recognize wojack memes
    let avg = 0;
    linklist.array.forEach(element => {
        test = Math.random();
        if (test >= .5){
            avg += 1;
        }
    });
    avg = avg / linklist.array.length;
    return avg;
    //end of test code, put real image recognition code after here
};

