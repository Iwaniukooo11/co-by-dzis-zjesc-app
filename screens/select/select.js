import React from 'react'
import { Text, Button } from 'react-native'

const Select = (props) => {
  return (
    <>
      <Text>select</Text>
      <Button
        title="go to ad"
        onPress={() => props.navigation.navigate('Ad')}
      />
    </>
  )
}

export default Select
