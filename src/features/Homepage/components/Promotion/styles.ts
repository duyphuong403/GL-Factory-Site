import styled from 'styled-components/macro'
import { Colors } from '../../../../utils'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.SECONDARY_COLOR};
  width: 100%;
  height: 100vh;
  max-height: 1080px;
  min-height: 860px;

`

export const WrapperSecond = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  height: 20%;

  & > .react-reveal {
    height: 100%;
  }
`

export const TitleDescriptionWrapper = styled.div`
  width: 100%;
  max-width: 1028px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`

export const TitleText = styled.h1`
  font-size: 3.2143rem;
  font-family: 'Montserrat Bold';
  color: ${Colors.PRIMARY_COLOR};
  height: 50%;
  margin: 0;

  @media only screen and (max-width: 865px) {
    font-size: 5vw;
  }

  @media only screen and (max-width: 425px) {
    font-size: 25px;
    width: 100%;
  }
`

export const DescriptionText = styled.p`
  font-size: 1.7857rem;
  height: 50%;
  font-family: 'Montserrat Regular';
  color: ${Colors.PRIMARY_COLOR};
  overflow: hidden;

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

export const SliderWrapper = styled.div`
  height: 100%;

  & > .slick-initialized {
    height: 100%;

    & > .slick-list {
      height: 80%;
      min-height: 571px;

      & > .slick-track {
        height: 100%;
        padding-top: 2% !important;
        padding-bottom: 2% !important;

        & > .slick-slide > div {
          height: 100%;
        }
      }
    }

    & > button {
      display: none !important;
    }
  }

  & > .slick-initialized > .slick-dots > .slick-active > .MuiBox-root > .MuiCircularProgress-root {
    color: ${Colors.PRIMARY_COLOR};

    & > svg {
      display: block !important;
    }
  }

  & > .slick-initialized > .slick-dots {
    width: 100%;
    height: 10%;

    @media only screen and (max-height: 880px) {
      display: none !important;
    }

    & > li {
      padding: 1rem;

      & > .MuiBox-root > .MuiCircularProgress-root > svg {
        display: none !important;
      }
    }
  }
`
