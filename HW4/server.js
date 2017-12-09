const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();



// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));

 




app.get('/api/getSymbols', function(req, res, next){
     
	var symbol = req.query.symbol;
    var request = require('request');
   
    request.get({ url: "http://dev.markitondemand.com/MODApis/Api/v2/Lookup/json?input="+symbol},
    	       function(error, response, body) { 
              if (!error && response.statusCode == 200) { 
                  resp = response;
                    //return res.send(resp);
                  console.log(body); 
                  return res.send(body);
                  bool=0;

                 }
              else
              {
              	 console.log(body); 
              	 return res.send("symbol error");
              }
    }); 


});


app.post('/share', function(req,res,next)
{
  
  var request = require('request');
  console.log("this"+req.body);
  var symbol = req.body;

  //console.log(symbol);
  //console.log(symbol);
// Or with cookies
// var request = require('request').defaults({jar: true});

var request = require('request');

  request.post({
        headers: {'content-type':'application/json'},
        url:'http://export.highcharts.com/',
        json: symbol
    },function(error, response, body){
    resp = response;
                   //return res.send(resp);
                  //console.log(body); 
                   return res.send(body);
  });


/*    request.get({ url: "http://export.highcharts.com/"+symbol},
             function(error, response, body) { 
              if (!error && response.statusCode == 200) { 
                  resp = response;
                   //return res.send(resp);
                  //console.log(body); 
                   return res.send(body);
                  bool=0;
                  console.log("so this happened");
                 }
              else
              {
                 console.log(body); 
                 return res.send("error");
              }
             }); 
*/


});


// API location
//app.use('/api', api);

app.get('/api/getStock', function(req, res, next){

	var symbol = req.query.symbol;
    var bool=1;
    var resp="0";

    var request = require('request');
    request.get({ url: "http://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol="+symbol+"&apikey=LLM792ZBPXIAQZOI&outputsize=full"},
    	       function(error, response, body) { 
              if (!error && response.statusCode == 200) { 
                  resp = response;
                   //return res.send(resp);
                  //console.log(body); 
                   return res.send(body);
                  bool=0;
                  console.log("so this happened");
                 }
              else
              {
              	// console.log(body); 
              	 return res.send("error");
              }
             }); 

});



app.get('/api/getIndicators', function(req, res, next){

	var symbol = req.query.symbol;
	var ind = req.query.function;
    var bool=1;
    var resp="0";

    var request = require('request');
    request.get({ url: "http://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol="+symbol+"&function="+ind+"&interval=daily&time_period=10&series_type=close&apikey=LLM792ZBPXIAQZOI&outputsize=full"},
    	       function(error, response, body) { 
              if (!error && response.statusCode == 200) { 
                  resp = response;
                    //return res.send(resp);
                  //console.log(body); 
                   return res.send(body);
                  bool=0;
                  console.log("so this happened");
                 }
              else
              {
              	 console.log(body); 
              	 return res.send("error");
              }
             }); 

});


app.get('/getNews', function(req, res, next){

  var symbol = req.query.symbol;


    var request = require('request');
    request.get({ url: "https://seekingalpha.com/api/sa/combined/"+symbol+".xml"},
             function(error, response, body) { 
              if (!error && response.statusCode == 200) { 
                  resp = response;

                  //console.log(resp);

                  var parser = require('xml2js').parseString;
                  parser(body, {trim: true}, function (err, result) {
                    // console.log(result);
                     return res.send(result);
                  });

                    //return res.send(resp);
                  //console.log(body); 
            
                  bool=0;
                                }
              else
              {
                 //console.log(body); 
                 return res.send("error");
              }
             }); 

});





// Send all other requests to the Angular app
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.get('/data-fetch.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/data-fetch.js'));
});

app.get('/moment-timezone.min.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/moment-timezone.min.js'));
});

app.get('/moment.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/moment.js'));
});





//Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));
