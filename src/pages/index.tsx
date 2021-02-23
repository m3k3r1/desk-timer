import Head from 'next/head'
import React from 'react'
import { Container, Section } from '../styles/pages'
import CompletedChallenges from './components/CompletedChallenges/CompletedChallenges'
import Countdown from './components/Countdown/Countdown'
import ExperienceBar from './components/ExperienceBar/ExperienceBar'
import Profile from './components/Profile/Profile'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Dashboard | DeskTime</title>
      </Head>
      <ExperienceBar />
      <Section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div />
      </Section>
    </Container>
  )
}

export default Home
