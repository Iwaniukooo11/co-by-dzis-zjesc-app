import styled from 'styled-components/native'
import React from 'react'
import { TouchableOpacity, View } from 'react-native'

const StyledText = styled.Text`
  font-size: 22px;
  font-family: 'Poppins_600SemiBold';
  color: ${({ theme }) => theme.colorWhite};
`

const StyledTouchableOpacity = styled.TouchableOpacity.attrs((props) => ({
  style: props.style,
}))`
  justify-content: center;
  align-items: center;
`

const StyledView = styled.View`
  background-color: ${({ theme }) => theme.colorGreenLight};
  padding: 10px 25px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  opacity: ${(props) => (props.isActive ? 1 : 0.5)};
`

const greenButton = (props) => {
  return (
    <StyledTouchableOpacity
      onPress={props.isActive ? props.onPressHandler : null}
      style={props.style}
      activeOpacity={0.5}
    >
      <StyledView isActive={props.isActive} style={props.style}>
        <StyledText>{props.children}</StyledText>
      </StyledView>
    </StyledTouchableOpacity>
  )
}

export default greenButton
