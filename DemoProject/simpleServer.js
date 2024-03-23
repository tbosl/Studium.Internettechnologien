'use strict'
const express = require('express');
const app = express();
app.use(express.static('public'))

// Wir laden contents aus dem public Ordner
app.use('/css', express.static(__dirname + '/public/css'))
app.use('/js', express.static(__dirname + '/public/js'))
app.use('/images', express.static(__dirname + '/public/images'))



/**
* Starts the Express server.
* @return {ExpressServer} 
*/
function startServer() {
// Start the server
    return app.listen('8080', () => {
        console.log('Local Server Started on port 8080...');
    });
}

/**
 *  Diese Funktion würde aufgerufen, wenn Sie im Browser nach der Form fragen localhost:8080/form
 */ 
app.get('/form', function (req, res) {
    res.send("<hmtl><header><link href=\"css\/style.css\" rel=\"stylesheet\" type=\"text\/css\" ></header><body>Geht oder?<form " + 
    "action= \"/antwort\" method=\"get\"><label for=\"team_name\">Enter" + 
    "name: </label><input id=\"team_name\" type=\"text\" name=\"name_field\" value=\"Hallo"+
    "Welt\"><input type=\"submit\" value=\"OK\"></form></body></hmtl>");
    
});
    
app.get('/antwort', function (req, res) {
    
    // Hier verarbeiten Sie die Eingaben aus den Feldern des Formulars req.query.email
    // Typischerweise nutzen Sie dazu eine Model Klasse, um Daten zu speichern oder zu laden
    

    //Hier generieren Sie eine Antwort die Gesendet wird (Später View Klasse)
    res.send("<html><header></header><body>"+"Angekommen "+req.query.email+"</body></html>");
    
});
    
startServer();
    
