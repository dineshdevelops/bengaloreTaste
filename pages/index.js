import Head from 'next/head'
import BreakFastList from '../components/BreakFastList'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>AK Restaurant</title>
        <meta name="description" content="AK Restaurant next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <BreakFastList />
    </div>
  )
}
