import React from 'react'
import { Grid, Rating } from 'semantic-ui-react'
import {
  DownloadLink,
  ImageProduct,
  InfomationWrapper,
  InformationRow,
  ProductDescriptionText,
  ProductImageWrapper,
  ProductRatingText,
  ProductTitleText,
  RatingWrapper,
  StoreGridColumn,
  StoreLink,
  StoreWrapper,
  Wrapper,
} from './styles'

export const HotspotBanner = () => {
  return (
    <Wrapper>
      <ProductImageWrapper>
        <Grid.Column textAlign="center" verticalAlign="middle">
          <ImageProduct src="/images/product-image.png" alt="Product" />
        </Grid.Column>
      </ProductImageWrapper>

      <InformationRow>
        <InfomationWrapper largeScreen={6} computer={6} tablet={8} mobile={16}>
          <ProductTitleText>Gameloft game</ProductTitleText>
          <RatingWrapper>
            <ProductRatingText>Racing / Action | &nbsp;</ProductRatingText>
            <Rating icon="star" defaultRating={4} maxRating={5} size="tiny" />
          </RatingWrapper>
          <ProductDescriptionText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            itation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
            in
          </ProductDescriptionText>
        </InfomationWrapper>
      </InformationRow>

      <StoreWrapper>
        <Grid.Column
          largeScreen={8}
          computer={8}
          tablet={8}
          mobile={16}
          verticalAlign="middle"
          textAlign="center"
        >
          <DownloadLink href="#">Download lastest version</DownloadLink>
        </Grid.Column>
        <StoreGridColumn largeScreen={8} computer={8} tablet={8} mobile={16} verticalAlign="middle">
          <StoreLink href="#">
            <img src="/images/NintendoStore.png" alt="Nintendo Store" />
          </StoreLink>
          <StoreLink href="#">
            <img src="/images/MicrosoftStore.png" alt="Microsoft Store" />
          </StoreLink>
          <StoreLink href="#">
            <img src="/images/SteamStore.png" alt="Steam Store" />
          </StoreLink>
        </StoreGridColumn>
      </StoreWrapper>
    </Wrapper>
  )
}
