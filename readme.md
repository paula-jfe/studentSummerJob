# O que vamos aprender?

Na última aula você viu que **callbacks** são funções passadas como parâmetro para outras funções, mas percebeu que quanto mais complexa for a função, o uso de callbacks se torna inviável. Callbacks eram o unico meio de realizar funções assíncronas durante muito tempo, mas tudo no mundo evolui e é por isso que hoje você entrará no universo maravilhoso das **Promises**. As Promises são amplamente utilizadas para baixar e ler arquivos ou comunicar com banco de dados de uma maneira muito mais compreensível e intuitiva que as callbacks. Na aula hoje aprenderemos a fazer requisições de API *(Application Programming Interface ou em português, Interface de Programação de Aplicativos)* em uma página web, relembraremos como funcionam as funções assíncronas e faremos exercícios para fixar esse conhecimento.
___


## Você será capaz de:

- Utilizar Promises para fazer chamadas assíncronas;
- Fazer requisições às APIs de terceiros;
- Aprender diferentes sintaxes para realizar operações assíncronas. 

*E não se preocupe, você vai aprender! Estamos juntos e juntas e tanto a aula ao vivo quanto os plantões estão aí para confortar qualquer coração aflito!*
___


# Por que isso é importante?

Como mencionado anteriormente, utilizando callbacks para funções assíncronas pode tornar a interpretação do seu código muito complexa e nada intuitiva, além disso, se tiver um erro em alguma função, **todas as outras funções são afetadas**. Um grande desafio nesse tipo de código é entender a sequência que cada linha de código assíncrono é executada de cima para baixo, pois pode se tornar um verdadeiro **"callback hell"**, também conhecido como **"código hadouken"**. Callback hell ou código hadouken são os termos adotados quando temos esse tipo de código complexo, e nada melhor do que uma demonstração para você entender o porquê desse nome.
  
```javascript

streetFighter(function(startNewGame) {
  fightOne(startNewGame, function(winGame)) {
    fightTwo(winGame, function(winAgain)) {
      fightThree(winAgain, function(winAnotherGame)) {
        fightFour(winAnotherGame, function(proPlayer)) {
          fightFive(proPlayer, function(koAgain)) {
            fightSix(koAgain, function(areYouCheating)) {
              fightSeven(areYouCheating, function(beatingTheGame)) {
                fightEight(beatingTheGame, function(gg)) {
                  console.log(gg);
                }
              }
            }
          }
        }
      }
    }
  }
}

```

![Hadouken](https://cdn.ome.lt/y3fdlf74ATazZwr660wZqt5FGiQ=/770x0/smart/uploads/conteudo/fotos/Ryu_Hadouken.gif)

Agora você entende o porquê do *hadouken*, certo? Em algumas linguagens como o Python, que você verá no módulo de back-end, o que acontece na primeira linha deve terminar antes da leitura da segunda linha, mas isso não acontece no JavaScript, e para reduzir essa complexidade e trabalhar as boas práticas de programação, você pode usar uma Promise. As Promises *(Promessas)* são essenciais para o dia a dia de um desenvolvedor, é uma das features, ou seja, funcionalidades mais importantes da linguagem JavaScript, e a arte de **realizar requisições às APIs** *(Application Programming Interface ou em português, Interface de Programação de Aplicativos)* dependerá do bom uso delas.
Hoje você aprenderá a aplicar funções assíncronas de diferentes maneiras, lapidando esse conhecimento na sua formação de desenvolvedor.
___


# Ok, mas o que são exatamente essas APIs que farão a mágica acontecer?

API é o acrônimo, abreviação, de Application Programming Interface (Interface de Programação de Aplicativos), e como podemos interpretar do nome, podem ser aplicações, pequena parte de uma aplicação, uma parte de um software que realiza uma determinada função ou uma determinada aplicação de um servidor, que tem como objetivo comunicar com outras aplicações.
Existem APis síncronas e assíncronas. Um exemplo de API síncrona é a API de console interna do JavaScript cujo método mais comum é o **console.log()**, que você tanto utiliza no *debug* do seu código JavaScript.

```javascript
console.log('Esta é uma API síncrona!');
```

Uma API síncrona *executará a operação antes de iniciar a próxima operação*, mas o nosso interesse aqui é falar sobre as **APIs assíncronas**. Os códigos que você criará com JavaScript muitas vezes farão requisições assíncronas às APIs, e como a palavra assíncrona permite entender, o objeto de resposta não será retornado imediatamente, levará algum tempo para ele ser retornado, ou seja, as **requisições assíncronas ocorrerão no *background***, em segundo plano durante a operação. Imagine por um momento que você decide formatar os dados previstos de uma API assíncrona. Se você fizer a requisição de forma síncrona, você ainda não recebeu esses dados e portanto você não terá dados para formatar, logo, você ficaria *chocado* com o seu código quebrado!

As APIs requisitadas de forma assíncrona, permitirão a busca e modificação de dados em fontes externas, como quando você sabiamente quiser buscar tudo o que estão falando da Trybe no Twitter, através das hashtags *#trybe ou #tryber*, ou quando você quiser compartilhar algum conteúdo sobre a Trybe através do botão *“Compartilhar no Twitter”*. E quando pensamos em toda a Web, podemos dizer que a Web funciona como uma rede gigantesca de servidores e conexões. Como você já viu até aqui, você pode realizar requisição a um servidor remoto quando digita a URL de algum site no seu navegador, e quando seu navegador recebe essa resposta, os elementos do site são renderizados no *DOM*. Para o navegador, o servidor do site é considerado uma API, e portanto, toda vez que você acessa um novo site, você está requisitando uma nova API. **Mas cuidado, uma API não é a mesma coisa que um servidor remoto, uma API é um conjunto de códigos com rotinas e padrões que interpretarão a sua solicitação e traduzirão o que você precisa te enviando os dados solicitados como resposta.**

![API](https://i.postimg.cc/MK3njRzF/request-API3.png)

**Em resumo, quando uma empresa disponibiliza uma API para uso, ela nada mais nada menos está oferecendo à você uma oportunidade de obter o ponto de acesso de parte do banco de dados dela, através da requisição à URL dedicada ao acesso desses dados.**
___


# Promises: Quem são? Onde vivem? O que comem? Muita calma nessa hora pequeno padawan...

As Promises são objetos utilizados para realizar um processamento assíncrono, simples assim. Esse objeto guardará um valor futuro, dependendo da sua resposta, e portanto ela possui três possíveis estados:

- **pending (pendente): Estado onde a Promise acaba de ser iniciada. Neste momento ela ainda não tem uma resposta, portanto não foi realizada nem rejeitada.**
- **fulfilled (realizada): Este é o estado que todos nós amamos. Neste momento houve sucesso na operação, e a Promise retorna a resposta esperada.**
- **rejected (rejeitado):  Neste momento o estado da Promise é rejeitado, ela não retorna a resposta esperada pois a operação não é bem sucedida.**

Entenda realmente como uma **promessa**, nem sempre o que é prometido acontece devido à algum fator qualquer ali no meio do caminho, mas você espera que algo que foi prometido aconteça, certo? É isso mesmo!

As Promises possuem **respostas imutáveis**, ou seja, uma vez realizadas, sendo elas rejeitadas ou bem sucedidas, seus objetos de resposta não mudam até a próxima execução.
Para criar um Promise você utilizará um **Construtor**. *Construtores são como funções que criam objetos semelhantes com a mesma estrutura, propriedades e métodos.* Para esse Construtor você passará uma função chamada de executor, que receberá dois parâmetros, **resolve e reject**, que são métodos estáticos que gerenciam o ciclo de vida de uma Promise.
Na prática, é como se você fizesse um pedido ao executor e ele olhasse para você e respondesse se tudo estivesse certo “ok, vamos te enviar”, ou se algo desse errado, “não, infelizmente está indisponível”.
Ainda está nublado? Vamos olhar o próximo exemplo e ver como a sintaxe do Construtor de uma Promise é simples.

```javascript
const promise = new Promise((resolve, reject) => {
 //A palavra new é um operador e Promise é o Construtor. 
 //A função anônima passada para new Promise é chamada de executor.
 //Os parâmetros resolve e reject são os métodos, ou funções, passados para o executor.
});
```

**Resolve e reject** funcionam de modo similar ao **return** de uma função pois ambos retornam o resultado da Promise, o resolve retornará o objeto caso a Promise seja bem sucedida, e a o reject retornará o resultado caso a Promise não ocorra conforme o esperado, **mas temos uma diferença importante entre esses métodos**. O propósito do return é **encerrar** a execução de uma função após retornar o resultado dela, e isso **não acontece** utilizando o *resolve e o reject*, portanto, se você **não pretende** continuar a função após o resultado da Promise, **você deve** utilizar um return antes do seu Constructor, interrompendo a execução do código após obter a resposta da sua Promise.

Você vai entender na prática a diferença. Rode o código abaixo no VS Code.

```javascript
const winHackathon = (onTrack) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (onTrack === false) {
        reject(console.log("Preciso terminar meus projetos"));
      }
      resolve(console.log("Bora codar!"));
    }, 2000);
  });
}

winHackathon(false);
```

Você percebeu que mesmo a primeira condição sendo satisfeita você recebeu ambas as respostas após 2 segundos? Pois é, a condição do reject é executada mas após esse retorno o código continua. Você pode resolver isso de maneiras muito simples utilizando as soluções abaixo.

```javascript
const winHackathon = (onTrack) => {
  //Com if else
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (onTrack === false) {
        reject(console.log("Preciso terminar meus projetos!"));
      } else {
        resolve(console.log("Bora codar!"));
      }
    }, 2000);
  });
}

winHackathon(false);

//ou

const winHackathon = (onTrack) => {
  //Modificando o momento do retorno dos métodos
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (onTrack === false) {
        return reject(console.log("Preciso terminar meus projetos."));
      }
      return resolve(console.log("Bora codar!"));
    }, 2000);
  });
}

winHackathon(false);
```

*Veja a resposta que você pode ter alterando a chamada da função winHackathon(false) para winHackathon(true).*
Como você percebeu, quando a Promise é bem sucedida, a função **retorna a condição passada para resolve normalmente**, mostrando a mensagem **"Bora codar!"**, porém quando a função é mal sucedida, o *output* do seu terminal **mostra a condição passada para reject**, mensagem **"Preciso terminar meus projetos."** *seguida de mensagens de erros!* Você entenderá como tratar esses erros a seguir, é uma ***promessa***!

![PushButton](https://thumbs.gfycat.com/CanineIdealHydra-size_restricted.gif)
___


# Gestores de fluxo: Vamos entender um pouco mais sobre o uso das Promises.

Pois é, nós fizemos uma ***promessa*** para você que você entenderá como tratar os erros de uma Promise, agora essa promessa foi bem sucedida e você vai conhecer mais alguns métodos que a Promise possui para você trabalhar.

Vamos falar sobre **then() e catch()**. O método **then()** é chamado assim que uma Promise é bem sucedida, e **então *(then())* decidirá o que fazer com os dados obtidos da Promise**. Mas o que podemos fazer quando a Promise é mal sucedida? Nesse caso podemos usar o método **catch()**. A Promise mal sucedida vai retornar um aviso de erro, **esse erro vai ser capturado *(catch())* e tratado da forma que você bem quiser**. Maravilhoso, não?
*Os métodos then() e catch() também retornarão promises*, mas diferentemente do método **Promise** original, eles não executam funções callbacks, portanto não substituem o **Constructor Promise**. Utilizando o método catch() logo após o método then(), caso a Promise seja mal sucedida elá já passará para as especificações do método catch(), trazendo sua mensagem de erro no output do terminal. Vamos ver um exemplo.

```javascript
  const haveBreakfast = new Promise((resolve, reject) => {
    const morningRoutine = Math.floor(Math.random() * 2) + 1;
    const breakfast = 'cheese bread';
    const hungry = 'you woke up too late for breakfast';

    if (morningRoutine === 2) {
      return reject(hungry);
    }
    resolve(breakfast);
  })
  .then(resolveOption => console.log(`Nice done, you'll have ${resolveOption} for breakfast`))
  .catch(rejectOption => console.log(`Poor you, ${rejectOption}`));
```

Conseguiu ver a diferença agora que tratou o erro? Conseguiu perceber que o método catch() está encadeado logo após o método then()? Resumindo, o método then() recebe e trata o retorno do método resolve, e o método catch() recebe e trata o retorno do método reject.

## Chaining Promises com then() e catch().
Se você precisa executar uma sequência de operações assíncronas trabalhando os dados retornados até atingir seu objetivo final, você pode utilizar o encadeamento (Chaining) da Promise com o then(). Mas lembre-se, o catch captura qualquer erro que aconteça durante as operações com o then(), portanto você pode colocá-lo no final do seu código, após o último then(), caso tenha interesse de tratar qualquer erro antecedente à ele da mesma maneira. Vamos ver um exemplo de Promise encadeada com then() e catch().

```javascript
const chainingOperation = new Promise((resolve, reject) => {
  const number = 15;

  if (number < 18) {
    return reject('You are not of legal age yet.');
  }
  return resolve('You can')
})
  .then(resolveOptionOne => (`${resolveOptionOne} drive,`))
  .then(otherOption => (`${otherOption} party`))
  .then(optionThree => console.log(`${optionThree} and drink water...`))
  .catch(rejectOption => console.log(`${rejectOption}`));
```

![Toast](https://media.tenor.com/images/21c7927187145ea4450297ef192ec5e5/tenor.gif)

Rode o código no Node e veja a resposta das promises, depois mude o número da constante number para 18 e veja como o código encadeado funciona. *Não esqueça que o console.log() deve ser feito apenas no último then(), do contrário o retorno das promises anteriores serão **"undefined"***.
___


O JavaScript proporciona três métodos para você trabalhar com códigos assíncronos. Você já estudou ontem sobre callbacks, que executam funções passadas como parâmetro e retornam seu resultado apenas quando o código assíncrono for totalmente executado, estudou hoje as Promises, que permitem o encadeamento de códigos, e agora veremos mais um método **que faz exatamente a mesma coisa**, apenas para *enriquecer ainda mais seu conhecimento sobre funções assíncronas*, o **async await**.

![MindBlowing](https://thumbs.gfycat.com/FickleUnsightlyIndianspinyloach-small.gif)

# Método utilizando async await



# Antes de prosseguirmos nessa viagem maravilhosa rumo à terra das requisições às APIs, PARE!!! Anote essas observações extremamente importantes!

## Opção 1: Para você e, somente você, que quer testar o código no VS Code, através do NODE:

**Você precisará instalar o node-fetch**. Este é um módulo que trará o window.fetch para o Node.js e portanto você conseguirá utilizar o método fetch também no Node. Siga as instruções abaixo para a instalação.

- **Caso você ainda não tenha o package.json no seu diretório da aula de hoje, rode o seguinte comando:**

```javascript
npm init -y
```

- **Agora instale o node-fetch através do seguinte comando:**

```javascript
npm i node-fetch
```

- **E por último mas não menos importante, importe o node-fetch para o arquivo onde você escreverá o código JavaScript, digitando logo na primeira linha:**

```javascript
const fetch = require(‘node-fetch’);
```

*Pronto, tudo certo para você começar a desenvolver. A partir desse momento o céu é o limite!*

## Opção 2: Para você que vai testar o código no NAVEGADOR:

- **Na última linha do seu código você precisará digitar o seguinte:**

```javascript
window.onload = () => asyncFunction();
```

*Isso é extremamente **necessário**, do contrário, é muito provável que nada tenha sido renderizado no seu navegador, visto que sua função assíncrona pode não ter naquele momento qualquer dado retornado. Você escrevendo esse código garante que ao carregar sua página, uma função anônima será executada, e o resultado dessa função anônima é chamar a sua função assíncrona **"asyncFunction()"**, fazendo a renderização somente quando houver uma resposta da sua função assíncrona.*

---

Você pode usar callbacks, Promises, async await, o método assíncrono que preferir, contanto que seu código seja compreensível e intuitivo para qualquer desenvolvedor realizar manutenção. O importante na prática é que independente do método escolhido, você tenha um código simples que lide com os erros. ***#vidadedev #trybe #tryber #vqv***

# Recursos Adicionais

[Quer estudar APIs?]()
[Entenda mais sobre Promises]()
[Funções assíncronas com async e await]()
