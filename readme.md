# O que vamos aprender?

Na última aula você viu que **callbacks** são funções passadas como parâmetro para outras funções, mas percebeu que quanto mais complexa for a função, o uso de callbacks se torna inviável. Callbacks eram o unico meio de realizar funções assíncronas durante muito tempo, mas tudo no mundo evolui e é por isso que hoje você entrará no universo maravilhoso das **Promises**. As Promises são amplamente utilizadas para baixar e ler arquivos ou comunicar com banco de dados de uma maneira muito mais compreensível e intuitiva que as callbacks. Na aula hoje aprenderemos a fazer requisições de API *(Application Programming Interface ou em português, Interface de Programação de Aplicativos)* em uma página web, relembraremos como funcionam as funções assíncronas e faremos exercícios para fixar esse conhecimento.
___


## Você será capaz de:

- Utilizar Promises para fazer chamadas assíncronas;
- Fazer requisições às APIs de terceiros;
- Aprender diferentes sintaxes para realizar operações assíncronas. 

*E não se preocupe, você vai aprender! Estamos juntos e juntas e tanto a aula ao vivo quanto os plantões estão aí para confortar qualquer coração!*
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
Existem APis síncronas e assíncronas. Um exemplo de API síncrona é a API de console, cujo método mais comum é o **console.log()**, que você tanto utiliza no *debug* do seu código JavaScript.

```javascript
console.log('Esta é uma API síncrona!');
```

Uma API síncrona *executará a operação antes de iniciar a próxima operação*, mas o nosso interesse aqui é falar sobre as **APIs assíncronas**. Os códigos que você criará com JavaScript muitas vezes farão requisições assíncronas às APIs, e como a palavra assíncrona permite entender, o objeto de resposta não será retornado imediatamente, levará algum tempo para ele ser retornado, ou seja, as **requisições assíncronas ocorrerão no *background***, em segundo plano durante a operação. Imagine por um momento que você decide formatar os dados previstos de uma API assíncrona. Se você fizer a requisição de forma síncrona, você ainda não recebeu esses dados e portanto você não terá dados para formatar, logo, você ficaria *chocado* com o seu código quebrado!

As APIs requisitadas de forma assíncrona, permitirão a busca e modificação de dados em fontes externas, como quando você sabiamente quiser buscar tudo o que estão falando da Trybe no Twitter, através das hashtags #trybe ou #tryber, ou quando você quiser compartilhar algum conteúdo sobre a Trybe através do botão “Compartilhar no Twitter”. E quando pensamos em toda a Web, podemos dizer que a Web funciona como uma rede gigantesca de servidores e conexões. Como você já viu até aqui, você pode realizar requisição a um servidor remoto quando digita a URL de algum site no seu navegador, e quando seu navegador recebe essa resposta, os elementos do site são renderizados no *DOM*. Para o navegador, o servidor do site é considerado uma API, e portanto, toda vez que você acessa um novo site, você está requisitando uma nova API. **Mas cuidado, uma API não é a mesma coisa que um servidor remoto, uma API é um conjunto de códigos com rotinas e padrões que interpretarão a sua solicitação e traduzirão o que você precisa te enviando os dados solicitados como resposta.**

![API](https://i.postimg.cc/MK3njRzF/request-API3.png)

Em resumo, quando uma empresa disponibiliza uma API para uso, ela nada mais nada menos está oferecendo à você uma oportunidade de obter o ponto de acesso de parte do banco de dados dela, através da requisição à URL dedicada ao acesso desses dados.
___


# Promises: Quem são? Onde vivem? O que comem? Muita calma nessa hora pequeno padawan...

As Promises são objetos utilizados para realizar um processamento assíncrono, simples assim. Esse objeto guardará um valor futuro, dependendo da sua resposta, e portanto ela possui três possíveis estados:

- pending (pendente): Estado onde a Promise acaba de ser iniciada. Neste momento ela ainda não tem uma resposta, portanto não foi realizada nem rejeitada.
- fulfilled (realizada): Este é o estado que todos nós amamos. Neste momento houve sucesso na operação, e a Promise retorna a resposta esperada.
- rejected (rejeitado):  Neste momento o estado da Promise é rejeitado, ela não retorna a resposta esperada pois a operação não é bem sucedida.

Entenda realmente como uma **promessa**, você espera que algo que foi prometido aconteça, certo? É isso mesmo!


objetos que os programadores podem usar para criar softwares ou interagir com sistemas externos. Ela fornece aos desenvolvedores comandos para executar operações comuns para que eles não tenham que escrever um código do zero


As APIs permitem que o usuário final utilize um aplicativo, software ou até uma simples planilha, consultando, alterando e armazenando dados de diversos sistemas, sem que o usuário precise acessá-los diretamente.
O intuito de uma API é trocar dados entre sistemas diferentes, na maior parte das vez essas trocas de dados tem como objetivo automatizar processos manuais e/ou permitir a criação de novas funcionalidades.
16h44

