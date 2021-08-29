import React from 'react'
import { GameCardWrapper, GameImage, Circle, SocialIcon, CircleWrapper } from './styles'

export const GameCard = () => {
  return (
    <GameCardWrapper>
      <GameImage src="images/Rectangle1833.png" alt="Game Content" />

      <CircleWrapper>
        <Circle href='/images/Rectangle1833.png' target='_blank'>
          <SocialIcon name="download" size="large" />
        </Circle>
      </CircleWrapper>
    </GameCardWrapper>
  )
}
