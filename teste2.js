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

const prepareHamburger = (ingredient1, ingredient2, ingredient3, ingredient4, ingredient5, ingredient6, ingredient7) => {
  return ingredient1 + ' ' + ingredient2 + ' ' + ingredient3 + ' ' + ingredient4 + ' ' + ingredient5 + ' ' + ingredient6 + ' ' + ingredient7;
}

const eatHamburger = async () => {
  //Lembre que aqui temos uma arrow function que por default tem uma função anônima
  //Nesse tipo de função o async vem antes da função anônima, e não antes de eatHamburger
  const result = await (prepareHamburger('Dois hambúrgueres,', 'alface,', 'queijo,', 'molho especial,', 'cebola,', 'e picles', 'num pão com gergelim!'))
  console.log(result);
}

eatHamburger();
