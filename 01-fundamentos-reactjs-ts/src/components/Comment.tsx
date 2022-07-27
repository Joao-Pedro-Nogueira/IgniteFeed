//Importação de estilização
import styles from './Comment.module.css'

//Importação de componentes
import { Avatar } from './Avatar'

//Importação de icones
import { Trash, ThumbsUp } from 'phosphor-react'
import { useState } from 'react'

interface propsType {
  content: string,
  onDeleteComment: Function
}

export function CommentList({ content, onDeleteComment }: propsType) {
  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleAddLike() {
    setLikeCount(likeCount + 1)
  }

  return (
    <section className={styles.comments}>
      <Avatar
        hasBorder={false}
        src="https://github.com/Joao-Pedro-Nogueira.png"
      />
      <div className={styles.wrapper}>
        <div className={styles.commentArea}>
          <header>
            <div className={styles.infos}>
              <div className={styles.authorId}>
                <strong>João Pedro Nogueira</strong> <span>(você)</span>
              </div>
              <time
                title="Quinta-feira, 21 de julho de 2022 às 07h52"
                dateTime="21-07-2022 07:52"
              >
                Há cerca de 3h
              </time>
            </div>
            <button
              onClick={handleDeleteComment}
              title="Deletar comentário"
              className={styles.trash}
            >
              <Trash size={24} />
            </button>
          </header>
          <div className={styles.commentContent}>
            <p>{content}</p>
          </div>
        </div>
        <button onClick={handleAddLike} className={styles.applause}>
          <ThumbsUp size={20} weight="bold" />
          <strong>
            Aplaudir • <span>{likeCount}</span>
          </strong>
        </button>
      </div>
    </section>
  )
}
