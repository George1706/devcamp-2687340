const express = require('express')

//Crear el objeto principal de la api

const app = express()

//URL de prueba:

app.get( '/prueba' , function(request , response){
    response.send("Hola")
} )

app.get('/prueba2', (request, response) =>{
    response
        .status(200)
        .json({
            "success" : true
        })
})

//Crear el servidor de aplicación:
app.listen( 5000 , 
    console.log('server ejecutando en puerto' + 5000))

