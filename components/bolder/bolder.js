import styled from 'styled-components/native'

const Bolder = styled.Text`
  font-size: ${(props) => props.fontSize || '20px'};
  color: ${(props) => props.theme[props.color] || props.theme.colorGreenLight};
  font-family: 'Poppins_600SemiBold';
`

export default Bolder
