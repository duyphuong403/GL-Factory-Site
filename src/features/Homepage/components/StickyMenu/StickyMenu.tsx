import React from 'react'
import {
  BrandName,
  Circle,
  HambugerIcon,
  HambugerIconWrapper,
  Logo,
  LogoWrapper,
  SocialIcon,
  SocialIconWrapper,
  Wrapper,
} from './styles'

export const StickyMenu = () => {
  return (
    <div>
      <Wrapper fixed="top" fluid>
        <LogoWrapper>
          <Logo src="images/g-icon.png" alt="Logo" />
          <BrandName src="images/Gameloft.png" alt="gl-text" />
        </LogoWrapper>
        <HambugerIconWrapper>
          <HambugerIcon src="images/HambugerIcon.png" alt="Hambuger Icon" />
        </HambugerIconWrapper>
      </Wrapper>

      <SocialIconWrapper>
        <Circle>
          <SocialIcon name="share alternate" size="large" />
        </Circle>
        <Circle>
          <SocialIcon name="mail outline" size="large" />
        </Circle>
        <Circle>
          <SocialIcon name="headphones" size="large" />
        </Circle>
      </SocialIconWrapper>
    </div>
  )
}
