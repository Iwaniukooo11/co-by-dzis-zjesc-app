import React from 'react'
import { FlatList, ScrollView } from 'react-native'
import MiniHeader from '../miniHeader/miniHeader'
import styled from 'styled-components/native'
import theme from '../../layout/theme'
import Desc from '../desc/desc'
import { Icon } from 'react-native-elements'

const LineWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 20px 0 10px;
`

const StyledIngredient = styled(Desc)`
  color: ${({ theme }) => theme.colorBlack};
  margin-left: 10px;
`
const StyledIndexer = styled(Desc)`
  color: ${({ theme }) => theme.colorGreenLight};
  font-family: 'Poppins_600SemiBold';
  width: 60px;
`

const recipeContent = (props) => {
  return (
    <>
      <LineWrapper>
        <Icon
          size={22}
          name="alarm"
          type="material"
          color={theme.colorGreenLight}
          style={{ transform: [{ translateY: -3 }], marginRight: 10 }}
        />
        <MiniHeader color="black">
          Do zrobienia w {props.food.time}min{' '}
        </MiniHeader>
      </LineWrapper>
      <MiniHeader>Składniki:</MiniHeader>
      <ScrollView style={{ flexGrow: 0, marginBottom: 10 }}>
        <FlatList
          data={props.food.ingredients}
          renderItem={({ item }) => (
            <StyledIngredient>
              <StyledIndexer>{`${item.quantity}x  `}</StyledIndexer>
              {item.ingredient.name}
            </StyledIngredient>
          )}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
      <MiniHeader>Przepis: </MiniHeader>
      <ScrollView style={{ flexGrow: 0, marginBottom: 10 }}>
        <FlatList
          data={props.food.content}
          renderItem={({ item, index }) => (
            <StyledIngredient>
              <StyledIndexer>{`${index * 1 + 1}.  `}</StyledIndexer>
              <Desc> {item}</Desc>
            </StyledIngredient>
          )}
          keyExtractor={(item) => item}
        />
      </ScrollView>
    </>
  )
}

export default recipeContent
