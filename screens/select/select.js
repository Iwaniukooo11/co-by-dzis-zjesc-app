import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'

import {
  Text,
  Button,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native'
import SectionHeader from '../../components/sectionHeader/sectionHeader'
import MiniHeader from '../../components/miniHeader/miniHeader'
import Desc from '../../components/desc/desc'
import SelectButton from '../../components/selectButton/selectButton'
import GreenButton from '../../components/greenButton/greenButton'
import Layout from '../../layout/layout'

import Collapsible from 'react-native-collapsible'
import { Icon } from 'react-native-elements'

import axios from '../../utils/axios'

const StyledFlatList = styled.FlatList`
  margin: 20px 0;
`

const StyledTouchableOpacity = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`

const Select = (props) => {
  const [categories, setCategories] = useState([])
  const [ingredients, setIngredients] = useState([])
  const [collapsedState, setCollapsedState] = useState({})
  const [selectedIngredients, setSelectedIngredients] = useState([])

  const setCollapsedHandler = (item) => {
    const _state = { ...collapsedState }
    _state[item] = !!!_state[item]
    setCollapsedState(_state)
    // alert(`click! Now is ${_state[item]}`)

    // const _state = hideAllIngredients()
    // // const _state = { ...collapsedState }
    // _state[item] = false
    // setCollapsedState(_state)
  }

  const hideAllIngredients = () => {
    const _collapsedState = { ...collapsedState }
    categories.forEach((category, i) => (_collapsedState[category] = true))
    // setCollapsedState({ [categories[0]]: true })
    setCollapsedState(_collapsedState)

    console.log('hideAllIngr: ', _collapsedState)
    return _collapsedState
  }

  useEffect(() => {
    ;(async () => {
      try {
        const catRes = await axios.get('/ingredient/all-categories')
        setCategories(catRes.data.data.data)

        const ingredientRes = await axios.get(
          '/ingredient?sort=category&limit=100'
        )
        setIngredients(ingredientRes.data.data.data)
        // console.log(ingredientRes.data.data.data)

        //true jak jest schowany!
        const _collapsedState = { ...collapsedState }
        catRes.data.data.data.forEach(
          (category, i) => (_collapsedState[category] = i > 0)
        )
        // setCollapsedState({ [categories[0]]: true })
        setCollapsedState(_collapsedState)
        // hideAllIngredients()
        console.log(_collapsedState)
      } catch {
        console.log('err from catch')
      }
    })()
  }, [])

  return ingredients.length > 0 ? (
    <Layout>
      <SectionHeader>Wybierz składniki</SectionHeader>
      <Desc>Zostaną one użyte, aby znaleźć odpowiedni przepis </Desc>

      <StyledFlatList
        data={categories}
        keyExtractor={(obj) => obj.name}
        renderItem={({ item }) => {
          return (
            <>
              <StyledTouchableOpacity onPress={() => setCollapsedHandler(item)}>
                <Icon
                  size={20}
                  name="caret-right"
                  type="font-awesome"
                  color="#2F3138"
                  style={{
                    marginRight: 10,
                    paddingLeft: 10,
                    transform: [
                      { translateY: -5 },
                      { translateX: collapsedState[item] ? 0 : 5 },
                      { rotate: collapsedState[item] ? 0 : '90deg' },
                    ],
                  }}
                />
                <MiniHeader>{item}</MiniHeader>
              </StyledTouchableOpacity>

              <Collapsible collapsed={collapsedState[item]} duration={100}>
                <FlatList
                  style={{ marginVertical: 5 }}
                  data={ingredients.filter((ingr) => ingr.category === item)}
                  renderItem={({ item }) => (
                    <SelectButton
                      name={item.name}
                      ingredients={[...selectedIngredients]}
                      setIngredients={setSelectedIngredients}
                    />
                  )}
                  keyExtractor={(obj) => obj._id}
                  numColumns={3}
                />
              </Collapsible>
            </>
          )
        }}
      />
      <GreenButton
        style={{
          alignSelf: 'center',
          // opacity: selectedIngredients.length > 0 ? 1 : 0.5,
        }}
        onPressHandler={() => {
          if (selectedIngredients.length > 0)
            props.navigation.navigate('Ad', {
              selectedIngredients: [...selectedIngredients],
            })
        }}
        isActive={selectedIngredients.length > 0}
      >
        Znajdź przepis!
      </GreenButton>
    </Layout>
  ) : (
    <Text>err</Text>
  )
}

export default Select
