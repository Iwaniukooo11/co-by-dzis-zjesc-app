import React, { useState, useEffect } from 'react'
import { Text, FlatList, StyleSheet, View, SafeAreaView } from 'react-native'
import styled from 'styled-components/native'

import Layout from '../../layout/layout'
import Loader from '../../components/loader/loader'
import SectionHeader from '../../components/sectionHeader/sectionHeader'
import MiniHeader from '../../components/miniHeader/miniHeader'
import Desc from '../../components/desc/desc'
import SelectButton from '../../components/selectButton/selectButton'
import GreenButton from '../../components/greenButton/greenButton'

import Collapsible from 'react-native-collapsible'
import { Icon } from 'react-native-elements'
import axios from '../../utils/axios'
import { ScrollView } from 'react-native-gesture-handler'

const styles = StyleSheet.create({
  list: {
    // flexGrow: 1,
    // backgroundColor: 'red',
  },
  listContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignContent: 'center',
    flex: 1,
    // flexDirection: 'row',
    // flexWrap: 'wrap',
  },
})

const StyledFlatList = styled.FlatList`
  margin: 20px 0;
`

const StyledTouchableOpacity = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin: 3px 0;
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
  }

  const hideAllIngredients = () => {
    const _collapsedState = { ...collapsedState }
    categories.forEach((category, i) => (_collapsedState[category] = true))
    setCollapsedState(_collapsedState)

    console.log('hideAllIngr: ', _collapsedState)
    return _collapsedState
  }

  // useEffect(() => {
  //   alert('render!')
  //   setCollapsedState({})
  //   setSelectedIngredients([])
  // }, [])
  // props.navigation.addListener('willFocus', (payload) => {
  //   alert('uhuhu')
  //   setCollapsedState({})
  //   setSelectedIngredients([])
  // })
  const fixCollapse = (data) => {
    const _collapsedState = [...data]
    data.forEach((category, i) => (_collapsedState[category] = i > 0))
    setCollapsedState(_collapsedState)
    console.log('DATA: ', _collapsedState)
  }

  useEffect(() => {
    ;(async () => {
      try {
        // alert('uhuhu')
        if (props?.route?.params?.random) {
          // alert('kurwa random')
          setSelectedIngredients([])
          setCollapsedState({})
          fixCollapse([...categories])
          // alert(selectedIngredients.length)
        } else {
          // alert(';not random')
          const catRes = await axios.get('/ingredient/all-categories')
          setCategories(catRes.data.data.data)

          const ingredientRes = await axios.get(
            '/ingredient?sort=category&limit=100'
          )
          setIngredients(ingredientRes.data.data.data)

          //true jak jest schowany!
          // const _collapsedState = { ...collapsedState }
          // catRes.data.data.data.forEach(
          //   (category, i) => (_collapsedState[category] = i > 0)
          // )
          // setCollapsedState(_collapsedState)
          // console.log(_collapsedState)
          fixCollapse(catRes.data.data.data)
        }
      } catch (err) {
        console.log('err from catch', err)
      }
    })()
  }, [props?.route?.params?.random])

  return ingredients.length > 0 ? (
    <Layout>
      <SectionHeader>Wybierz składniki</SectionHeader>
      <Desc>Zostaną one użyte, aby znaleźć odpowiedni przepis </Desc>

      <StyledFlatList
        data={categories}
        keyExtractor={(obj) => obj.name}
        showsVerticalScrollIndicator={false}
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

              <Collapsible collapsed={collapsedState[item]} duration={0}>
                <FlatList
                  style={{ marginVertical: 5 }}
                  contentContainerStyle={styles.listContainer}
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
        }}
        onPressHandler={() => {
          props.navigation.navigate('Ad', {
            selectedIngredients: [...selectedIngredients],
          })
        }}
        isActive={selectedIngredients.length > 4}
      >
        {/* Znajdź przepis! */}
        {selectedIngredients.length >= 5
          ? 'Znajdź przepis!'
          : `Zaznacz jeszcze ${5 - selectedIngredients.length}`}
      </GreenButton>
    </Layout>
  ) : (
    <Loader />
  )
}

export default Select
