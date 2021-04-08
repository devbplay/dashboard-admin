import styles from '../styles/components/Table.module.scss'
import Itemtable from './ItemTable'

export default function Table() {
    return (
        <div className={styles.table}>
            <div className={styles.titleTableContainer}>
                <div className={styles.titleTable}>
                    <span>Recent Orders</span>
                </div>
                <div className={styles.buttonFilters}>
                    <button>Filtros</button>
                </div>
            </div>
            <div className={styles.headerTableContentContainer}>
                <div className={styles.titleTableNameContainer}>
                    <span className={styles.spanHeaderTable}>Name</span>
                </div>
                <div className={styles.titleTablePriceContainer}>
                    <span className={styles.spanHeaderTable}>Price</span>
                </div>
                <div className={styles.titleTablePaymentContainer}>
                    <span className={styles.spanHeaderTable}>Payment</span>
                </div>
                <div className={styles.titleTableStatusContainer}>
                    <span className={styles.spanHeaderTable}>Status</span>
                </div>
            </div>

            <Itemtable name="Matheus Antunes" price="R$ 70,00" payment="Credit Card" status="Pago" color="#21d366" />

            <Itemtable name="Marcela Rezende" price="R$ 40,00" payment="Money" status="Pendente" color="#FFDD00" />

            <Itemtable name="Lucas Heckler" price="R$ 50,00" payment="Debit Card" status="Em Progresso" color="#0074FE" />

            <Itemtable name="Lucas Barcelos" price="R$ 190,00" payment="Credit Card" status="Devolvido" color="#F85151" />

            <Itemtable name="Lucas Barcelos" price="R$ 190,00" payment="Credit Card" status="Pago" color="#21d366" />

            <Itemtable name="Lucas Barcelos" price="R$ 190,00" payment="Credit Card" status="Devolvido" color="#F85151" />

            <Itemtable name="Lucas Barcelos" price="R$ 190,00" payment="Credit Card" status="Pendente" color="#FFDD00" />

            <Itemtable name="Lucas Barcelos" price="R$ 190,00" payment="Credit Card" status="Em Progresso" color="#0074FE" />

            <Itemtable name="Lucas Barcelos" price="R$ 190,00" payment="Credit Card" status="Pago" color="#21d366" />

            <Itemtable name="Lucas Barcelos" price="R$ 190,00" payment="Credit Card" status="Devolvido" color="#F85151" />

            <Itemtable name="Lucas Barcelos" price="R$ 190,00" payment="Credit Card" status="Em Progresso" color="#0074FE" />
        </div>
    )
}
