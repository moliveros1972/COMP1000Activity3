// var arrayLength = 10;
// var newTable = new Array(arrayLength);

// for (var i = 0; i < newTable.length; i++) {
// 	newTable[i] = new Array(arrayLength);
// }

// document.write("<br/>");
// document.write("<table border = '2'>");


// for (var i = 0; i < 10; i++) {
// 	document.write("<tr>");
// 	for(var j = 0; j < 10; j++) {
// 		document.write("<td>" + newTable[i][j] + "</td>");
// 	}
// 	document.write("<tr/>");
// }
// document.write("</table>");




document.write("<br/>");
var words = ['Team', 'City', 'yearsWon', 'Colors', 'Titles', 'Leagues', 'Masqot', 'Stadium', 'Coach', 'Sport', 'Dolphins', '0', '1', '0', 'Congregación', 'Contemplación', 'Contraguía', 'Corona' , 'Cortejo', 'Costal', 'Costalero', '0', '0', 'Cristiano', 'Cristo', 'Cruz', 'Cuadrilla', 'Cuaresma', 'Delantera', 'Desfilar', 'Devoción', 'Devoto', 'Dolorosa', 'Domingo', 'Dylan', 'Escudo', 'Esparto', 'Estación', 'Estandarte', 'Estigmas', 'Faldón','Fervor','Fieles', 'Flagelación', 'Flores', 'Hermandad', 'Horario', 'Ibis', 'Iglesia', 'Imagen', 'Imaginería', 'Incensario', 'Incienso', 'Itinerario', 'Jueves', 'Levantá', 'Madrugá', 'Mantilla', 'Marcha', 'Maurice', 'Mecer', 'Meditación', 'Meditar', 'Muerte', 'Música', 'Nazareno', 'Oración', 'Orfebrería', 'Participación', 'Participar', 'Pasión', 'Paso', 'Patero', 'Penitencia', 'Perdón', 'Piadoso', 'Pies', 'Policromado', 'Predicar', 'Procesión', 'Recorrido', 'Rezar', 'Roberto', 'Rosario', 'Saeta', 'Sandalias', 'Salvi', 'Semana', 'Silencio', 'Simpecado', 'Suplicio', 'Talla', 'Tambor', 'Tradición', 'Tramo', 'Trompeta', 'Túnica', 'Turístico', 'Vía', 'Viernes']
var arrayLen = 10;
var wordsArr = new Array(arrayLen);
var m = 0;
var n = 0;
for (var i = 0; i < wordsArr.length; i++) {
    wordsArr[i] = new Array(arrayLen);
}

var count = 0;
    for(var i =0; i < 10; i++) {
            for(var j =0; j < 10; j++) {
              wordsArr[i][j] = words[count++];
            }
    }


function table() {
	if (m > 9) {
        m = 0;
    }
    if (m < 0) {
        m = 9;
    }
    if (n > 9) {
        n = 0;
    }
    if (n < 0) {
        n = 9;
    }
	document.body.innerHTML = "";
	document.write("<table border='1'>");
    for(var i =0; i < 10; i++) {
        document.write("</tr>");
            for(var j =0; j < 10; j++) {
            	if (i==m && j==n) {
            		document.write("<td style='background-color: green'>" + wordsArr[i][j] + "</td>");
       			} else {
       				document.write("<td>" + wordsArr[i][j] + "</td>");
       			}
        	}
        document.write("</tr>");
    }
document.write("</table>");
document.write('<br/><br/>X input:<input type="text" id="x">&nbsp;\
Y input:<input type="text" id="y">\
		&nbsp;\
Value:<input type="text" id="value">&nbsp;\
<button type="button" onclick="getAnswer()">Update</button>');
document.write('<br><br>\
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button onclick="up()">Up</button>\
    <br>\
    <button onclick="left()">Left</button>\
    <button onclick="right()">Right</button>\
    <br>\
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button onclick="down()">Down</button>')
console.log(n);
console.log(m);
}
table();


function getAnswer() {
	var myInputx = document.getElementById("x").value;
	var myInputy = document.getElementById("y").value;
	var myInputv = document.getElementById("value").value;
	wordsArr[myInputx][myInputy] = myInputv;
table();
}


function up() {
	m = m - 1;
	table();
}

function down() {
	m = m + 1;
	table();

}
function right() {
	n = n + 1;
	table();
}

function left() {
	n = n - 1;
	table();

}




// var random80n89 = Math.floor(Math.random() * (89 - 80 + 1)) + 80;
// alert(random80n89);

// function letsRepeat(){
// 	var today = new Date();
// 	alert("It is now " + today.getSeconds() + " seconds");
// }

// setInterval(letsRepeat, 5000);
// Collapse









// var newTable[0] = ["Team", "City", "yearsWon", "Colors", "HowManyTitles", "Leagues", "Masqot", "StadiumName", "Coach", "Sport"];
// var newTable[1] = ["Dolphins", "Miami", "1972, 1973", "Aquablue", ""];
// var newTable[2] = ["Dylan", 29, "2019-01-01", 1];
// var newTable[3] = ["Maurice", 29, "2019-01-01", 1];
// var newTable[4] = ["Name", "Age", "DateEnrolled", "InClass"];
// var newTable[5] = ["Name", "Age", "DateEnrolled", "InClass"];
// var newTable[6] = ["Name", "Age", "DateEnrolled", "InClass"];
// var newTable[7] = ["Name", "Age", "DateEnrolled", "InClass"];
// var newTable[8] = ["Name", "Age", "DateEnrolled", "InClass"];
// var newTable[9] = ["Name", "Age", "DateEnrolled", "InClass"];











