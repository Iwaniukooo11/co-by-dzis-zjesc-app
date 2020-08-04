import React, { useState, useEffect } from 'react'
import { BackHandler, ScrollView } from 'react-native'
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
  /* background-color: red; */
  padding: 50px 30px 15px 30px;
  align-items: flex-start;
  justify-content: ${(props) => (props.center ? 'center' : 'flex-start')};
  align-items: ${(props) => (props.center ? 'center' : 'flex-start')};
`

const Layout = (props) => {
  const [isFontLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  })
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => true)
  }, [])

  return !isFontLoaded ? (
    <AppLoading />
  ) : (
    <ThemeProvider theme={theme}>
      <>
        {/* <ScrollView showsVerticalScrollIndicator={false}> */}
        <Wrapper center={props.center}>
          {/* <ScrollView showsVerticalScrollIndicator={false}> */}
          {props.children}
          {/* </ScrollView> */}
        </Wrapper>
      </>
    </ThemeProvider>
  )
}

export default Layout
