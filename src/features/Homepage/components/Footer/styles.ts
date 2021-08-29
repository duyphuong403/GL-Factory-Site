import { Dropdown } from 'semantic-ui-react'
import styled from 'styled-components/macro'
import { Colors } from '../../../../utils'

export const Wrapper = styled.div`
  background-color: ${Colors.PRIMARY_COLOR};
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  min-height: 980px;

  @media only screen and (max-width: 600px) {
    justify-content: flex-start;
  }

  @media only screen and (max-height: 960px) {
    justify-content: flex-start;
  }
`

export const FollowUsWrapper = styled.div`
  background-color: #c4e4ff;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: none;
  height: 78px;
  min-width: 402px;

  @media only screen and (max-width: 600px) {
    display: flex;
  }
`

export const FollowUsText = styled.h1`
  @media only screen and (max-width: 600px) {
    font-size: 12px;
    color: ${Colors.PRIMARY_COLOR};
    font-family: 'Montserrat Bold';
  }
`

export const SocialIcon = styled.img`
  width: 100%;

  @media only screen and (max-width: 600px) {
    padding-left: 5.2px;
    padding-right: 5.2px;
    width: 25%;
  }
`

export const LogoLinkPolicyWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;

  @media only screen and (max-width: 600px) {
    display: block;
  }
`

export const LogoLinkPolicyWrapper2 = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1028px;
  width: 100%;
  margin-top: 10rem;

  @media only screen and (max-width: 1024px) {
    justify-content: center;
  }

  @media only screen and (max-width: 600px) {
    display: block;
    margin-top: 0;
  }
`

export const LogoNLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px;
  width: 53%;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`

export const LogoWrapper = styled.div`
  width: 100%;
  margin-left: -30px;

  @media only screen and (max-width: 600px) {
    display: flex;
    justify-content: center;
    margin-left: 0;
  }
`

export const LogoImage = styled.img`
  width: 82%;
`

export const SocialIconWrapper = styled.div`
  margin-top: 32px;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`

export const FollowUSText25 = styled.h1`
  font-size: 25px;
  line-height: 30px;
  color: #fff;
`

export const SocialIconWrapper2 = styled.div`
  width: 56%;
  display: flex;
  justify-content: flex-start;
  padding-top: 6px;
`

export const IconWrapper = styled.a`
  padding-right: 18.8px;
  width: 100%;
`

export const LanguageSelectWrapper = styled.div`
  margin-top: 31px;
  width: 145px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  & .dropdown {
    color: ${Colors.PRIMARY_COLOR};
  }
`

export const DropdownTag = styled(Dropdown)`
  border-radius: 6px;
  border-color: #fff;

  & > .text {
    font-size: 15px !important;
    font-family: 'Montserrat Regular' !important;
    color: ${Colors.PRIMARY_COLOR} !important;
  }
`

export const LinkNSiteMapWrapper = styled.div`
  display: flex;
  padding: 0 20px 0 20px;
  align-items: baseline;
  flex-direction: column;

  @media only screen and (max-width: 600px) {
    width: 100%;
    justify-content: space-between;
    flex-direction: row;
  }
`

export const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const TitleLinkText = styled.h1`
  font-size: 25px;
  line-height: 31px;
  color: #fff;
  font-family: 'Montserrat Bold';
  margin-bottom: 31px;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`

export const LinkTag = styled.a`
  color: #fff;
  font-size: 20px;
  line-height: 31px;

  @media only screen and (max-width: 600px) {
    font-size: 12px;
    line-height: 30px;
    font-family: 'Montserrat Bold';
  }
`

export const SiteMapWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 44px;

  @media only screen and (max-width: 600px) {
    margin-top: 0;
  }
`

export const LicenseInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 29px 0 29px 0;

  @media only screen and (max-width: 600px) {
    padding: 34px 20px 59px 20px;
  }
`

export const LicenseInfoText = styled.p`
  color: #fff;
  font-family: 'Montserrat Light';
  text-align: center;
  font-size: 15px;
  max-width: 1028px;

  @media only screen and (max-width: 600px) {
    font-size: 10px;
  }
`

export const HrTag = styled.hr`
  margin-top: 2rem;
  height: 2px;
  border-width: 0;
  color: white;
  background-color: white;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`
