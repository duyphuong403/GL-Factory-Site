import { Divider, Icon } from 'semantic-ui-react'
import styled from 'styled-components/macro'
import { Colors } from '../../../../../utils'

export const WrapperFirst = styled.div`
  padding-left: 51px;
`

export const WrapperSecond = styled.div`
  position: relative;
  background-color: #2699fb;
  background-image: linear-gradient(#2699fb, #000000e3);
  width: 401px;
  height: 531px;
  border-radius: 10px;
  transition: transform 0.2s;

  &:hover {
    -ms-transform: scale(1.05);
    -webkit-transform: scale(1.05);
    transform: scaleX(1.09226) scaleY(1.12806);

    & .wrapperVisible {
      opacity: 0;
      visibility: hidden;
    }

    & .wrapperHidden {
      opacity: 1;
      visibility: visible;
    }
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
`

export const WrapperHidden = styled.div`
  width: 100%;
  position: absolute;
  opacity: 0;
  visibility: hidden;
  -webkit-transition: opacity 600ms, visibility 600ms;
  transition: opacity 0.1s, visibility 0.1s;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const TitleShareWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const ProductImageWrapper = styled.div`
  height: 50%;
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
  padding-top: 34%;
  padding-left: 10%;
  width: 201px;
  font-family: 'Montserrat Bold';
  align-self: flex-start;
`

export const ShortTitleTextHover = styled.h2`
  font-size: 2.1rem;
  color: #ffffff;
  padding-top: 25px;
  padding-left: 38px;
  width: 201px;
  font-family: 'Montserrat Bold';
  margin: 0;
`

export const DividerWrapper = styled.div`
  align-self: self-start;
`

export const DividerTag = styled(Divider)`
  width: 78px;
  margin-left: 38px !important;
  border-color: #fff !important;
`

export const DescriptionText = styled.p`
  font-size: 1.1rem;
  width: 329px;
  color: #fff;
  text-align: justify;
  padding-bottom: 200px;
`

export const ShareWrapper = styled.div`
  padding-top: 4%;
  padding-right: 6%;
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
`

export const SocialIcon = styled(Icon)`
  margin: 0 !important;
`

export const ReadMoreButtonWrapper = styled.button`
  border: 2px solid #fff;
  width: 325px;
  height: 77px;
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
`
