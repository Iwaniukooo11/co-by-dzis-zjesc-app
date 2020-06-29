import React from 'react'
import { Text, Button } from 'react-native'
import SectionHeader from '../../components/sectionHeader/sectionHeader'
import Desc from '../../components/desc/desc'
import Layout from '../../layout/layout'

const Select = (props) => {
  return (
    <Layout>
      <SectionHeader>Wybierz składniki</SectionHeader>
      <Desc>Zostaną one użyte, aby znaleźć odpowiedni przepis</Desc>
      <Button
        title="go to ad"
        onPress={() => props.navigation.navigate('Ad')}
      />
    </Layout>
  )
}

export default Select
