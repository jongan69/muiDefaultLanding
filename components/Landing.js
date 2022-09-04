import styles from '../styles/Landing.module.css'
import React from "react";
import Particles from 'react-tsparticles'
import { loadSnowPreset } from "tsparticles-preset-snow";

import { useUser } from '@supabase/supabase-auth-helpers/react'
import { supabaseClient } from '@supabase/supabase-auth-helpers/nextjs'
import { useEffect, useState } from 'react'
import { Auth } from '@supabase/ui';

import Modal from './Modal';

import {
  useRouter
} from 'next/router'


function play() {
  var audio = document.getElementById('a1');
  audio.play();
}

function home(router) {
  router.push('/Home');
}

function Landing() {
  const { user, error } = useUser()
  const [data, setData] = useState({})

  useEffect(() => {
    console.log('User data! ', user)
    async function loadData() {
      const { data } = await supabaseClient.from('accounts').select('*')
      setData(data)
    }
    // Only run query once user is logged in.
    if (user) loadData()
  }, [user])

  React.useEffect(() => {
    console.log('User data! ', user)
    async function loadData() {
      const { data } = await supabaseClient.from('test').select('*')
      setData(data)
    }
    // Only run query once user is logged in.
    if (user) loadData()
  }, [user])

  const [showModal, setShowModal] = React.useState(false);
  const router = useRouter()

  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome
        </h1>
        <p className={styles.description}>
          Congrats human, you made it to Outer Space.{' '}
          <br></br>

          <Modal
            shown={showModal}
            close={() => {
              setShowModal(false);
            }}
            // openPage={() => {
            //   home(router)
            // }}
          >
            {user ?
              <h3>Welcome back to the party</h3>
              : <Auth
                // view="update_password"
                supabaseClient={supabaseClient}
                // providers={['google', 'github', 'apple']}
                socialLayout="horizontal"
                socialButtonSize="large"
              />}
          </Modal>


          <button className={styles.code} onClick={() => {
            setShowModal(true)
            play()
          }}>Enter</button>
          <audio id='a1'>
            <source src="/cantina.mp3" type='audio/mpeg' />
            Your browser does not support the audio element.
          </audio>
        </p>
      </main>
      <Particles id="tsparticles" options={{
        preset: "snow",
        fullScreen: {
          zIndex: -1
        }
      }} init={async (engine) => await loadSnowPreset(engine)} />
    </div>
  )
}

export default Landing;
