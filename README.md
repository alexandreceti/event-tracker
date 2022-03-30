# 📚 Aplicação Event Tracker

Aplicação [React](https://pt-br.reactjs.org/) criada na realização do curso [Alura](http://www.alura.com.br):

## [REACT: Gerenciando estato com recoil](https://www.alura.com.br/curso-online-react-gerenciando-estado-recoil)

- Projete uma boa solução de gestão de estado com Recoil
- Entenda todas as vantagens do Recoil
- Extraia a comunicação com o recoil em hooks
- Implemente os principais hooks do Recoil
- Compare diferentes soluções de mercado para gestão de estado

Esta curso tem como objeivo de estudo o conceito de estado global utilizando a biblioteca [recoil](https://recoiljs.org/).

## Aprendizado

Neste curso pode intender conseitos de gerenciamento de estado na aplicação, e tecnicas para melhor organizar os compontes, e lidar com com o problemas de prop drilling "vazamento de props".

## Tela

<p align="center">
    <a href="https://pt.wikipedia.org/wiki/Linux">
      <img src="img/event-tracker.png" alt="cs" width="100%" height="100%"/>
    </a>
<p>

## Executando a aplicação

Aplicação criada com o [Create React App](https://github.com/facebook/create-react-app), sendo assim para executar, basta clonar o projeto.

```shell
git clone https://github.com/alexandreceti/event-tracker.git
```

Acessar a pasta do projeto e instalar dependencias do projeto:

```shell
cd event-tracker
npm install
```

Iniciar a aplicação:

```shell
npm start
```

E em outra tela de terminal, acessar a pasta do projeto, e iniciar a api com o [json-server](https://github.com/typicode/json-server).

```shell
npx json-server db.json --watch -p 8080
```
