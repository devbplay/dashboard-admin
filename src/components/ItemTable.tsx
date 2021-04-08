import styles from '../styles/components/ItemTable.module.scss'

interface ItemProps {
    name: string;
    price: string;
    payment: string;
    status: string;
    color: string;
}

export default function Itemtable(props: ItemProps) {
    return (
        <div className={styles.headerTableContentContainer}>
            <div className={styles.titleTableNameContainer}>
                <span className={styles.spanHeaderTable}>{ props.name }</span>
            </div>
            <div className={styles.titleTablePriceContainer}>
                <span className={styles.spanHeaderTable}>{ props.price }</span>
            </div>
            <div className={styles.titleTablePaymentContainer}>
                <span className={styles.spanHeaderTable}>{ props.payment }</span>
            </div>
            <div className={styles.titleTableStatusContainer}>
                <span className={styles.spanStatusTable} style={{ backgroundColor: props.color }}>{ props.status }</span>
            </div>
        </div>
    )
} 
