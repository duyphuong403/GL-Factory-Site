import { Grid } from 'semantic-ui-react'
import styled from 'styled-components/macro'
import { Colors } from '../../../../utils'

export const Wrapper = styled(Grid)`
  position: relative;
  margin: 0 !important;
  background-color: ${Colors.PRIMARY_COLOR};
  height: 100vh;
  max-height: 1080px;
  justify-content: center;
  align-items: flex-end !important;

  @media only screen and (max-width: 768px) {
    max-height: 665px;
  }
`

export const ProductImageWrapper = styled(Grid.Row)`
  height: 100%;
  max-height: 1080px;
  max-width: 1028px;
  position: absolute !important;
  padding: 0 !important;
`

export const InformationRow = styled(Grid.Row)`
  height: 27%;
  max-width: 1028px;
  justify-content: start !important;
  top: 34%;
  max-height: 200px;

  @media only screen and (max-width: 1024px) {
    height: 60%;
    top: 65%;
    position: absolute !important;
  }
`

export const ImageProduct = styled.img`
    width: 42%;
`

export const InfomationWrapper = styled(Grid.Column)`
  justify-self: start;
  padding: 0 !important;
  max-width: 599px;
  margin-left: 37px !important;
  margin-right: 37px !important;
`

export const ProductTitleText = styled.h1`
  font-size: 45px;
  line-height: 45px;
  color: #ffffff;
  text-align: left;
  text-transform: uppercase;
`

export const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-top: 4px;
`

export const ProductRatingText = styled.p`
  font-size: 11px;
  line-height: 12px;
  color: #ffffff;
  text-align: left;
  margin: 0;
  display: inline-block;
`

export const ProductDescriptionText = styled.p`
  padding-top: 1em;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
  text-align: left;
  margin: 0;
  text-align: justify;

  @media (max-width: 768px) {
    padding-top: 18px;
    font-size: 12px;
    line-height: 14px;
    width: 273px;
  }
`

export const StoreWrapper = styled.div`
  width: 100%;
  height: 10%;
  max-height: 76px;
  background-color: #d8edff;
  display: flex;
  justify-content: center;
  position: relative;

  @media (max-width: 768px) {
    position: absolute;
    top: 100%;
    max-height: 208px;
    height: 208px;
  }
`

export const StoreGridRow = styled(Grid.Row)`
  display: flex;
  align-items: center;
  height: 100%;
  max-width: 1028px;

  @media (max-width: 768px) {
    height: 208px;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }
`

export const DownloadGridColumn = styled(Grid.Column)`
  width: 100%;
  display: flex;

  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`

export const DownloadLink = styled.a`
  font-size: 20px;
  font-family: 'Montserrat Bold';
  line-height: 17px;
  color: ${Colors.PRIMARY_COLOR};
  text-decoration: none;

  @media (max-width: 1030px) {
    margin-left: 0;
    font-size: 23px;
  }
`

export const StoreGridColumn = styled(Grid.Column)`
  text-align: right;
  width: 100%;

  @media only screen and (max-width: 768px) {
    text-align: left;
    width: 50%;
  }

  @media only screen and (max-width: 425px) {
    width: 100%;
  }
`

export const StoreLink = styled.a`
  padding-right: 6px;
`

export const StoreImage = styled.img`
  width: 24%;

  @media only screen and (max-width: 768px) {
    width: 31%;
  }

  @media only screen and (max-width: 425px) {
    width: 48%;
  }
`
