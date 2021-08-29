import React from 'react'
import Slide from 'react-reveal/Slide'
import {
  DescriptionText,
  TitleDescriptionWrapper,
  TitleText,
  Wrapper,
  WrapperSecond,
} from './styles'
import { CardSlider } from './templates/CardSlider'

export const Promotion = () => {
  const data = []
  let i = 0
  while (i < 10) {
    data.push({})
    i++
  }

  return (
    <Wrapper>
      <WrapperSecond>
        <Slide bottom styles={{ height: '100%' }}>
          <TitleDescriptionWrapper>
            <TitleText>SPECIAL EVENTS & PROMOTIONAL</TitleText>
            <DescriptionText>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
            </DescriptionText>
          </TitleDescriptionWrapper>
        </Slide>
      </WrapperSecond>
      <div style={{ height: '65%', width: '100%' }}>
        <CardSlider data={data} />
      </div>
    </Wrapper>
  )
}
