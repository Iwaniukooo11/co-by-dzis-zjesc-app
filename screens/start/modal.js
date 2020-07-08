import React from 'react'
import { View, Modal, TouchableOpacity } from 'react-native'
// import Modal from 'react-native-modal'
import Layout from '../../layout/layout'
import theme from '../../layout/theme'
import Desc from '../../components/desc/desc'
import GreenButton from '../../components/greenButton/greenButton'
import SectionHeader from '../../components/sectionHeader/sectionHeader'
import { Icon } from 'react-native-elements'

import styled from 'styled-components/native'

const StyledDesc = styled(Desc)`
  margin: 30px 0 15px;
  /* color: ${theme.colorGrey}; */
`
const Socials = styled.View`
  flex-direction: row;
  /* display: flex; */
  flex: 1;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  margin: 20px 0;
`

const StartModal = (props) => {
  return (
    <Modal
      visible={props.visible}
      style={{ flex: 0, flexGrow: 0 }}
      onRequestClose={() => props.setModal(false)}
      swipeDirection="left"
      onBackdropPress={props.closeHandler}
      presentationStyle={'overFullScreen'}
      style={{ backgroundColor: theme.colorWhite, margin: 0 }}
      animationType="slide"
    >
      <Layout>
        <TouchableOpacity
          onPress={() => props.setModal(false)}
          style={{ position: 'absolute', right: 40, top: 40 }}
        >
          <Icon
            size={32}
            name="times-circle"
            type="font-awesome"
            color={theme.colorGreenLight}
            // color={theme.colorGrey}

            // style={{ transform: [{ translateY: -1 }], marginRight: 10 }}
          />
        </TouchableOpacity>

        <SectionHeader>Pomóż nam!</SectionHeader>
        <StyledDesc center={true}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quam
          aut est quos tempore
        </StyledDesc>
        <GreenButton isActive={true} style={{ alignSelf: 'center' }}>
          Oceń nas!
        </GreenButton>
        <StyledDesc center>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quam
          aut est quos
        </StyledDesc>
        <GreenButton isActive={true} style={{ alignSelf: 'center' }}>
          Dodaj swój przepis
        </GreenButton>
        {/* <Socials>
          <Icon
            size={50}
            name="logo-facebook"
            type="ionicon"
            color={'#4267B2'}
            // style={{ borderRadius: '50%' }}
          />
          <Icon
            size={50}
            name="globe"
            type="ionicon"
            color={theme.colorGrey}
            // style={{ borderRadius: '50%' }}
          />
        </Socials> */}
      </Layout>
    </Modal>
  )
}

export default StartModal
