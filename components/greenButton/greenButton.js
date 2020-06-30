import styled from 'styled-components/native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const StyledText = styled.Text`
  /* color: */
  font-size: 22px;
  font-family: 'Poppins_600SemiBold';
  color: ${({ theme }) => theme.colorWhite};
`

const StyledTouchableOpacity = styled.TouchableOpacity.attrs((props) => ({
  style: props.style,
}))`
  background-color: ${({ theme }) => theme.colorGreenLight};
  padding: 10px 25px;
  justify-content: center;
  /* align-self: center; */
  align-items: center;
  border-radius: 8px;
  /* margin-top: 15px; */
`

const greenButton = (props) => {
  return (
    <StyledTouchableOpacity
      onPress={props.onPressHandler}
      style={props.style}
      activeOpacity={0.5}
    >
      <StyledText>{props.children}</StyledText>
    </StyledTouchableOpacity>
  )
}

export default greenButton
