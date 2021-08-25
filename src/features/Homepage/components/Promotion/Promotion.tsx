import React from 'react'
import { Wrapper } from './styles'
import { CardItem } from './templates'

export const Promotion = () => {
  const data: any[] = []
  let i = 0
  while (i < 10) {
    data.push({})
    i++
  }

  return (
    <Wrapper>
      {data.map((item, index) => (
        <CardItem key={`card-${index}`} />
      ))}
    </Wrapper>
  )
}
