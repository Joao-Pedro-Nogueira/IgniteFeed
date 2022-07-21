// Importação de estilização
import styles from './Post.module.css'

export function Post () {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="http://github.com/diego3g.png" />
          <div className={styles.authorInfo}>
            <strong>Diego Fernandes</strong>
            <span >Rocketseat CTO</span>
          </div>
        </div>

        <time title='Quinta feira, 20 de julho de 2022 às 21h22' dateTime='20-07-2022 21:22'>Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Ninguém vai entregar mais conteúdo de qualidade em programação do que a Rocketseat </p>em 2022. Podem anotar!

        <p>2021 preparamos muito o terreno para tudo o que vai acontecer em 2022, se preparem.</p>

        <p><a href="#">#Rocketseat</a> <a href='#'>#ReactJS</a></p>
      </div>

      <div className={styles.comment}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder='Escreva seu comentário'></textarea>
      </div>
    </article>
  )
}