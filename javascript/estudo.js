function cotacaoDolar(real,dolar){
    return real * dolar;
}

var real = 10;
var cotacao = 5.67;

var total = cotacaoDolar(real,cotacao);

document.getElementById("text").innerHTML = total;