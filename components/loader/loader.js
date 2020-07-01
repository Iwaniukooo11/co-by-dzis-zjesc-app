import React from 'react'
import { ActivityIndicator } from 'react-native'
import styled from 'styled-components/native'
import theme from '../../layout/theme'

const Loader = () => {
  return (
    <ActivityIndicator
      size="large"
      color={theme.colorGreenLight}
      style={{ marginTop: 150 }}
    />
  )
}

export default Loader
