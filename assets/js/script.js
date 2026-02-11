// Foram criadas 3 constantes para puxar o ID do html
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

// Const relogio para setar intervalo de tempo com a fuction time
const relogio = setInterval(function time(){
    // Variaveis para coletar a data e a hora do dia
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();

    //Condição para que se a hora for menor que 10(ter apenas um numero), adicione um 0
    if(hr < 10) hr = '0' + hr;
    if(min < 10) min = '0' + min;
    if(sec < 10) sec = '0' + sec;

    // Mudando os valores, adicionando as horas, minutos e segundos
    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = sec;
})