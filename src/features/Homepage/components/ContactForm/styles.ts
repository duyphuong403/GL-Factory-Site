import { Form, Grid, Select } from 'semantic-ui-react'
import styled from 'styled-components/macro'
import { Colors } from '../../../../utils'

export const Wrapper = styled(Grid)`
  margin: 0 !important;
  height: 100vh;
  background-color: #ebf6ff;
  display: flex;
  justify-content: center;
  min-height: 900px;
  
  @media only screen and (max-width: 375px) {
    min-height: 665px;
    margin-top: 208px !important;
  }
`

export const ContactGridRow = styled(Grid.Row)`
  max-width: 1028px;
  width: 100%;
  padding: 1rem !important;
`

export const DecoratorImageColumn = styled.div`
  display: flex;
  align-items: center;
  width: 50%;

  @media only screen and (max-width: 1024px) {
    justify-content: center;
  }

  @media only screen and (max-width: 992px) {
    display: none !important;
  }
`

export const FormColumn = styled.div`
  display: flex;
  width: 50%;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`

export const FormWrapper = styled(Form)`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-end;

  @media only screen and (max-width: 1024px) {
    align-items: center;
  }
`

export const FormField = styled(Form.Field)`
  width: 49%;

  @media only screen and (max-width: 768px) {
    width: 80%;
  }

  @media only screen and (max-width: 1440px) {
    width: 70%;
  }
`

export const FormTitleText = styled.h1`
  font-size: 25px;
  color: ${Colors.PRIMARY_COLOR};
  text-align: left !important;
  margin-bottom: 0 !important;
`

export const FormSubTitleText = styled.p`
  font-size: 12px;
  color: ${Colors.PRIMARY_COLOR};
  text-align: left !important;
  margin-top: 0 !important;
  margin-bottom: 32px !important;
`

export const PolicyLabel = styled.label`
  font-size: 10px !important;
  color: ${Colors.PRIMARY_COLOR} !important;
  text-align: justify;
  padding-top: 11px;
`

export const PolicyInput = styled.input`
  vertical-align: middle !important;
  background: ${Colors.PRIMARY_COLOR} !important;
`

export const FormInput = styled.input`
  background: #fff0 !important;
  border: 1px solid ${Colors.PRIMARY_COLOR} !important;
  &::-webkit-input-placeholder {
    color: ${Colors.PRIMARY_COLOR} !important;
  }
  &::-ms-placeholder {
    color: ${Colors.PRIMARY_COLOR} !important;
  }
  &:-ms-input-placeholder {
    color: ${Colors.PRIMARY_COLOR} !important;
  }
`

export const FormSelect = styled(Select)`
  background: #fff0 !important;
  border: 1px solid ${Colors.PRIMARY_COLOR} !important;
  & div {
    color: ${Colors.PRIMARY_COLOR} !important;
  }
`

export const FormButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 2px;
`

export const FormButton = styled.button`
  cursor: pointer;
  color: ${Colors.PRIMARY_COLOR};
  border: 1px solid ${Colors.PRIMARY_COLOR};
  border-radius: 0.28571429rem;
  background-color: transparent;
  line-height: 1em;
  min-width: 7.693em;
  min-height: 2.308em;
  -webkit-transition: border-color 0.3s, background-color 0.3s;
  -moz-transition: border-color 0.3s, background-color 0.3s;
  -o-transition: border-color 0.3s, background-color 0.3s;
  transition: border-color 0.3s, background-color 0.3s;

  &:hover {
    background-color: ${Colors.PRIMARY_COLOR};
    border: 1px solid ${Colors.PRIMARY_COLOR};
    color: #ffffff;
  }
`
