// --------------------- API LOGIN ROUTES ----------------------------

/*  "/api/login"
        GET: Carga la pagina de login
    @Autor: Mario Humberto Ramirez Lio
    @Descripcion: Llamado GET que muestra la pagina de login
*/ 
exports.paginaLogin = function(req, res){
    res.send('Hola mundo');
} 

/*  "api/login"
        POST: Autenticacion de tienda
    @Autor: Mario Humberto Ramirez Lio
    @Descripcion: Insercion de tiendas para autentificarlos
                  en el sistema mediante POST.
                  POST SCHEMA:
                  {
                      "email": <string>
                      "password: <string>"
                  }
*/
exports.autenticarce = function(req, res){

}

// --------------------- API RUTA REGISTRO ----------------------------------

/*  "api/create"
        GET: Carga la pagina de registro de tiendas
    @Autor: Mario Humberto Ramirez Lio
    @Descripcion: Llamado GET que muestra la pagina de registro
                  de las tiendas
*/
exports.paginaRegistro = function(req, res){

}

/*  "api/create"
        POST: Registro de tienda
    @Autor: Mario Humberto Ramirez Lio
    @Descripcion: Registro de tiendas en la plataforma
                  utilizando el metodo POST
                  POST SCHEMA:
                  {
                      "Nombre Tienda": <string>
                      "Email": <string>
                      "Telefono": <int>
                      "Direccion": {
                          "Calle": <string>
                          "Referencia": <string>
                          "Numero exterior": <int>
                          "Numero interior": <int>
                          "Colonia": <string>
                          "Ciudad": <string>
                          "Estado": <string>
                          "CP": <int>
                          "Pais": <int>
                      }
                      "Direccion Facturacion": {
                          "fCalle":<string>
                          "fReferencia": <string>
                          "fNumero exterior": <int>
                          "fNumero interior": <int>
                          "fColonia": <string>
                          "fCiudad": <string>
                          "fEstado": <string>
                          "fCP": <int>
                          "fPais": <int>
                      }
                  }
*/
exports.registrarse = function(req, res){
    
}