import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import Layout from '../../layout/layout'
import SectionHeader from '../../components/sectionHeader/sectionHeader'
import GreenButton from '../../components/greenButton/greenButton'

import { AdMobBanner } from 'expo-ads-admob'

import axios from '../../utils/axios'
import theme from '../../layout/theme'

const Ad = (props) => {
  const [food, setFood] = useState(false)
  const [isAdLoad, setIsAdLoad] = useState(false)
  const [timeLeft, setTimeLeft] = useState(3)

  useEffect(() => {
    if (timeLeft <= 0) return ''

    const intervalId = setInterval(() => {
      if (timeLeft > 0) setTimeLeft(timeLeft - 1)
    }, 1000)

    return () => clearInterval(intervalId)
  }, [timeLeft])

  useEffect(() => {
    ;(async () => {
      const foods = await axios.get(
        `/food?ingredients=${props.selectedIngredients.join(',')}`
      )
      setFood(foods.data.data.data)
    })()
  }, [])
  return (
    <Layout>
      <SectionHeader>Dzięki reklamie apka jest darmowa!</SectionHeader>

      <AdMobBanner
        adUnitID="ca-app-pub-9778931413335470/5199726999"
        bannerSize="mediumRectangle"
        // bannerSize="smartBanner"
        servePersonalizedAds={true}
        style={{ marginVertical: 40 }}
        onAdViewDidReceiveAd={() => setIsAdLoad(true)}
      />
      <GreenButton
        isActive={timeLeft == 0 && food !== false}
        style={{ alignSelf: 'center' }}
        onPressHandler={() => props.navigation.navigate('Recipes', { food })}
      >
        {timeLeft != 0 ? timeLeft : 'Zobacz przepisy!'}
      </GreenButton>
    </Layout>
  )
}

export default Ad
