import styled from 'styled-components'
import { Themes } from '../../styles/themes'

export const DivContent = styled.div`
  display: flex;
`

export const ProgressBar = styled.div`
  width: 90%;
  height: 15px;
  background-color: ${Themes.lightBlue};
  border-radius: 10px;
  overflow: hidden;
`

export const Progress = styled.div`
  width: ${props => props.width || '0%'};
  height: 100%;
  border-radius: 10px;
  background-color: ${Themes.purple};
`