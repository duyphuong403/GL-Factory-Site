import { Divider, Icon } from 'semantic-ui-react'
import styled from 'styled-components/macro'
import { Colors } from '../../../../../utils'

export const WrapperFirst = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
`

export const WrapperSecond = styled.div`
  position: relative;
  background-color: #2699fb;
  background-image: linear-gradient(#2699fb, #000000e3);
  max-width: 401px;
  max-height: 531px;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  transition: transform 0.2s;
  z-index: 5;

  &:hover {
    -ms-transform: scale(1.05);
    -webkit-transform: scale(1.05);
    transform: scaleX(1.05) scaleY(1.05);

    & .wrapperVisible {
      opacity: 0;
      visibility: hidden;
    }

    & .wrapperHidden {
      opacity: 1;
      visibility: visible;
    }
  }

  @media only screen and (max-width: 425px) {
    pointer-events: none;
  }
`

export const WrapperVisible = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 1;
  visibility: visible;
  -webkit-transition: opacity 600ms, visibility 600ms;
  transition: opacity 0.1s, visibility 0.1s;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media only screen and (max-width: 1279px) {
    opacity: 0;
    visibility: hidden;
  }
`

export const WrapperHidden = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0;
  visibility: hidden;
  -webkit-transition: opacity 600ms, visibility 600ms;
  transition: opacity 0.1s, visibility 0.1s;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media only screen and (max-width: 1279px) {
    opacity: 1;
    visibility: visible;
  }
`

export const TitleShareWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 20%;
`

export const ProductImageWrapper = styled.div`
  height: 80%;
  display: flex;
  justify-content: center;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ProductImage = styled.img`
  opacity: 0.388;
  width: 63%;
`

export const ShortTitleText = styled.h2`
  font-size: 2.1rem;
  color: #ffffff;
  padding-left: 2rem;
  width: 50%;
  height: 20%;
  font-family: 'Montserrat Bold';
  align-self: flex-start;
`

export const ShortTitleTextHover = styled.h2`
  text-transform: uppercase;
  font-size: 35px;
  line-height: 43px;
  color: #ffffff;
  width: 247px;
  height: 86px;
  font-family: 'Montserrat Bold';
  margin: 25px 0 0 38px !important;
`

export const DividerWrapper = styled.div`
  align-self: self-start;
  height: 10%;
  width: 100%;
  display: flex;
  align-items: center;
`

export const DividerTag = styled(Divider)`
  width: 78px;
  margin-left: 38px !important;
  border-color: #fff !important;
`

export const DescriptionText = styled.p`
  width: 80%;
  height: 43%;
  font-size: 15px;
  line-height: 19px;
  color: #fff;
  text-align: justify;
`

export const ShareWrapper = styled.div`
  padding-top: 4%;
  padding-right: 6%;

  @media only screen and (max-width: 425px) {
    padding-left: 10%;
    padding-right: 9%;
  }
`

export const Circle = styled.span`
  height: 40px;
  width: 40px;
  background-color: #ffffff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 7px 0;

  -webkit-transition: box-shadow 0.3s ease-out, color 0.3s;
  -moz-transition: box-shadow 0.3s ease-out, color 0.3s;
  -o-transition: box-shadow 0.3s ease-out, color 0.3s;
  transition: box-shadow 0.3s ease-out, color 0.3s;

  &:hover {
    box-shadow: 0 0 0 0.3rem #ffffff5c;
    & > i {
      -webkit-transition: box-shadow 0.3s ease-out, color 0.3s;
      -moz-transition: box-shadow 0.3s ease-out, color 0.3s;
      -o-transition: box-shadow 0.3s ease-out, color 0.3s;
      transition: box-shadow 0.3s ease-out, color 0.3s;
      color: ${Colors.PRIMARY_COLOR};
    }
  }

  @media only screen and (max-width: 425px) {
    height: 28px;
    width: 28px;
  }
`

export const SocialIcon = styled(Icon)`
  margin: 0 !important;

  @media only screen and (max-width: 425px) {
    font-size: 1.2em !important;
  }
`

export const ReadMoreButtonWrapper = styled.button`
  width: 325px;
  height: 10%;
  border: 2px solid #fff;
  min-height: 77px;
  font-size: 1.2rem;
  font-family: 'Montserrat Bold';
  color: #fff;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  -webkit-transition: border-color 0.3s, background-color 0.3s;
  -moz-transition: border-color 0.3s, background-color 0.3s;
  -o-transition: border-color 0.3s, background-color 0.3s;
  transition: border-color 0.3s, background-color 0.3s;

  &:hover {
    border: 2px solid ${Colors.PRIMARY_COLOR};
    background-color: ${Colors.PRIMARY_COLOR};
  }

  @media only screen and (max-width: 425px) {
    width: 227px;
    height: 50px;
  }
`