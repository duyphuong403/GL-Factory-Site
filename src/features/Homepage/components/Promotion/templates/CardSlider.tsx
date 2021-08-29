import React, { useEffect, useRef, useState } from 'react'
import Slider from 'react-slick'

import useWindowDimensions from '../../../../../utils/useWindowsDemension'
import { SliderWrapper } from '../styles'
import { CardItem } from './CardItem'
import { CircleProgressComponent } from './CircleProgress'


interface IProps {
  data: Array<Object>
}

export const CardSlider = (props: IProps) => {
  const { data } = props
  const { width } = useWindowDimensions()
  const [slidesToShow, setSlidesToShow] = useState<number>(3)
  const [centerMode, setCenterMode] = useState<boolean>(true)
  const [progress, setProgress] = useState<number>(10)
  const sliderRef = useRef<any>()

  const settings = {
    className: 'center',
    centerMode: centerMode,
    centerPadding: '60px',
    dots: true,
    infinite: true,
    autoplay: false,
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    touchMove: false,
    cssEase: 'linear',
    customPaging: (i: number) => <CircleProgressComponent imageNumber={i} value={progress} />,
  }

  useEffect(() => {
    if (width < 1380) setCenterMode(false)
    else setCenterMode(true)

    switch (true) {
      case width >= 1280:
        setSlidesToShow(3)
        break
      case width < 1280:
        setSlidesToShow(1)
        break
      default:
        setSlidesToShow(1)
        break
    }
  }, [width])

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          sliderRef.current.slickNext()
        }

        return prevProgress >= 100 ? 10 : prevProgress + 10
      })
    }, 300)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <SliderWrapper>
      <Slider ref={sliderRef} {...settings}>
        {data.length && data.map(() => <CardItem />)}
      </Slider>
    </SliderWrapper>
  )
}
