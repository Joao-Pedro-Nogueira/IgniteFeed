//Importação do React
import React from "react";

//Importação de ícones do phosphor icons
import { PencilSimpleLine } from 'phosphor-react'

//Importação de estilização
import styles from './Sidebar.module.css'
//Importação de estilização global
import '../global.css'

export function Sidebar () {
  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover}
        src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=900" 
      />
      <div className={styles.profile}>
        <img 
        className={styles.avatar}
        src="https://github.com/Joao-Pedro-Nogueira.png" />
        <strong>João Pedro Nogueira</strong>
        <span>Full-stack Developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilSimpleLine size={20} />
          Editar seu perfil</a>
      </footer>
    </aside>
  )
}