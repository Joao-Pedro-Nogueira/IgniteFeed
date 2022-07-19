import styles from './Header.module.css'
import igniteLogo from '../assets/ignite-logo.svg'

export function Header () {
  return (
    <header className={styles.header}>
    <img src={igniteLogo} alt="Símbolo do Ignite Feed" />
    <strong>Ignite Feed</strong>
    </header>
  )
}