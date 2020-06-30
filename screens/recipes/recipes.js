import React from 'react'
import styled from 'styled-components/native'

import { Text, FlatList, ScrollView, SafeAreaView } from 'react-native'
import Desc from '../../components/desc/desc'
import Layout from '../../layout/layout'
import SectionHeader from '../../components/sectionHeader/sectionHeader'
import MiniHeader from '../../components/miniHeader/miniHeader'
import GreenButton from '../../components/greenButton/greenButton'

import theme from '../../layout/theme'

import { Icon } from 'react-native-elements'

const LineWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 20px 0;
`

const StyledIngredient = styled(Desc)`
  color: ${({ theme }) => theme.colorBlack};
  /* font-family: 'Poppins_600SemiBold'; */
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
  // console.log('|PROOOPS|', props)
  const foods = [...props.route.params.food]
  return (
    <Layout>
      {/* <SafeAreaView
        style={{
          borderBottomWidth: 4,
          borderBottomColor: theme.colorGreenLight,
        }}
      > */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <SectionHeader>Możliwe dania</SectionHeader>
        <Desc>
          Najbardziej pasujące jedzenie, które możesz zrobić to {foods[0].name}
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
            Do zrobienia w {foods[0].time}min{' '}
          </MiniHeader>
        </LineWrapper>

        <MiniHeader>Składniki:</MiniHeader>
        <ScrollView style={{ flexGrow: 0, marginBottom: 20 }}>
          <FlatList
            // contentContainerStyle={styles.recipeList}
            data={foods[0].ingredients}
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
        <ScrollView style={{ flexGrow: 0, marginBottom: 20 }}>
          <FlatList
            data={foods[0].content}
            renderItem={({ item, index }) => (
              <StyledIngredient>
                <StyledIndexer>{`${index * 1 + 1}.  `}</StyledIndexer>
                <Desc> {item}</Desc>
              </StyledIngredient>
            )}
          />
        </ScrollView>
        {/* </SafeAreaView> */}
        <Line />

        <MiniHeader>Inne pasujące dania:</MiniHeader>
      </ScrollView>
    </Layout>
  )
}

export default Recipes
