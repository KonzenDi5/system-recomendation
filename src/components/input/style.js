import styled from 'styled-components'
import { Themes } from '../../styles/themes'

export const InputStyle = styled.input`
  padding: 15px 20px;
  margin-bottom: 10px;
  width: 250px;
  background-color: ${Themes.purple};
  border: none;
  color: ${Themes.white};
  border-radius: 30px;

  &:focus {
    border: none;
    outline: none;
  }
  
  &::placeholder {
    color: ${Themes.white};
  }
`
