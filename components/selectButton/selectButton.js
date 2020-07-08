import React, { useState, useEffect } from 'react'
import { TouchableWithoutFeedback } from 'react-native'
import styled from 'styled-components/native'

const Btn = styled.View`
  color: ${(props) =>
    props.active ? props.theme.colorWhite : props.theme.colorBlack};
  padding: 3px 0px;
  border: 1.5px solid ${({ theme }) => theme.colorGreenLight};
  background: ${(props) =>
    props.active ? props.theme.colorGreenLight : props.theme.colorWhite};
  font-family: 'Poppins_400Regular';
  border-radius: 10px;
  letter-spacing: 2px;
  margin: 8px 5px;
  width: 30%;
  justify-content: center;
`

const StyledText = styled.Text`
  font-family: 'Poppins_400Regular';
  letter-spacing: 1px;
  color: ${(props) =>
    props.isSelected ? props.theme.colorWhite : props.theme.colorBlack};
  text-align: center;
`

const selectButton = (props) => {
  const [isSelected, setIsSelected] = useState(false)
  useEffect(() => setIsSelected(props.ingredients.includes(props.name)), [
    props.ingredients,
  ])

  const onPressHandler = () => {
    setIsSelected(!isSelected)

    if (props.ingredients.includes(props.name)) {
      const _state = props.ingredients.filter((el) => el !== props.name)
      props.setIngredients(_state)
    } else {
      const _state = [...props.ingredients]
      _state.push(props.name)
      props.setIngredients(_state)
    }
  }

  return (
    <TouchableWithoutFeedback onPress={onPressHandler}>
      <Btn active={isSelected}>
        <StyledText isSelected={isSelected}>{props.name}</StyledText>
      </Btn>
    </TouchableWithoutFeedback>
  )
}

export default selectButton
