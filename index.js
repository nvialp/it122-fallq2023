import * as http from 'http';
import * as querystring from 'querystring';
import * as data from 'data';

const doneReading = (err, data) => {
    if(err) console.error(err);
    console.log('2 - done reading file');
    console.log(data.toString());
}

console.log("1 - Program Start");

http.createServer((req,res) => {
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
}).listen(process.env.PORT || 3000);
