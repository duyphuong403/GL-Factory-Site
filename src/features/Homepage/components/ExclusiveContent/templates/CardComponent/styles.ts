import { Icon } from 'semantic-ui-react'
import styled from 'styled-components/macro'
import { Colors } from '../../../../../../utils'

export const GameCardWrapper = styled.div`
  width: 90%;
  height: 100%;
  max-height: 372px;
  max-width: 650px;
  /* background-image: url('/images/Rectangle1833.png'); */
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const GameImage = styled.img`
  width: 100%;
  height: 100%;
`

export const CircleWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 1rem;
`

export const Circle = styled.a`
  height: 40px;
  width: 40px;
  background-color: #ffffff;
  border-radius: 50%;
  display: inline-block;
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

  @media only screen and (max-width: 768px) {
    height: 1.75rem;
    width: 1.75rem;
  }
`

export const SocialIcon = styled(Icon)`
  width: 100%;
  margin: 0 !important;
  color: #000000;

  @media only screen and (max-width: 768px) {
    font-size: 1em !important;
  }
`
