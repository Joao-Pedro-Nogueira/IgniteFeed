// Importação de estilização
import styles from './Post.module.css'

//Importação de icones
import {Trash, ThumbsUp} from 'phosphor-react'

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

        <time title='Quinta feira, 20 de julho de 2022 às 21h22' dateTime='20-07-2022 21:22'>Publicado há 13h</time>
      </header>

      <div className={styles.content}>
        <p>Ninguém vai entregar mais conteúdo de qualidade em programação do que a Rocketseat </p>em 2022. Podem anotar!

        <p>2021 preparamos muito o terreno para tudo o que vai acontecer em 2022, se preparem.</p>

        <p><a href="#">#Rocketseat</a> <a href='#'>#ReactJS</a></p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder='Escreva um comentário'></textarea>

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <section className={styles.comments}>
        <img src="https://github.com/Joao-Pedro-Nogueira.png"/>
        <div className={styles.wrapper}>
          <div className={styles.commentArea}>
            <header>
              <div className={styles.infos}>
                <div className={styles.authorId}>
                  <strong>João Pedro Nogueira</strong>{' '}
                  <span>(você)</span>
                </div>
                <time title='Quinta-feira, 21 de julho de 2022 às 07h52' dateTime='21-07-2022 07:52'>Cerca de 3h</time>
              </div>
              <button className={styles.trash}>
                <Trash size={24}/>
              </button>
            </header>
            <div className={styles.commentContent}>
              <p>Altíssimas expectativas!! 👏👏</p>
            </div>
          </div>
          {/* <div className={styles.applause}>
            <ThumbsUp size={20} weight="bold"/>
            <strong>Aplaudir • 33</strong>
          </div> */}
          <button className={styles.applause}>
            <ThumbsUp size={20} weight="bold"/>
            <strong>Aplaudir • 33</strong>
          </button>
        </div>
      </section>
    </article>
  )
}