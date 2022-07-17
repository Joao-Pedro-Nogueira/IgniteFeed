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

# Criando um projeto ReactJS (IMPORTANTE!)
1. Ter a versão LTS do NodeJS instalada. Verificar com "node -v" e "npm -v" no terminal.
2. Executar o comando:
````bash
npm create vite@latest
````
e seguir conforme o programa solicitar.