import React from 'react'
import { Text, StyleSheet } from 'react-native'
import styled from 'styled-components/native'

const SectionHeader = styled.Text`
  font-size: 32px;
  font-family: 'Poppins_600SemiBold';
  margin-bottom: 10px;
  text-align: left;
  color: ${({ theme }) => theme.colorBlack};
  &::first-letter {
    color: ${({ theme }) => theme.colorGreenLight};
  }
`

const Header = (props) => {
  return (
    <>
      <SectionHeader>
        <Text style={{ color: '#1DD1A1' }}>
          {props.children[0].toUpperCase()}
        </Text>
        {props.children.slice(1).toLowerCase()}
      </SectionHeader>
    </>
  )
}

export default Header
