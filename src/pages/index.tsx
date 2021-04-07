import Head from 'next/head'
import styles from '../styles/pages/Index.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dashboard Admin</title>
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
      </Head>

      <div className={styles.container}>
        <div className={styles.navigation}>
          <ul>
            <li>
              <span className={styles.icon}>
                <img src="/icons/apple-logo.svg" alt="logo-icon"/>
              </span>
              <span className={styles.title}>
                <h2>Brand Name</h2>
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
              <span className={styles.title}>Customers</span>
            </li>
            <li>
              <span className={styles.icon}>
                <img src="/icons/comment.svg" alt="comment-icon"/>
              </span>
              <span className={styles.title}>Message</span>
            </li>
            <li>
              <span className={styles.icon}>
                <img src="/icons/help.svg" alt="help-icon"/>
              </span>
              <span className={styles.title}>Help</span>
            </li>
            <li>
              <span className={styles.icon}>
                <img src="/icons/settings.svg" alt="settings-icon"/>
              </span>
              <span className={styles.title}>Settings</span>
            </li>
            <li>
              <span className={styles.icon}>
                <img src="/icons/padlock.svg" alt="padlock-icon"/>
              </span>
              <span className={styles.title}>Password</span>
            </li>
            <li>
              <span className={styles.icon}>
                <img src="/icons/logout.svg" alt="logout-icon"/>
              </span>
              <span className={styles.title}>Sing out</span>
            </li>
          </ul>
        </div>

        <div className={styles.headerContainer}>
          <div className={styles.burgerContainer}>
            <img src="/icons/menu.svg" alt="menu-icon" />
          </div>
          <div className={styles.searchContainer}>
            <input type="text" placeholder="Pesquise aqui" />
          </div>
          <div className={styles.accountContainer}>
            <img src="/perfil.jpg" alt="profile"/>
          </div>
        </div>

        <div className={styles.cardsContainer}>
          <div className={styles.card}></div>

          <div className={styles.card}></div>

          <div className={styles.card}></div>

          <div className={styles.card}></div>
        </div>

        <div className={styles.tableContainer}>
          <div className={styles.table}></div>
        </div>
      </div>
    </div>
  )
}
