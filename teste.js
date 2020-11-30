/* wakeUp()
  .then(result => haveBreakfast(result))
  .catch(() => {
    console.error('Get hungry');
  }) */


/*   const haveBreakfast = new Promise((resolve, reject) => {
    const morningRoutine = Math.floor(Math.random() * 2) + 1;
    const breakfast = 'cheese bread';
    const hungry = 'you woke up too late for breakfast';

    if (morningRoutine === 2) {
      return reject(hungry);
    }
    resolve(breakfast);
  })
  .then(resolveOption => console.log(`Nice done, you'll have ${resolveOption} for breakfast`))
  .catch(rejectOption => console.log(`Poor you, ${rejectOption}`)); */

/*   const promise = new Promise((resolve, reject) => {
    const number = Math.floor(Math.random()* 11);
  
    if (number > 10 || number <= 5) {
      return reject(number);
    }
    resolve(number);
  })
  .then(number => `Que sucesso =) nosso número foi ${number}`)
  .then(msg => console.log(msg))
  .catch(number => console.log(`Que fracasso =( Nosso número foi ${number}`)); */

/*  const eatHamburger = async () => {
   //Lembre que aqui temos uma arrow function que por default tem uma função anônima
   //Nesse tipo de função o async vem antes da função anônima, e não antes de eatHamburger
   const result = await (prepareHamburger('Dois hambúrgueres,', 'alface,', 'queijo,', 'molho especial,', 'cebola', 'e picles', 'num pão com gergelim!'))
   console.log(result);
 }
 
 const prepareHamburger = (ingredients1, ingredient2, ingredient3, ingredient4, ingredient5, ingredient6, ingredient7) => {
   return ingredients1 + ' ' + ingredient2 + ' ' + ingredient3 + ' ' + ingredient4 + ' ' + ingredient5 + ' ' + ingredient6 + ' ' + ingredient7;
 }
 
 eatHamburger(); */
/* 
  const fetch = require('node-fetch');

  const getCharacter = async (id) => {
    const result = await fetch(`https://swapi.dev/api/people/${id}`);
    const character = await result.json();
    return character;
  }
  
  getCharacter(4).then(person => console.log(person.name));
  
  */


/* const fetch = require('node-fetch');

 const getPlanet = (id) => {
  return fetch(`https://swapi.dev/api/planets/${id}`)
    .then(result => result.json())
    .then(data => console.log(data.name));
}

getPlanet(Math.floor(Math.random() * 60) + 1); */

/* const fetch = require('node-fetch');

const getPlanet = (id) => {
  return fetch(`https://swapi.dev/api/planets/${id}`)
    .then(result => result.json())
    .then(data => console.log(data.name));
}

getPlanet(48);
 */

const fetch = require('node-fetch');

const getBooks = () => {
  return fetch('https://anapioficeandfire.com/api/books')
    .then(result => result.json())
    .then(books => console.log(books.map((item => item.name))));
}

getBooks();

/* .then(data => data.name) */