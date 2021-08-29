import React from 'react'
import { Grid, Rating } from 'semantic-ui-react'
import Slide from 'react-reveal/Slide'
import {
  DownloadGridColumn,
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
  StoreGridRow,
  StoreImage,
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
        <InfomationWrapper>
          <Slide bottom>
            <ProductTitleText>Gameloft game</ProductTitleText>
            <RatingWrapper>
              <ProductRatingText>Racing / Action | &nbsp;</ProductRatingText>
              <Rating icon="star" defaultRating={4} maxRating={5} size="tiny" />
            </RatingWrapper>
            <ProductDescriptionText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            </ProductDescriptionText>
          </Slide>
        </InfomationWrapper>
      </InformationRow>

      <StoreWrapper>
        <Slide bottom>
          <StoreGridRow>
            <DownloadGridColumn
              largeScreen={8}
              computer={8}
              tablet={8}
              mobile={16}
              verticalAlign="middle"
              textAlign="center"
            >
              <DownloadLink href="#">Download lastest version</DownloadLink>
            </DownloadGridColumn>
            <StoreGridColumn
              largeScreen={8}
              computer={8}
              tablet={8}
              mobile={16}
              verticalAlign="middle"
            >
              <StoreLink href="#">
                <StoreImage src="/images/NintendoStore.png" alt="Nintendo Store" />
              </StoreLink>
              <StoreLink href="#">
                <StoreImage src="/images/MicrosoftStore.png" alt="Microsoft Store" />
              </StoreLink>
              <StoreLink href="#">
                <StoreImage src="/images/SteamStore.png" alt="Steam Store" />
              </StoreLink>
            </StoreGridColumn>
          </StoreGridRow>
        </Slide>
      </StoreWrapper>
    </Wrapper>
  )
}
