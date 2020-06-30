import React from 'react'
import { Text } from 'react-native'

import styled from 'styled-components/native'
import Desc from '../desc/desc'

import { Icon } from 'react-native-elements'
import theme from '../../layout/theme'

const Wrap = styled.TouchableOpacity`
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
  return (
    <Wrap>
      <Name>{props.name}</Name>
      <TimeWrap>
        <Icon
          size={22}
          name="alarm"
          type="material"
          color={theme.colorGreenLight}
          style={{ transform: [{ translateY: -1 }], marginRight: 10 }}
        />
        <TimeNumber>
          <TimeNumber>{props.time}</TimeNumber>
          <TimeUnit>min</TimeUnit>
        </TimeNumber>
      </TimeWrap>
    </Wrap>
  )
}

export default recipeProposition
