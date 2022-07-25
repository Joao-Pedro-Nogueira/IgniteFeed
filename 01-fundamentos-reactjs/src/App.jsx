// Importação de componentes
import { Post } from './components/Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

// Importação de estilização
import styles from './App.module.css'

// Importação de estilização global
import './global.css'

// author: {avatar_url: String, name: String, role: String}
// publishedAt: date()
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO at Rocketseat'
    },
    content: [
      {
        type: 'paragraph',
        content:
          'Ninguém vai entregar mais conteúdo de qualidade em programação do que a Rocketseat </p>em 2022. Podem anotar!'
      },
      {
        type: 'paragraph',
        content:
          '2021 preparamos muito o terreno para tudo o que vai acontecer em 2022, se preparem.'
      },
      { type: 'link', content: '#Rocketseat' }
    ],
    publishedAt: new Date('2022-07-24 16:45:32')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/Joao-Pedro-Nogueira.png',
      name: 'João Pedro Nogueira',
      role: 'Fullstack Developer'
    },
    content: [
      {
        type: 'paragraph',
        content:
          'O interessante de desenvolver códigos é que a limitação é apenas o seu conhecimento.'
      },
      {
        type: 'paragraph',
        content:
          'Sem burocracia, sem taxações, baixo custo de produção. Simplesmente a internet, seu cérebro e seu computador'
      },
      { type: 'link', content: '#Coding' }
    ],
    publishedAt: new Date('2022-07-23 15:39:56')
  }
]

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                avatar={post.author.avatarUrl}
                author={post.author.name}
                role={post.author.role}
                content={post.content}
                date={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}
