

const key = "e19bd0bbb224152af5e630bf6248a125"

 


    function colocardadosnaTela(dados){
document.querySelector(".cidade").innerHTML = `Tempo em ${dados.name}`
document.querySelector(".temp").innerHTML = `${Math.floor(dados.main.temp)}°C`
document.querySelector(".previsão").innerHTML = `${dados.weather[0].description}`
document.querySelector(".umidade").innerHTML = `Umidade: ${dados.main.humidity}%`
document.querySelector(".img-previsão").src = `http://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

    
    }  
    
    async function buscarCidade(cidade) { 
    const dados  = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`) .then(resposta => resposta.json())

    colocardadosnaTela(dados)
}

function cliqueinoBotao() {
    const cidade = document.querySelector(".input-cidade").value 

    buscarCidade(cidade)
}