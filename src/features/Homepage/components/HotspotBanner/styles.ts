import { Grid } from 'semantic-ui-react'
import styled from 'styled-components/macro'
import { Colors } from '../../../../utils'

export const Wrapper = styled(Grid)`
  margin: 0 !important;
  background-color: ${Colors.PRIMARY_COLOR};
  height: 100vh;
`

export const ProductImageWrapper = styled(Grid.Row)`
  height: 65%;

  @media only screen and (max-width: 375px) {
    height: 60%;
  }
`

export const InformationRow = styled(Grid.Row)`
  height: 25%;

  @media only screen and (max-width: 375px) {
    height: 40%;
  }
`

export const ImageProduct = styled.img`
  opacity: 0.3;

  @media (max-width: 768px) {
    width: 42%;
  }
`

export const InfomationWrapper = styled(Grid.Column)`
  margin-left: 23.5% !important;

  @media (max-width: 768px) {
    margin-left: 39px !important;
    margin-right: 39px !important;
  }
`

export const ProductTitleText = styled.h1`
  font-size: 45px;
  line-height: 45px;
  color: #ffffff;
  text-align: left;
`

export const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
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
  line-height: 22px;
  color: #ffffff;
  text-align: left;
  margin: 0;

  @media (max-width: 768px) {
    padding-top: 18px;
    font-size: 12px;
    line-height: 14px;
    width: 273px;
  }
`

export const StoreWrapper = styled(Grid.Row)`
  padding: 0 !important;
  height: 10%;
  background-color: #d8edef;
  display: flex;
  align-items: center;

  @media (max-width: 1030px) {
    height: 208px;
    flex-direction: column;
    align-items: normal;
    justify-content: center;
  }
`

export const DownloadLink = styled.a`
  font-size: 20px;
  font-family: 'Montserrat Bold';
  line-height: 17px;
  color: ${Colors.PRIMARY_COLOR};
  text-decoration: none;
  margin-left: 23.5%;

  @media (max-width: 1030px) {
    margin-left: 0;
    font-size: 23px;
  }
`
export const StoreLink = styled.a`
  padding-right: 6px;
`

export const StoreGridColumn = styled(Grid.Column)`
  text-align: left;

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`
