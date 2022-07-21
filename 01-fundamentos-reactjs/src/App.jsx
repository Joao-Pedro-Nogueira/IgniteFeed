// Importação de componentes
import { Post } from './components/Post'
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
          <Post />
          <Post />
        </main>
      </div>

    </>
  )
}