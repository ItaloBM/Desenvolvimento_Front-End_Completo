import React from 'react'


// o "term" é digitado pelo usuário e o "secretNum" é o número sorteado
const Result = ({ term , secretNum }) => {
let result;
if(term){
    // se o número secreto for maior que o digitado
    if(secretNum > term){
    result = 'Mais!'
    }
    // se o número secreto for menor que o digitado
    else if(secretNum < term){
    result ='Menos!'
    }
    // senão, acertou
    else{
    result ='Exato, você acertou!'
    }
}
return <h3>{result}</h3>
}


export default Result