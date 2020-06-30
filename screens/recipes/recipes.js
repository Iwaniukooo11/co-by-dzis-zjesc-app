import React from 'react'
import { FlatList, ScrollView } from 'react-native'
import styled from 'styled-components/native'

import Desc from '../../components/desc/desc'
import Layout from '../../layout/layout'
import SectionHeader from '../../components/sectionHeader/sectionHeader'
import MiniHeader from '../../components/miniHeader/miniHeader'
import GreenButton from '../../components/greenButton/greenButton'
import RecipeProposition from '../../components/recipeProposition/recipeProposition'

import theme from '../../layout/theme'
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

const Line = styled.View`
  width: 100%;
  height: 3px;
  margin: 60px 0 20px;
  background-color: ${({ theme }) => theme.colorGreenLight};
`

const Recipes = (props) => {
  const foods = [...props.route.params.food]
  const firstFood = foods.shift()
  return (
    <Layout>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SectionHeader>Możliwe dania</SectionHeader>
        <Desc>
          Najbardziej pasujące jedzenie, które możesz zrobić to {firstFood.name}
        </Desc>

        <LineWrapper>
          <Icon
            size={22}
            name="alarm"
            type="material"
            color={theme.colorGreenLight}
            style={{ transform: [{ translateY: -3 }], marginRight: 10 }}
          />
          <MiniHeader color="black">
            Do zrobienia w {firstFood.time}min{' '}
          </MiniHeader>
        </LineWrapper>

        <MiniHeader>Składniki:</MiniHeader>
        <ScrollView style={{ flexGrow: 0, marginBottom: 10 }}>
          <FlatList
            data={firstFood.ingredients}
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
            data={firstFood.content}
            renderItem={({ item, index }) => (
              <StyledIngredient>
                <StyledIndexer>{`${index * 1 + 1}.  `}</StyledIndexer>
                <Desc> {item}</Desc>
              </StyledIngredient>
            )}
            keyExtractor={(item) => item}
          />
        </ScrollView>
        <Line />

        <MiniHeader>Inne pasujące dania:</MiniHeader>

        <FlatList
          data={foods}
          renderItem={({ item }) => (
            <RecipeProposition
              time={item.time}
              name={item.name}
              keyExtractor={(item) => item.name}
            />
          )}
        />
      </ScrollView>
    </Layout>
  )
}

export default Recipes
