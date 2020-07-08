import React, { useEffect, useState } from 'react'
import { Image } from 'react-native'
import styled from 'styled-components/native'
import Layout from '../../layout/layout'
import theme from '../../layout/theme'
import GreenButton from '../../components/greenButton/greenButton'
import SectionHeader from '../../components/sectionHeader/sectionHeader'
import Desc from '../../components/desc/desc'
import NetInfo from '@react-native-community/netinfo'
import { Icon } from 'react-native-elements'

import Modal from './modal'
const StyledTouchableIcon = styled.TouchableOpacity`
  position: absolute;
  right: 50px;
  top: 70px;
`

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
  const [isModalVisible, setIsModalVisible] = useState(false)

  useEffect(() => {
    NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected)
    })
  })

  return (
    <>
      <Modal
        visible={isModalVisible}
        setModal={setIsModalVisible}
        presentationStyle={''}
      />
      <Layout center>
        <StyledTouchableIcon onPress={() => setIsModalVisible(true)}>
          <Icon
            size={40}
            name="ellipsis-v"
            type="font-awesome"
            color={theme.colorGreenLight}
          />
        </StyledTouchableIcon>

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
    </>
  )
}

export default Start
