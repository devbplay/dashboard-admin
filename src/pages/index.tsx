import Head from 'next/head'

import Card from '../components/Card'
import Header from '../components/Header'
import NavigatorBar from '../components/NavigatorBar'
import Table from '../components/Table'

import { NavigatorProvider } from '../contexts/NavigatorContext'

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
        <NavigatorProvider>
          <NavigatorBar />

          <div className={styles.containerContent}>
            <Header />

            <div className={styles.cardsContainer}>
              <Card value="1,042" title="Daily Views" src="/icons/eye.svg" />

              <Card value="80" title="Sales" src="/icons/cart.svg" />

              <Card value="208" title="Comments" src="/icons/message.svg" />

              <Card value="$6,042" title="Earning" src="/icons/money.svg" />
            </div>

            <div className={styles.tableContainer}>
              <Table />
            </div>
          </div>
        </NavigatorProvider>
      </div>
    </div>
  )
}
