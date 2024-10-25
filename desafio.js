
let identidade = "Thor Odinson"
let exp = 9001
let fase = ""

if(exp <= 1000){
    fase = "Ferro" 
} else if(exp <= 2000){
    fase = "Bronze"
} else if(exp <= 6000){
    fase = "Prata"
} else if(exp <= 7000) {
    fase = "Ouro"
} else if(exp <= 8000){
    fase = "Platina"
} else if(exp <= 9000){
    fase = "Ascendente"
} else if(exp <= 10000){
    fase = "Imortal"
} else if(exp >= 10001){
    fase = "Radiante"
}

console.log(`O Heroí de identidade ${identidade} está na fase ${fase}`);
