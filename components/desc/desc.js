import React from 'react'
import styled from 'styled-components/native'

const Desc = styled.Text`
  color: ${({ theme }) => theme.colorGrey};
  font-size: 20px;
  font-family: 'Poppins_400Regular';
  text-align: ${(props) => (props.center ? 'center' : 'left')};
`
export default Desc
