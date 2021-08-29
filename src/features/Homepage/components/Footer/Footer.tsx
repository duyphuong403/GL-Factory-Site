import React from 'react'
import Slide from 'react-reveal/Slide'
import {
  DropdownTag,
  FollowUsText,
  FollowUSText25,
  FollowUsWrapper,
  HrTag,
  IconWrapper,
  LanguageSelectWrapper,
  LicenseInfoText,
  LicenseInfoWrapper,
  LinkNSiteMapWrapper,
  LinkTag,
  LinkWrapper,
  LogoImage,
  LogoLinkPolicyWrapper,
  LogoLinkPolicyWrapper2,
  LogoNLinkWrapper,
  LogoWrapper,
  SiteMapWrapper,
  SocialIcon,
  SocialIconWrapper,
  SocialIconWrapper2,
  TitleLinkText,
  Wrapper,
} from './styles'

export const Footer = () => {
  const options = [
    {
      key: 'English',
      text: 'English',
      value: 'English',
      image: {
        src: 'images/earth.png',
      },
    },
  ]

  return (
    <Wrapper>
      <Slide bottom>
        <FollowUsWrapper>
          <FollowUsText>Follow Us</FollowUsText>
          <div>
            <SocialIcon src="/images/facebook.png" alt="Facebook" />
            <SocialIcon src="/images/linkedin.png" alt="Linkedin" />
            <SocialIcon src="/images/twitter.png" alt="Twitter" />
            <SocialIcon src="/images/youtube.png" alt="Youtube" />
          </div>
        </FollowUsWrapper>

        <LogoLinkPolicyWrapper>
          <LogoLinkPolicyWrapper2>
            <LogoNLinkWrapper>
              <LogoWrapper>
                <LogoImage src="/images/Gameloft_Logo_Flat_White_Line@2x.png" alt="GL Logo" />
              </LogoWrapper>
              <SocialIconWrapper>
                <FollowUSText25>Follow Us</FollowUSText25>

                <SocialIconWrapper2>
                  <IconWrapper href="#">
                    <SocialIcon src="/images/facebook-white-square.png" alt="Facebook" />
                  </IconWrapper>
                  <IconWrapper href="#">
                    <SocialIcon src="/images/linkedin-white-square.png" alt="Linkedin" />
                  </IconWrapper>
                  <IconWrapper href="#">
                    <SocialIcon src="/images/twitter-white-square.png" alt="Twitter" />
                  </IconWrapper>
                  <IconWrapper href="#">
                    <SocialIcon src="/images/youtube-white-square.png" alt="Youtube" />
                  </IconWrapper>
                </SocialIconWrapper2>

                <LanguageSelectWrapper>
                  <DropdownTag selection options={options} fluid defaultValue={options[0].value} />
                </LanguageSelectWrapper>
              </SocialIconWrapper>
            </LogoNLinkWrapper>

            <LinkNSiteMapWrapper>
              <LinkWrapper>
                <TitleLinkText>VISIT</TitleLinkText>
                <LinkTag href="#">Gameloft Game</LinkTag>
                <LinkTag href="#">Gameloft Careers</LinkTag>
                <LinkTag href="#">Gameloft News</LinkTag>
                <LinkTag href="#">Gameloft Forum</LinkTag>
                <LinkTag href="#">Gameloft Corporate</LinkTag>
                <LinkTag href="#">Gameloft Advertising</LinkTag>
                <LinkTag href="#">Gameloft Support</LinkTag>
              </LinkWrapper>

              <SiteMapWrapper>
                <TitleLinkText>LEGAL</TitleLinkText>
                <LinkTag href="#">Terms of Use</LinkTag>
                <LinkTag href="#">Privacy Policy</LinkTag>
                <LinkTag href="#">Cookies Policy</LinkTag>
                <LinkTag href="#">EULA</LinkTag>
                <LinkTag href="#">Legal Notices</LinkTag>
                <LinkTag href="#">Event Rules</LinkTag>
                <LinkTag href="#">Contest Rules</LinkTag>
                <LinkTag href="#">Business Contacts</LinkTag>
              </SiteMapWrapper>
            </LinkNSiteMapWrapper>
          </LogoLinkPolicyWrapper2>
        </LogoLinkPolicyWrapper>

        <HrTag />

        <LicenseInfoWrapper>
          <LicenseInfoText>
            ©2020 Gameloft. All rights reserved. Gameloft and the Gameloft logo are trademarks of
            Gameloft in the U.S. and/or other countries. <br /> All other trademarks are the
            property of their respective owners.
          </LicenseInfoText>
        </LicenseInfoWrapper>
      </Slide>
    </Wrapper>
  )
}
