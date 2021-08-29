import React from 'react'
import { Grid, GridColumn } from 'semantic-ui-react'
import Slide from 'react-reveal/Slide'
import {
  ContactGridRow,
  DecoratorImageColumn,
  FormButton,
  FormButtonWrapper,
  FormColumn,
  FormField,
  FormInput,
  FormSelect,
  FormSubTitleText,
  FormTitleText,
  FormWrapper,
  PolicyInput,
  PolicyLabel,
  Wrapper,
} from './styles'

export const ContactForm = () => {
  return (
    <Wrapper>
      <ContactGridRow>
        <DecoratorImageColumn>
          <Slide bottom>
            <img src="images/Minion-Grey2@1X.png" alt="Minion" />
          </Slide>
        </DecoratorImageColumn>

        <FormColumn>
          <FormWrapper size="small">
            <FormField>
              <Slide bottom>
                <FormTitleText>Stay in the Know!</FormTitleText>
              </Slide>
              <Slide bottom>
                <FormSubTitleText>
                  Don't get left behind!
                  <br /> Subscribe to our newsletters today!
                </FormSubTitleText>
              </Slide>
            </FormField>

            <FormField control={FormInput} placeholder="Name" />

            <FormField control={FormInput} placeholder="Email" />

            <FormField control={FormSelect} placeholder="Country" options={[]} />

            <FormField control={FormSelect} placeholder="Platform" options={[]} />
            <FormField>
              <PolicyLabel>
                <Grid>
                  <GridColumn width={1}>
                    <PolicyInput type="checkbox" />
                  </GridColumn>
                  <GridColumn width={14} style={{ paddingLeft: '1em' }}>
                    <p>
                      By signing up, I confirm that I am 13 years old or older. I agree to the
                      Gameloft Terms and Conditions and I have read the Privacy Policy.
                    </p>
                  </GridColumn>
                </Grid>
              </PolicyLabel>
              <PolicyLabel>
                <Grid>
                  <GridColumn width={1}>
                    <PolicyInput type="checkbox" />
                  </GridColumn>
                  <GridColumn width={14} style={{ paddingLeft: '1em' }}>
                    <p>
                      I agree to receive promotional offers relating to all Gameloft games and
                      services.
                    </p>
                  </GridColumn>
                </Grid>
              </PolicyLabel>
            </FormField>

            <FormField>
              <FormButtonWrapper>
                <FormButton>Button</FormButton>
              </FormButtonWrapper>
            </FormField>
          </FormWrapper>
        </FormColumn>
      </ContactGridRow>
    </Wrapper>
  )
}
