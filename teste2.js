/* async function usingTryCatch() {
  try {
    let resolveValue = await asyncFunction('thing that will fail');
    let secondValue = await secondAsyncFunction(resolveValue);
  } catch (err) {
    // Catches any errors in the try block
    console.log(err);
  }
 }
  
 usingTryCatch();

 */

/*  getJSON('users.json')
  .then(JSON.parse)
  .then(response => console.log("Olha o JSON!", response))
  .catch(error => console.log("Falhou!", error))
 */
/* const chainingOperation = new Promise((resolve, reject) => {
  const number = 19;

  if (number < 18) {
    return reject('You are not of legal age yet.');
  }
  return resolve('You can')
})
  .then(resolveOptionOne => (`${resolveOptionOne} drive,`))
  .then(otherOption => (`${otherOption} party`))
  .then(optionThree => console.log(`${optionThree} and drink water...`))
  .catch(rejectOption => console.log(`${rejectOption}`)); */

/* const eatHamburger = async () => {
  //Lembre que aqui temos uma arrow function que por default tem uma função anônima
  //Nesse tipo de função o async vem antes da função anônima, e não antes de eatHamburger
  const result = await (prepareHamburger('Dois hambúrgueres,', 'alface,', 'queijo,', 'molho especial,', 'cebola,', 'e picles', 'num pão com gergelim!'))
  console.log(result);
}

const prepareHamburger = (ingredient1, ingredient2, ingredient3, ingredient4, ingredient5, ingredient6, ingredient7) => {
  return ingredient1 + ' ' + ingredient2 + ' ' + ingredient3 + ' ' + ingredient4 + ' ' + ingredient5 + ' ' + ingredient6 + ' ' + ingredient7;
}

eatHamburger(); */


/* const testingError = async () => {
  try {
    await functionThatDoesNotExist();
  } catch(error) {
    /* console.log(error.message); 
    console.error("outer", ex.message);
  }
}

testingError(); */

/* function doSomethingErrorProne () {
  if (ourCodeMakesAMistake()) {
    throw (new Error('A mensagem'));
  } else {
    doSomethingToGetAJavascriptError();
  }
} */

/* try {
  doSomethingErrorProne();
}
catch (e) {
  console.log(e.name); // exibe 'Error'
  console.log(e.message); // exibe 'A mensagem' ou uma mensagem de erro em JavaScript

} */

/* const errorFunction = () => {
  throw new Error("Deu ruim!");
}

const testingError = async () => {
  try {
    await errorFunction();
  }
  catch (error) {
    console.log("Aviso:", error.message);
  }
}

testingError(); */

const fetch = require('node-fetch');

const getCharacter = async (id) => {
  const result = await fetch(`https://swapi.dev/api/people/${id}`);
  const character = await result.json();
  return await character.name;
}

getCharacter(4);
/* 
curl -H "Accept: text/html" "https://swapi.dev/api/planets/1/"
curl -H "Accept: text/plain" "https://swapi.dev/api/planets/1/"
curl -H "Accept: application/json" "https://swapi.dev/api/planets/1/" */
