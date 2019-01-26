# React Native - Módulo 1

## Índice

- [Desenvolvimento](#desenvolvimento)

  - [Configurações Iniciais](#configurações-iniciais)

  - [Instalação do Projeto](#instalação-do-projeto)

  - [Execução do Projeto](#execução-do-projeto)

  - [Bibliotecas](#bibliotecas)

  - [Outras Ferramentas](#outras-ferramentas)

  - [Erros Comuns](#erros-comuns)

## Desenvolvimento

### Configurações Iniciais

Clique [aqui](https://github.com/osvaldokalvaitir/projects-settings/blob/master/README.md) e siga as Configurações Iniciais.

### Instalação do Projeto

Clique [aqui](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/nodejs.md) e siga a Instalação de Projeto.

### Execução do Projeto

Clique [aqui](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/react-native-cli.md) e siga a Execução de Projeto.

### Bibliotecas

- [babel-eslint](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/babel-eslint.md)

- [eslint](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/eslint.md)

- [ESLint plugin for React Native](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/eslint-plugin-react-native.md)

- [prop-types](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/prop-types.md)

- [react-native-cli](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/react-native-cli.md)

- [reactotron-react-native](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/reactotron-react-native.md)

### Outras Ferramentas

- [Reactotron](https://github.com/osvaldokalvaitir/projects-settings/blob/master/inspectors/reactotron.md)

### Erros Comuns

No desenvolvimento, depois de instalar uma biblioteca que use recursos nativos (ex: a biblioteca de ícones) será necessário executar o comando abaixo e reiniciar a emulação do projeto:

```
react-native link nome-da-biblioteca
```

No desenvolvimento, se ocorrer um erro de módulo não encontrado, será necessário fechar a janela de execução do Metro Bundler, executar o comando abaixo e reiniciar a emulação do projeto:

```
react-native start --reset-cache
```
