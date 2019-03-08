const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const jsforce = require('./node_modules/jsforce');
const rutas = require('./Rutas/rutas.js');
const app = express(); //se inicializa el framework express

app.use(bodyParser.json()); //se le dice a express q usaremos body-parser con json
app.use(bodyParser.urlencoded({extended: true}));
// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/ANNY'));

//---------------------- CONECCION CON SALESFORCE --------------------

/*  @Salesforce SOAP Conection
        usuarioSalesforce: nombre del usuario
        contraseñaTokenSalesforce: contraseña + security token
    @Autor: Mario Humberto Ramirez Lio
    @Descripcion: Coneccion a la API de Salesforce mediante SOAP
*/
var usuarioSalesforce = 'anni@anivia.mx';
var contraseñaTokenSalesforce = 'andemosalesforce3000JnXXMCcOjL2JL9rKkWWm6KuBB';
var conn = new jsforce.Connection({
  });
  conn.login(usuarioSalesforce, contraseñaTokenSalesforce, function(err, userInfo) {
    if (err) { return console.error(err); }
    insUrl = conn.instanceUrl;// Si la coneccion resulto bien, guardamos la url de nuestra instancia y el accestoken
    aToken = conn.accessToken;// para posteriormente hacer una coneccion con estos 2 datos
    // logged in user property
    console.log(aToken);
    console.log(insUrl);
    console.log("User ID: " + userInfo.id);
    console.log("Org ID: " + userInfo.organizationId);
    
  });
// Rutas Login
app.get('/api/login', rutas.paginaLogin);
app.post('/api/login', rutas.autenticarce);

//Rutas Registro
app.get('/api/create', rutas.paginaRegistro);
app.post('/api/create',rutas.registrarse);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
