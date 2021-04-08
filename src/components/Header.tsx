import { useContext } from 'react'
import { NavigatorContext } from '../contexts/NavigatorContext'

import styles from '../styles/components/Header.module.scss'

export default function Header() {
    const { handleNavigator } = useContext(NavigatorContext)

    return (
        <div className={styles.headerContainer}>
            <div className={styles.burgerContainer}>
                <img src="/icons/menu.svg" alt="menu-icon" onClick={() => handleNavigator()} />
            </div>
            <div className={styles.searchContainer}>
                <input type="text" placeholder="Pesquise aqui" />
            </div>
            <div className={styles.accountContainer}>
                <img src="/perfil.jpg" alt="profile"/>
            </div>
        </div>
    )
}
