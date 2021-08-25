import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 100vh;
  background-color: #d8edff;
  min-height: 1080px;
  display: flex;

  @media only screen and (max-width: 375px) {
    min-height: 665px;
    margin-top: 208px !important;
  }
`
