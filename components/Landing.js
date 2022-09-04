import styles from '../styles/Landing.module.css'
import React from "react";
import Particles from 'react-tsparticles'
import { loadSnowPreset } from "tsparticles-preset-snow";
import Modal from './Modal';
import {
  useRouter
} from 'next/router'

function play() {
  var audio = document.getElementById('a1');
  audio.play();
}

function home(router){
  router.push('/Home');
}

function Landing() {
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
            openPage={() => {
              home(router)
              }}
          >
            <h3>The App isnt ready but Feel free to continue</h3>
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
