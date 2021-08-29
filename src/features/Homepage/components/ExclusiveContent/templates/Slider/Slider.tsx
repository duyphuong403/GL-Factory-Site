import React, { useState } from 'react'
import { Icon } from 'semantic-ui-react'
import { GameCard } from '../CardComponent'
import {
  Container, NextSpan,
  NumberText,
  NumberTextWrapper,
  PrevSpan,
  Slide,
  SlideShow
} from './styles'

interface IProps {
  input: Array<IInput>
}

interface IInput {
  src: string
  caption: string
}

export const Slider = (props: IProps) => {
  const { input } = props
  const [slideIndex, setSlideIndex] = useState<number>(0)

  const getNewSlideIndex = (step: number) => {
    const numberSlide = input.length

    let newSlideIndex = slideIndex + step

    if (newSlideIndex >= numberSlide) newSlideIndex = 0
    if (newSlideIndex < 0) newSlideIndex = numberSlide - 1

    return newSlideIndex
  }

  return (
    <SlideShow>
      <Container className="container">
        {input.length &&
          input.map((image, index) => {
            return (
              <Slide
                key={`slide-${index}`}
                className={`slide ${slideIndex === index ? 'active' : ''}`}
              >
                <GameCard />
              </Slide>
            )
          })}
      </Container>

      <NumberTextWrapper>
        <PrevSpan className="prev" onClick={() => setSlideIndex(getNewSlideIndex(-1))}>
          <Icon name="arrow left" size="big" />
        </PrevSpan>
        <NumberText>{`${slideIndex + 1} / ${input.length}`}</NumberText>
        <NextSpan className="next" onClick={() => setSlideIndex(getNewSlideIndex(1))}>
          <Icon name="arrow right" size="big" />
        </NextSpan>
      </NumberTextWrapper>
    </SlideShow>
  )
}
