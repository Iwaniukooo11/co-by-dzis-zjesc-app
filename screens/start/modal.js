import React from 'react'
import styled from 'styled-components/native'
import { Modal, TouchableOpacity, ScrollView } from 'react-native'
import * as Linking from 'expo-linking'

import Layout from '../../layout/layout'
import theme from '../../layout/theme'
import Desc from '../../components/desc/desc'
import GreenButton from '../../components/greenButton/greenButton'
import SectionHeader from '../../components/sectionHeader/sectionHeader'

import { Icon } from 'react-native-elements'

const StyledDesc = styled(Desc)`
  margin: 30px 0 15px;
`
const Socials = styled.View`
  flex-direction: row;
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
        <ScrollView showsVerticalScrollIndicator={false}>
          <TouchableOpacity
            onPress={() => props.setModal(false)}
            style={{ position: 'absolute', right: 40, top: 0 }}
          >
            <Icon
              size={32}
              name="times-circle"
              type="font-awesome"
              color={theme.colorGreenLight}
            />
          </TouchableOpacity>

          <SectionHeader>Pomóż nam!</SectionHeader>
          <StyledDesc center={true}>
            Chesz mieć swój wkład w rozwój aplikacji? Zostaw po sobie opinię!
          </StyledDesc>
          <GreenButton isActive={true} style={{ alignSelf: 'center' }}>
            Oceń nas!
          </GreenButton>
          <StyledDesc center>
            A może masz swój pomysł na danie, którego nie ma w apce? Wyślij go
            nam!
          </StyledDesc>
          <GreenButton
            isActive={true}
            style={{ alignSelf: 'center' }}
            onPressHandler={() =>
              Linking.openURL(
                'https://docs.google.com/forms/d/e/1FAIpQLSfrLlXvQqYS0ZgHWC1y6lhFGjQEXTTrkIl4fWau8AHHiCqBQg/viewform?usp=sf_link'
              )
            }
          >
            Dodaj swój przepis!
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
        </ScrollView>
      </Layout>
    </Modal>
  )
}

export default StartModal
