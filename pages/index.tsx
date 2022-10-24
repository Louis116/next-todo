import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import ToTaskListButton from '../components/ToTaskListButton'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div style={{
      height:"100%",
      flex:1,
      minHeight:"800px"
    }}>

    <ToTaskListButton/>
    </div>
  )
}

export default Home
