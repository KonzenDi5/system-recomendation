import styled from 'styled-components'
import { Themes } from '../../styles/themes'

export const ButtonStyle = styled.button`
  padding: 10px 30px;
  background-color: ${props => props.color === 'blue' ? Themes.lightBlue : Themes.purple};
  color: ${props => props.color === 'blue' ? Themes.purple : Themes.lightBlue};
  border: none;
  border-radius: 30px;
  cursor: pointer;
  &:hover {
    color: ${Themes.darkBlue};
  }
`;