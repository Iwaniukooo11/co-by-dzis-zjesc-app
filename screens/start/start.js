import React, { useEffect, useState } from 'react'
import { Image } from 'react-native'
import styled from 'styled-components/native'
import Layout from '../../layout/layout'
import GreenButton from '../../components/greenButton/greenButton'
import SectionHeader from '../../components/sectionHeader/sectionHeader'
import Desc from '../../components/desc/desc'
import NetInfo from '@react-native-community/netinfo'

const StyledImage = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 15px;
  margin-bottom: 30px;
`

const StyledDesc = styled(Desc)`
  text-align: center;
  margin-bottom: 30px;
`

const Start = (props) => {
  const [isConnected, setIsConnected] = useState(true)

  useEffect(() => {
    NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected)
    })
  })

  return (
    <Layout center>
      <StyledImage source={require('../../assets/logo/logo.jpg')} />
      <SectionHeader>Co by dziś zjeść?</SectionHeader>
      <StyledDesc>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </StyledDesc>
      <GreenButton
        isActive={isConnected}
        onPressHandler={() => props.navigation.navigate('Select')}
      >
        {isConnected ? 'Zaczynamy!' : 'Brak internetu'}
      </GreenButton>
    </Layout>
  )
}

export default Start
