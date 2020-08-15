import React from 'react'
import { FlatList, ScrollView, Text, View } from 'react-native'
import styled from 'styled-components/native'
import { AdMobBanner } from 'expo-ads-admob'

import Bolder from '../../components/bolder/bolder'
import Desc from '../../components/desc/desc'
import Layout from '../../layout/layout'
import SectionHeader from '../../components/sectionHeader/sectionHeader'
import GreenButton from '../../components/greenButton/greenButton'
import RecipeProposition from '../../components/recipeProposition/recipeProposition'
import RecipeContent from '../../components/recipeContent/recipeContent'

import theme from '../../layout/theme'

const Line = styled.View`
  width: 100%;
  height: 3px;
  margin: 50px 0;
  margin-bottom: ${(props) => (props.first ? '0px' : '50px')};
  margin-top: ${(props) => (props.second ? '30px' : '50px')};
  background-color: ${({ theme }) => theme.colorGreenLight};
`

const Recipes = (props) => {
  const foods = [...props.route.params.food] || []

  const firstFood = foods.shift()
  return (
    <Layout>
      <AdMobBanner
        adUnitID="ca-app-pub-9778931413335470/1103935823"
        // bannerSize="banner"
        servePersonalizedAds={true}
        style={{ position: 'absolute', left: 0, bottom: 0, zIndex: 100 }}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginBottom: 40 }}
      >
        <SectionHeader>Możliwe dania</SectionHeader>
        {firstFood ? (
          <>
            <Desc>
              {/* Najbardziej pasujące jedzenie, które możesz zrobić to{' '} */}
              Danie najbardziej odpowiadające posiadanym składnikom to
              <Bolder>{firstFood.name}</Bolder>
            </Desc>

            <RecipeContent food={{ ...firstFood }} />

            <Line first />
            <Desc center style={{ marginTop: 25, marginBottom: 10 }}>
              Nic Cię nie satysfakcjonuje?
            </Desc>
            <GreenButton
              isActive={true}
              onPressHandler={() =>
                props.navigation.navigate('Select', { random: Math.random() })
              }
            >
              Szukaj ponownie
            </GreenButton>
            <Line second />
          </>
        ) : (
          <>
            <Desc center style={{ marginTop: 30 }}>
              Niestety, nie ma żadnego dania, które można zrobić z wybranych
              przez Ciebie podpisów
            </Desc>
            <Desc center style={{ marginVertical: 20 }}>
              Wybierz więcej składników!
            </Desc>

            <GreenButton
              isActive={true}
              onPressHandler={() =>
                props.navigation.navigate('Select', { random: Math.random() })
              }
            >
              Szukaj ponownie
            </GreenButton>
          </>
        )}

        {foods.length > 0 && (
          <>
            <SectionHeader small={true}>Inne pasujące dania:</SectionHeader>
            <FlatList
              data={foods}
              contentContainerStyle={{ flexGrow: 1 }}
              renderItem={({ item }) => (
                <RecipeProposition
                  food={{ ...item }}
                  keyExtractor={(item) => item.name}
                />
              )}
            />
          </>
        )}
      </ScrollView>
    </Layout>
  )
}

export default Recipes
