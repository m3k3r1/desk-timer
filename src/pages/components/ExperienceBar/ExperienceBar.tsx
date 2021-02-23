import React from 'react'

import { Header, ProgressionBar } from './styles'

const ExperienceBar: React.FC = () => {
  return (
    <Header>
      <span> 0 xp </span>
      <div>
        <ProgressionBar progression={60}>
          <span> 300 xp</span>
        </ProgressionBar>
      </div>
      <span> 600 xp </span>
    </Header>
  )
}

export default ExperienceBar
