import React, { useState } from 'react'
import { Text, TouchableWithoutFeedback } from 'react-native'
import styled from 'styled-components/native'

const Btn = styled.View`
  font-size: 20px;
  color: ${(props) =>
    props.active ? props.theme.colorWhite : props.theme.colorBlack};
  padding: 3px 20px;
  border: 1.5px solid ${({ theme }) => theme.colorGreenLight};
  background: ${(props) =>
    props.active ? props.theme.colorGreenLight : props.theme.colorWhite};
  font-family: 'Poppins_400Regular';
  border-radius: 10px;
  letter-spacing: 2px;
  margin: 10px;
`

const selectButton = (props) => {
  const [isSelected, setIsSelected] = useState(false)

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        setIsSelected(!isSelected)
        console.log('props: ', props)

        if (props.ingredients.includes(props.name)) {
          const _state = props.ingredients.filter((el) => el !== props.name)
          props.setIngredients(_state)
          // console.log('props ignr; ', _state)
        } else {
          const _state = [...props.ingredients]
          _state.push(props.name)
          props.setIngredients(_state)
          // console.log('props ignr; ', _state)
        }
      }}
    >
      <Btn active={isSelected}>
        <Text
          style={{
            fontFamily: 'Poppins_400Regular',
            letterSpacing: 1,
            color: isSelected ? '#fff' : '#2F3138',
            fontSize: 16,
          }}
        >
          {props.name}
        </Text>
      </Btn>
    </TouchableWithoutFeedback>
  )
}

export default selectButton
