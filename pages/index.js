import Head from 'next/head'
import Landing from '../components/Landing'
import styles from '../styles/Landing.module.css'
import Image from 'next/image'
import Particles from 'react-tsparticles'
import { loadSnowPreset } from "tsparticles-preset-snow";

export default function Home() {
  return (
    <div className={styles.background}>
      <Head>
        <title>Default Landing.</title>
        <meta name="description" content="Default Landing" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing />
    </div>
  )
}
