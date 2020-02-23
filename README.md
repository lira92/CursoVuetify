# Sobre

Aplicação para controlar objetivos financeiros utilizando [Vue.js](https://vuejs.org/), [Vuetify](https://vuetifyjs.com/en/) e o [firestore](https://firebase.google.com/docs/firestore) do firebase

## Screenshots

![Home](/screenshots/home.png?raw=true "Home")

![Adicionar ou editar fundo](/screenshots/form.PNG?raw=true "Adicionar ou editar fundo")

## Executando o projeto

### Instalando os pacotes
```
npm install
```
### Configurando firebase

Abre o arquivo src/main.js e adicione os dados da sua aplicação criada no [console](https://console.firebase.google.com/) do firebase. O objeto que precisa ser alterado é o seguinte:

```js
var firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};
```

### Compilando a aplicação e executando um servidor de desenvolvimento
```
npm run serve
```
