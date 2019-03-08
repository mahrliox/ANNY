//Install express server
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express(); //se inicializa el framework express

app.use(bodyParser.json()); //se le dice a express q usaremos body-parser con json
app.use(bodyParser.urlencoded({extended: true}));
// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/ANNY'));
app.get('/*', function(req,res) {
    res.sendFile(path.join(__dirname+'/dist/ANNY/index.html'));
});

//Rutas
app.get('/login',function(req, res){
    res.send("Hola mundo");
});
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
