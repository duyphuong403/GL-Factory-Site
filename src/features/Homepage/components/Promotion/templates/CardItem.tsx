import React from 'react'
import {
  Circle,
  DescriptionText,
  DividerTag,
  DividerWrapper,
  ProductImage,
  ProductImageWrapper, ReadMoreButtonWrapper,
  ShareWrapper,
  ShortTitleText,
  ShortTitleTextHover,
  SocialIcon,
  TitleShareWrapper,
  WrapperFirst,
  WrapperHidden,
  WrapperSecond,
  WrapperVisible
} from './styles'

export const CardItem = () => {
  return (
    <WrapperFirst>
      <WrapperSecond>
        <WrapperHidden className="wrapperHidden">
          <TitleShareWrapper>
            <ShortTitleTextHover>Short Title Here</ShortTitleTextHover>
            <ShareWrapper>
              <Circle>
                <SocialIcon name="share alternate" size="large" />
              </Circle>
            </ShareWrapper>
          </TitleShareWrapper>
          <DividerWrapper>
            <DividerTag />
          </DividerWrapper>
          <DescriptionText>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore et dolore...
          </DescriptionText>
          <ReadMoreButtonWrapper>
            READ MORE
          </ReadMoreButtonWrapper>
        </WrapperHidden>

        <WrapperVisible className="wrapperVisible">
          <ProductImageWrapper>
            <ProductImage src="images/product-image.png" alt="product" />
          </ProductImageWrapper>
          <ShortTitleText className="shortTitle">Short Title Here</ShortTitleText>
        </WrapperVisible>
      </WrapperSecond>
    </WrapperFirst>
  )
}
