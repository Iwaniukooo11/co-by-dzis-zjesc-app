import styled from 'styled-components/native'

const miniHeader = styled.Text`
  font-size: 24px;
  font-family: ${(props) =>
    props.light ? ' Poppins_400Regular' : 'Poppins_600SemiBold'};
  color: ${(props) =>
    props.color === 'black'
      ? props.theme.colorBlack
      : props.theme.colorGreenLight};
`
export default miniHeader
