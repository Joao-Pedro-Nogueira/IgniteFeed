import { Post } from './Post'
import {Header} from './components/Header'
import './global.css'

export function App() {
  return (
    <>
      <Header/>

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