// Importação de estilização
import styles from './Post.module.css'

//Importação de componentes
import { CommentList } from './Comment'
import { Avatar } from './Avatar'

//Importação de funções de bibliotecas
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react'

export function Post(props) {
  const [comments, setComments] = useState(['Altíssimas expectativas!!'])

  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormatted = format(
    props.date,
    "dd 'de' LLLL 'às' HH'h'mm",
    {
      locale: ptBR
    }
  )

  const publishedDateRelativeToNow = formatDistanceToNow(props.date, {
    locale: ptBR,
    addSuffix: true
  })

  function handleCreateNewComment() {
    event.preventDefault()

    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function handleNewCommentChange() {
    setNewCommentText(event.target.value)
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={props.avatar} />
          <div className={styles.authorInfo}>
            <strong>{props.author}</strong>
            <span>{props.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={props.date.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {props.content.map(line => {
          if (line.type === 'paragraph') {
            return <p>{line.content}</p>
          }
          if (line.type === 'link') {
            return (
              <p>
                <a href="#">{line.content}</a>
              </p>
            )
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name="comment"
          placeholder="Escreva um comentário"
          value={newCommentText}
          onChange={handleNewCommentChange}
        ></textarea>

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return <CommentList content={comment} />
        })}
      </div>
    </article>
  )
}
