import { Icon, Menu } from 'semantic-ui-react'
import styled from 'styled-components/macro'
import { Colors } from '../../../../utils'

export const Wrapper = styled(Menu)`
  height: 76px;
  background-color: #A8D6FD !important;
  display: flex;
  justify-content: space-between;

  @media (max-width: 425px) {
    height: 50px;
  }
`

export const LogoWrapper = styled.div`
  padding: 2px 0;
  padding-left: 64px;
  display: flex;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    padding-left: 20px;
  }
`

export const Logo = styled.img`
  cursor: pointer;
  width: 56px;

  @media (max-width: 768px) {
    width: 10%;
  }
`

export const BrandName = styled.img`
  padding-left: 7px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 23%;
    padding-left: 2px;
  }
`

export const HambugerIconWrapper = styled.div`
  padding-right: 3.4rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    padding-right: 2rem;
  }
`

export const HambugerIcon = styled.img`
  cursor: pointer;
  width: 60%;

  @media (max-width: 768px) {
    width: 40%;
  }
`

export const SocialIconWrapper = styled.div`
  position: fixed;
  bottom: 111px;
  right: 84px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 5;

  @media (max-width: 768px) {
    right: 27px;
    bottom: 49px;
  }
`

export const Circle = styled.span`
  height: 34px;
  width: 34px;
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
  
  @media only screen and (max-width: 768px) {
    font-size: 1em !important;
  }
`
