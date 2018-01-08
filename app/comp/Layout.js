import React from 'react'
import styled, { injectGlobal } from 'styled-components'
import { FlexCenter } from '../styles/global'

injectGlobal`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'futura';
    margin: 0;
    padding: 0;
  }
`
const Header = styled(FlexCenter)`
  background-image: linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%);
  height: 10vh;
`

const Content = styled(FlexCenter)`
  height: 80vh;
  text-align: center;
`

const Footer = styled(FlexCenter)`
  background: papayawhip;
  height: 10vh;
`

const Layout = (props) => (
  <div>
    <Header>Header</Header>
    <Content>{ props.children }</Content>
    <Footer>Footer</Footer>
  </div>
)

export default Layout
