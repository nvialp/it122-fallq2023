'use strict';

import express from 'express';
import * as http from 'http';
import * as querystring from 'querystring';
import * as data from './data.js';
import { Rovers } from "./models/Rovers.js";
import cors from 'cors';

const app = express();
app.set('port', process.env.PORT || 3000);
app.use(express.static('./public'));
app.use(express.urlencoded());
app.use(express.json());
app.use('/api', cors()); // set Access-Control-Allow-Origin header for api route
app.set('view engine', 'ejs'); // set the view engine to ejs

//defined routes with mongodb
app.get('/', (req, res, next) => {
    Rovers.find({}).lean()
      .then((rovers) => {
        // respond to browser only after db query completes
        res.render('home', { rovers:JSON.stringify(rovers)});
      })
      .catch(err => next(err))
});

app.get('/rover/:name', (req, res, next) => {
    Rovers.findOne({ "name": req.params.name }).lean()
        .then((rover) => {
            res.render('detail', {rover: rover} );
            })
        .catch(err => next(err));
});

//api's
app.get('/api/rovers', (req, res, next) => {
    Rovers.find({}).then((err, result) => {
        if(err) {
            res.send(err);
        }
        res.json(result);
    });
});

app.get('/api/rover/:name', (req, res, next) => {
    let name = req.params.name;
    console.log(name);
    Rovers.findOne({name: name}).then((rover) => {
        res.json(rover);
        })
    .catch(err => next(err));
});

app.get('/api/delete/:name', (req,res, next) => {
    Rovers.deleteOne({"name":req.params.name }).then((err, result) => {
        if (err) {
            return next(err);
        }
        else {
        // return # of items deleted
        console.log(result)
        res.json({"deleted": result});
        }
    });
});

app.get('/api/add/:name/:landed/:speed/:mass/:tools', (req,res, next) => {
    // find & update existing item, or add new 
    let name = req.params.name;
    Rovers.update({ name:name}, {name:name, landed: req.params.landed, speed: req.params.speed, mass:req.params.mass, tools:req.params.tools }, {upsert: true }, (err, result) => {
        if (err) return next(err);
        // nModified = 0 for new item, = 1+ for updated item 
        res.json({updated: result.nModified});
    });
});
//defined routes
/*app.get('/', (req,res) => {
  res.render('home', { rovers: data.getAll()});
});

app.get('/rover/:name', (req, res) => {
    const name = req.params.name;

    res.render('detail', { rover: data.getItem(name)});
})*/

// define 404 handler
app.use((req,res) => {
 res.type('text/plain'); 
 res.status(404);
 res.send('404 - Not found');
});

//started app
app.listen(app.get('port'), () => {
  console.log('Express started'); 
});

/*http.createServer((req,res) => {
    var path = req.url.toLowerCase();    
    switch(path) {
        case '/':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('Home page');
            break;
        case '/about':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('About page');
            break;
        default:
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('Not found');
            break;
    }    
}).listen(process.env.PORT || 3000);*/


