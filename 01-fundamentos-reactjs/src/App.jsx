// Importação de componentes
import { Post } from './Post'
import {Header} from './components/Header'
import {Sidebar} from './components/Sidebar'

// Importação de estilização
import styles from './App.module.css'

// Importação de estilização global
import './global.css'

export function App() {
  return (
    <>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Pedro Nogueira" 
            content="Salve salve rapaziada do Ignite. Começando agora os estudos de React.js. Quero aprender a utilizar TypeScript!"
          />
          <Post
            author="Mayk Brito"
            content="Galera, vocês precisam conhecer o Explorer!"
          />
        </main>
      </div>

    </>
  )
}