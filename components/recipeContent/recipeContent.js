import React from 'react'
import { FlatList, ScrollView, View, SafeAreaView } from 'react-native'

import Bolder from '../bolder/bolder'
import SectionHeader from '../sectionHeader/sectionHeader'
import MiniHeader from '../miniHeader/miniHeader'
import styled from 'styled-components/native'
import theme from '../../layout/theme'
import Desc from '../desc/desc'

import { Icon } from 'react-native-elements'

const LineWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 20px 0 20px;
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
      {props.showName && <SectionHeader>{props.food.name}</SectionHeader>}
      <LineWrapper>
        <Icon
          size={22}
          name="alarm"
          type="material"
          color={theme.colorGreenLight}
          style={{ transform: [{ translateY: -3 }], marginRight: 10 }}
        />
        <MiniHeader color="black">
          Do zrobienia w <Bolder fontSize={24}>{props.food.time}min</Bolder>
        </MiniHeader>
      </LineWrapper>
      <MiniHeader>Składniki:</MiniHeader>

      <SafeAreaView style={{ marginBottom: 40 }}>
        <FlatList
          style={{ flexGrow: 0 }}
          data={props.food.ingredients}
          renderItem={({ item }) => (
            <StyledIngredient>
              <StyledIndexer>
                {item.quantityType === 'jednostki'
                  ? `${item.quantity}x `
                  : `${item.quantity == 0 ? '' : item.quantity}${
                      item.quantityType
                    } `}
              </StyledIndexer>
              {`${item.ingredient.name}`}
            </StyledIngredient>
          )}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
      <MiniHeader>Przepis: </MiniHeader>
      <SafeAreaView style={{ marginBottom: 10 }}>
        <FlatList
          data={props.food.content}
          style={{ flexGrow: 0 }}
          renderItem={({ item, index }) => (
            <StyledIngredient style={{ marginVertical: 5 }}>
              <StyledIndexer>{`${index * 1 + 1}.  `}</StyledIndexer>
              <Desc lineHeight={1.1}> {item}</Desc>
            </StyledIngredient>
          )}
          keyExtractor={(item) => item}
        />
      </SafeAreaView>
    </>
  )
}

export default recipeContent
