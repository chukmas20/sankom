import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {Typography} from '@mui/material';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title> E-Commerce Shop</title>
        <meta name="description" content="Online shopping platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
       <Typography component='h1' variant='h1'>
             SHop Here
       </Typography>
      

      
    </div>
  )
}
