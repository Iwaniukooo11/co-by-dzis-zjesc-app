import React, { useState, useEffect } from 'react'
import theme from './theme'
import styled, { ThemeProvider } from 'styled-components/native'
import { AppLoading } from 'expo'
import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins'

const Wrapper = styled.View`
  font-family: 'Poppins_400Regular';
  flex: 1;
  background-color: #fff;
  /* align-items: center; */
  align-items: flex-start;
  /* justify-content: center; */
  padding: 30px;
`

const Layout = (props) => {
  const [isFontLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  })

  return !isFontLoaded ? (
    <AppLoading />
  ) : (
    <ThemeProvider theme={theme}>
      <Wrapper>{props.children}</Wrapper>
    </ThemeProvider>
  )
}

export default Layout
