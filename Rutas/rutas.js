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
                      "Nombre Tienda": <string> => AccountName
                      "Email": <string> => email__c
                      "Telefono": <int> => 
                      "Direccion": {
                          "Calle": <string> => Calle__c
                          "Referencia": <string> => Referencia__c
                          "Numero exterior": <int> => NumeroExterior__c
                          "Numero interior": <int> => NumeroInterior__c
                          "Colonia": <string> => Colonia__c
                          "Ciudad": <string> => Ciudad__c
                          "Estado": <string> => Estado__c
                          "CP": <int> => CP__c
                          "Pais": <int> => Pais__C
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