# Gabarito

1 - Como o primeiro exercício, crie uma lógica capaz de acessar os dados dos planetas do universo Star Wars.

### Resolução

```javascript
const fetch = require('node-fetch');

const getPlanet = async (id) => {
  const result = await fetch(`https://swapi.dev/api/planets/${id}`);
  const planetFound = await result.json();
  return planetFound;
}

getPlanet(59).then(planet => console.log(planet.name));
```

2 - Se você usou o método then catch, utilize o método async await para refazer o exercício anterior. Caso tenha feito com async awaitm utilize o método then catch.

### Resolução

```javascript
const fetch = require('node-fetch');

const getPlanet = (id) => {
  return fetch(`https://swapi.dev/api/planets/${id}`)
    .then(result => result.json())
    .then(data => console.log(data.name));
}

getPlanet(48);
```

3 - Faça com que o parâmetro passado para retornar um planeta seja sempre aleatório, tornando o retorno também aleatório.
*Dica de ouro: Acesse a url: https://swapi.dev/api/planets/ e verifique a quantidade de planetas que retornarão para você nesse array de objetos.*

### Resolução

```javascript
const fetch = require('node-fetch');

const getPlanet = (id) => {
  return fetch(`https://swapi.dev/api/planets/${id}`)
    .then(result => result.json())
    .then(data => console.log(data.name));
}

getPlanet(Math.floor(Math.random() * 60) + 1);
```

## Exercício bônus

1 - Se você amou **Game Of Thrones** até sair a última temporada #tmj. Sua missão nesse requisito bônus é acessar a documentação da API localizada nessa url: https://anapioficeandfire.com/Documentation, e estudar como extrair o nome de todos os livros dessa saga dentro de um array.
*Dica de ouro: É muito mais simples do que parece, tente utilizar o .map() para facilitar sua vida de dev.*

### Resolução

```javascript
const fetch = require('node-fetch');

const getBooks = () => {
  return fetch('https://anapioficeandfire.com/api/books')
    .then(result => result.json())
    .then(books => console.log(books.map((item => item.name))));
}

getBooks();
```