import styled from 'styled-components/macro'
import { Colors } from '../../../../utils'

export const ExclusiveWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 5%;
  height: 100vh;
  width: 100%;
  min-height: 768px;
`

export const ExclusiveContainer = styled.div`
  max-width: 1028px;
  width: 100%;
  height: 20%;
`

export const SliderWrapper = styled.div`
  height: 80%;
  width: 100%;
`

export const TitleDescriptionWrapper = styled.div`
  width: 100%;
  max-width: 1028px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 20%;
  padding: 0 1rem;

  @media only screen and (max-width: 1024px) {
    height: auto;
  }
`

export const TitleText = styled.h1`
  font-size: 45px;
  font-family: 'Montserrat Bold';
  color: ${Colors.PRIMARY_COLOR};

  @media only screen and (max-width: 768px) {
    font-size: 25px;
  }

  @media only screen and (max-width: 425px) {
    font-size: 25px;
    width: 100%;
  }
`

export const DescriptionText = styled.p`
  font-size: 25px;
  font-family: 'Montserrat Regular';
  color: ${Colors.PRIMARY_COLOR};

  @media only screen and (max-width: 768px) {
    font-size: 20px;
    width: 335px;
    height: 87px;
    word-break: break-all;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -moz-box-orient: vertical;
    -ms-box-orient: vertical;
    box-orient: vertical;
    -webkit-line-clamp: 5;
    -moz-line-clamp: 5;
    -ms-line-clamp: 5;
    line-clamp: 5;
    overflow: hidden;
  }
`