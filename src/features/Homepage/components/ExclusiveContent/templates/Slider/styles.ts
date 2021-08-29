import styled from 'styled-components/macro'
import { Colors } from '../../../../../../utils'

export const SlideShow = styled.div`
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const Container = styled.div`
  position: relative;
  margin: auto;
  width: 100%;
  height: 70%;
  max-height: 372px;
  display: flex;
  justify-content: center;

  & > .active {
    opacity: 1;
  }
`

export const Slide = styled.div`
  width: 100%;
  height: auto;
  max-height: 372px;
  max-width: 650px;
  position: absolute;
  margin: auto;
  display: flex;
  justify-content: center;

  opacity: 0;
  transition: opacity 0.6s ease;
  -webkit-transition: opacity 0.6s ease;
  -moz-transition: opacity 0.6s ease;
  -o-transition: opacity 0.6s ease;

  @media only screen and (max-width: 656px) {
    width: 100%;
  }
`
export const NumberTextWrapper = styled.div`
  max-width: 1028px;
  height: 30%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: baseline;
`

export const NumberText = styled.div`
  color: ${Colors.PRIMARY_COLOR};
  font-size: 1.42rem;
  top: 0;
  padding: 0 2.357rem;
`

export const ImageTag = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  max-width: 650px;
  max-height: 372px;
`

export const PrevSpan = styled.span`
  cursor: pointer;
  color: #9dd1fd;
  font-weight: bold;
  transition: background-color 0.6s ease;
  -webkit-transition: background-color 0.6s ease;
  -moz-transition: background-color 0.6s ease;
  -o-transition: background-color 0.6s ease;

  &:hover {
    color: ${Colors.PRIMARY_COLOR};
  }
`

export const NextSpan = styled.span`
  cursor: pointer;
  color: #9dd1fd;
  font-weight: bold;
  transition: background-color 0.6s ease;
  -webkit-transition: background-color 0.6s ease;
  -moz-transition: background-color 0.6s ease;
  -o-transition: background-color 0.6s ease;

  &:hover {
    color: ${Colors.PRIMARY_COLOR};
  }
`
