import Head from 'next/head'
import Landing from '../components/Landing'
import styles from '../styles/Landing.module.css'
import { useUser } from '@supabase/supabase-auth-helpers/react'
import { supabaseClient } from '@supabase/supabase-auth-helpers/nextjs'
import { useEffect, useState } from 'react'

import {
  useRouter
} from 'next/router'

export default function LandingPage() {
  const { user, error } = useUser()
  const [data, setData] = useState({})
  const router = useRouter()

  useEffect(() => {
    console.log('User data! ', user)
    async function loadData() {
      const { data } = await supabaseClient.from('accounts').select('*')
      setData(data)
    }
    // Only run query once user is logged in.
    if (user) loadData()
  }, [user])
  if (user)
    router.push('/Home');
  else {
    return (
      <div className={styles.background}>
        <Head>
          <title>Default Landing</title>
          <meta name="description" content="Default Landing" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Landing />
      </div>
    )
  }
}
