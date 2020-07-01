import React, { useState } from 'react'
import { Text, Modal } from 'react-native'

import styled from 'styled-components/native'
import Desc from '../desc/desc'
import Layout from '../../layout/layout'
import RecipeContent from '../recipeContent/recipeContent'

import { Icon } from 'react-native-elements'
import theme from '../../layout/theme'

const WrapTouchable = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding: 6px 25px;
  border: 2px solid ${({ theme }) => theme.colorGrey};
  margin: 4px 0;
  border-radius: 10px;
`

const Name = styled(Desc)`
  color: ${({ theme }) => theme.colorGreenLight};
  width: 70%;
`

const TimeWrap = styled.View`
  flex-direction: row;
`
const TimeUnit = styled.Text`
  font-family: 'Poppins_400Regular';
  font-size: 18px;
  color: ${({ theme }) => theme.colorBlack};
`
const TimeNumber = styled.Text`
  font-size: 18;
  color: ${({ theme }) => theme.colorGreenLight};
`

const recipeProposition = (props) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <WrapTouchable onPress={() => setIsOpen(true)}>
      <Modal
        animationType="slide"
        visible={isOpen}
        onRequestClose={() => setIsOpen(false)}
        // transparent={true}
        presentationStyle={'overFullScreen'}
      >
        <Layout>
          <RecipeContent food={props.food} showName={true} />
        </Layout>
      </Modal>
      <Name>{`${props.food.name[0].toUpperCase()}${props.food.name.slice(
        1
      )}`}</Name>
      <TimeWrap>
        <Icon
          size={22}
          name="alarm"
          type="material"
          color={theme.colorGreenLight}
          style={{ transform: [{ translateY: -1 }], marginRight: 10 }}
        />
        <TimeNumber>
          <TimeNumber>{props.food.time}</TimeNumber>
          <TimeUnit>min</TimeUnit>
        </TimeNumber>
      </TimeWrap>
    </WrapTouchable>
  )
}

export default recipeProposition
