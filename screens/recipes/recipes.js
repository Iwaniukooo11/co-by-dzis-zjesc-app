import React from 'react'
import { FlatList, ScrollView, Text } from 'react-native'
import styled from 'styled-components/native'

import Bolder from '../../components/bolder/bolder'
import Desc from '../../components/desc/desc'
import Layout from '../../layout/layout'
import SectionHeader from '../../components/sectionHeader/sectionHeader'
import MiniHeader from '../../components/miniHeader/miniHeader'
import GreenButton from '../../components/greenButton/greenButton'
import RecipeProposition from '../../components/recipeProposition/recipeProposition'

import theme from '../../layout/theme'
import { Icon } from 'react-native-elements'

import RecipeContent from '../../components/recipeContent/recipeContent'

const Line = styled.View`
  width: 100%;
  height: 3px;
  margin: 50px 0;
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
          Najbardziej pasujące jedzenie, które możesz zrobić to{' '}
          <Bolder>{firstFood.name}</Bolder>
        </Desc>

        <RecipeContent food={{ ...firstFood }} />

        <Line />

        {/* <MiniHeader>Inne pasujące dania:</MiniHeader> */}
        <SectionHeader small={true}>Inne pasujące dania:</SectionHeader>
        <FlatList
          data={foods}
          renderItem={({ item }) => (
            <RecipeProposition
              food={{ ...item }}
              // time={item.time}
              // name={item.name}
              keyExtractor={(item) => item.name}
            />
          )}
        />
      </ScrollView>
    </Layout>
  )
}

export default Recipes
