# O que é React.js

É uma biblioteca (não é framework) JavaScript feita para construção de interfaces altamente interativas.

Interface é tudo aquilo que o usuário pode interagir. Pode ser web, aplicativo, mobile, RV, SmarTv.

## Rendering Patterns

SPA => Single Page Application.
(AngularJS, Vue, ReactJS, Svelte): O servidor envia os dados para o Browser, e o próprio PC renderiza a aplicação.

SSR => Server Side Rendering: O servidor processa o HTML e CSS da página e envia tudo pronto para o browser

## Bundles e Compilers

Nem sempre os browsers vão conseguir rodar a mesma versão de JS que o dev utilizou no código.

### Compilers (Babel)

Ferramenta que converte o código de um formato para outro.

### Bundlers (Webpack, ViteJS, snowpack)

Ferramenta que pega os vários arquivos que compõe a aplicação e transforma em um único arquivo (bundle) que será lido pelo browser.

## ViteJS:

1. Não precisa de bundling.
2. Faz o processo de compiling de forma automática, ou seja, não precisa do babel.

# Criando um projeto ReactJS

1. Ter a versão LTS do NodeJS instalada. Verificar com "node -v" e "npm -v" no terminal.
2. Executar o comando:

```bash
npm create vite@latest
```

e seguir conforme o programa solicitar.

Depois, apagar todos os arquivos de estilização e limpar os arquivos de componentes.

# Componentes ReactJS

É, basicamente, uma forma de "desacoplar" um pedaço da aplicação para que se torne repetitivo ou mais fácil de dar manutenção, pois é um pedaço pequeno e não a aplicação inteira.

Ou seja, é uma parte da aplicação que pode ser repetida várias vezes de forma dinâmica (com informações diferentes).

## Como identificar um componente?

1. É uma função que retorna um HTML. Portanto é escrito em JS/TS + HTML
2. Possui extensão .jsx ou .tsx //TSX = TypeScript + XML (HTML)
3. Quase sempre os componentes estão sozinhos no arquivo (nunca 2 componente/arquivo)

## Default Exports vs Named Exports

## Default Exports

Vantagens: É possível alterar o nome do componente na importação

```jsx
// Componente:

function Post() {
  // Nome = 'Post'
  return <h1>Ignite ReactJS</h1>
}

export default Post
```

```jsx
// Importação

import PostComponent from './Post' // Nome = 'PostComponent'

function App() {
  return (
    <>
      <PostComponent />
      <PostComponent />
      <PostComponent />
      <PostComponent />
      <PostComponent />
    </>
  )
}

export default App
```

Porém, isso pode ser visto como uma desvantagem, pois facilita erros por desatenção.

## Named Exports

```jsx
// Componente:
export function Post() {
  return <h1>Ignite ReactJS</h1>
}
```

```jsx
// Importação:
import { Post } from './Post'

export function App() {
  return (
    <>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </>
  )
}
```

# Propriedades no ReactJS

São informações que podemos inserir nos componentes. Funcionam de forma semelhante aos atributos do HTML.

```jsx
// Aplicação:
import { Post } from './Post'

export function App() {
  return (
    <>
      <Post
        author="Pedro Nogueira"
        content="Salve salve rapaziada do Ignite. Começando agora os estudos de React.js. Quero aprender a utilizar TypeScript!"
      />
      <Post
        author="Mayk Brito"
        content="Galera, vocês precisam conhecer o Explorer!"
      />
    </>
  )
}
```

```jsx
// Componente
export function Post(props) {
  return (
    <>
      <h3>Ignite ReactJS</h3>
      <strong>{props.author}</strong>
      <p>{props.content}</p>
    </>
  )
}
```

# Quando criar um componente em ReactJS?

1. Quando algo se repete muito em tela.
2. Quando é possível tirar algo de um componente maior sem que este componente maior pare de funcionar.

# Conceito de Desestruturação
