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
const chainingOperation = new Promise((resolve, reject) => {
  const number = 19;

  if (number < 18) {
    return reject('You are not of legal age yet.');
  }
  return resolve('You can')
})
.then(resolveOptionOne => (`${resolveOptionOne} drive,`))
.then(otherOption => (`${otherOption} party`))
.then(optionThree => console.log(`${optionThree} and drink water...`))
.catch(rejectOption => console.log(`${rejectOption}`));
    