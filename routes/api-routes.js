const indexPoint = require('../models/indexpoint');
var date = new Date();

var defaultQuery = 1; //default amount of years back to search for data. 

module.exports = function (app) {

    app.get('/api/index', function (req, res) {
        indexPoint.find({})
            // {date: {
            //     $gte: {
            //         value: req.body.start, 
            //         default: new Date(date.setFullYear(date.getFullYear() - defaultQuery))
            //     },
            //     $lte: {
            //         value: req.body.end,
            //         default: date
            //     }
            // }})
            .then(function (indexData) {
                res.json(indexData);
            })
            .catch(function (err) {
                res.json(err);
            });
    });
    app.post('/api/index', function (req, res) {
        console.log('post route hit')
        indexPoint.create(req.body)
            .then(function (indexData) {
                res.json(indexData);
            })
            .catch(function (err) {
                res.json(err);
            });
    });
};