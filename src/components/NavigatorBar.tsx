import { useContext } from 'react'
import { NavigatorContext } from '../contexts/NavigatorContext'

import styles from '../styles/components/NavigatorBar.module.scss'

export default function NavigatorBar() {
  const { widthNavigator } = useContext(NavigatorContext)

  return (
      <div className={styles.navigation} style={{ width: widthNavigator }}>
        <ul>
          <li>
            <span className={styles.icon}>
              <img src="/icons/apple-logo.svg" alt="logo-icon"/>
            </span>
            <span className={styles.title}>
              <h2>Brand_Name</h2>
            </span>
          </li>
          <li>
            <span className={styles.icon}>
              <img src="/icons/home.svg" alt="home-icon"/>
            </span>
            <span className={styles.title}>Dashboard</span>
          </li>
          <li>
            <span className={styles.icon}>
              <img src="/icons/users.svg" alt="users-icon"/>
            </span>
            <span className={styles.title}>Clientes</span>
          </li>
          <li>
            <span className={styles.icon}>
              <img src="/icons/comment.svg" alt="comment-icon"/>
            </span>
            <span className={styles.title}>Mensagens</span>
          </li>
          <li>
            <span className={styles.icon}>
              <img src="/icons/settings.svg" alt="settings-icon"/>
            </span>
            <span className={styles.title}>Configurações</span>
          </li>
          <li>
            <span className={styles.icon}>
              <img src="/icons/help.svg" alt="help-icon"/>
            </span>
            <span className={styles.title}>Ajuda</span>
          </li>
          <li>
            <span className={styles.icon}>
              <img src="/icons/logout.svg" alt="logout-icon"/>
            </span>
            <span className={styles.title}>Sair</span>
          </li>
        </ul>
      </div>
  )
}
