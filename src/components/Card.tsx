import styles from '../styles/components/Card.module.scss'

interface CardProps {
    value: string;
    title: string;
    src: string;
}

export default function Card(props: CardProps) {
    return (
        <div className={styles.card}>
            <div>
                <span className={styles.value}>{ props.value }</span>
                <span className={styles.title}>{ props.title }</span>
            </div>
            <div className={styles.iconCard}>
                <img src={props.src} alt="eye-icon"/>
            </div>
        </div>
    )
}
