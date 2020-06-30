import styled from 'styled-components/native'
import React from 'react'
import { TouchableOpacity, View } from 'react-native'

const StyledText = styled.Text`
  /* color: */
  font-size: 22px;
  font-family: 'Poppins_600SemiBold';
  color: ${({ theme }) => theme.colorWhite};
  /* color:${(props) => (props.isActive ? 'green' : 'red')}; */
`

const StyledTouchableOpacity = styled.TouchableOpacity`
  /* background-color: ${({ theme }) => theme.colorGreenLight}; */
  /* padding: 10px 25px; */
  justify-content: center;
  /* align-self: center; */
  align-items: center;
  /* opacity: ${(props) => (props.isActive ? 1 : 0.5)}; */
  /* opacity:1 */
  /* margin-top: 15px; */
`

const StyledView = styled.View`
  background-color: ${({ theme }) => theme.colorGreenLight};
  padding: 10px 25px;
  justify-content: center;
  /* align-self: center; */
  align-items: center;
  border-radius: 8px;

  opacity: ${(props) => (props.isActive ? 1 : 0.5)};
`

const greenButton = (props) => {
  return (
    <StyledTouchableOpacity
      onPress={props.onPressHandler}
      style={props.style}
      activeOpacity={0.5}
    >
      <StyledView isActive={props.isActive}>
        <StyledText>{props.children}</StyledText>
      </StyledView>
    </StyledTouchableOpacity>
  )
}

export default greenButton
