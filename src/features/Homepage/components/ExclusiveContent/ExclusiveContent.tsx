import React from 'react'
import img from './images/Rectangle1833.jpg'
import { ExclusiveWrapper, SliderWrapper, DescriptionText, TitleDescriptionWrapper, TitleText } from './styles'
import { Slider } from './templates/Slider'

export const ExclusiveContent = () => {
  const input = [
    {
      src: img,
      caption: 'Rectangle',
    },
    {
      src: img,
      caption: 'Rectangle',
    },
    {
      src: img,
      caption: 'Rectangle',
    },
    {
      src: img,
      caption: 'Rectangle',
    },
    {
      src: img,
      caption: 'Rectangle',
    },
  ]

  return (
    <ExclusiveWrapper>
      <TitleDescriptionWrapper>
        <TitleText>EXCLUSIVE GAME CONTENT</TitleText>
        <DescriptionText>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam
        </DescriptionText>
      </TitleDescriptionWrapper>

      <SliderWrapper>
        <Slider input={input} />
      </SliderWrapper>
    </ExclusiveWrapper>
  )
}
