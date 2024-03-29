// Importação de estilização
import styles from './Post.module.css'

//Importação de componentes
import { CommentList } from './Comment'
import { Avatar } from './Avatar'

//Importação de funções de bibliotecas
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { FormEvent, ChangeEvent, useState, InvalidEvent } from 'react'

interface propsType {
  author: string,
  key: number,
  avatar: string,
  role: string,
  content: [
    {type: 'paragraph' | 'link',
    content: string}
  ]
  date: Date
}

export function Post(props:propsType) {
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

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault()

    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Este campo é obrigatório')
  }

  function deleteComment(commentToDelete: string) {
    console.log(`Deletar comentário ${commentToDelete}`)

    const commentsWithoutDeletedOnde = comments.filter(comment => {
      return comment !== commentToDelete
    })

    setComments(commentsWithoutDeletedOnde)
  }

  const isNewCommentEmpty = newCommentText.length === 0

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
            return <p key={line.content}>{line.content}</p>
          }
          if (line.type === 'link') {
            return (
              <p key={line.content}>
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
          onInvalid={handleNewCommentInvalid}
          required
        ></textarea>

        <footer>
          <button disabled={isNewCommentEmpty} type="submit">
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
            <CommentList
              key={comment}
              onDeleteComment={deleteComment}
              content={comment}
            />
          )
        })}
      </div>
    </article>
  )
}
