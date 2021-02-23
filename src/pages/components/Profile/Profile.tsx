import React from 'react'
import LevelIcon from '../../../assets/icons/level.svg'
import { Container } from './styles'

const Profile: React.FC = () => {
  return (
    <Container>
      <img src="https://github.com/m3k3r1.png" alt="Miguel" />
      <div>
        <strong>Miguel Dias</strong>
        <p>
          <LevelIcon />
          Level 1
        </p>
      </div>
    </Container>
  )
}

export default Profile
