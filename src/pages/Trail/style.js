import styled from 'styled-components'
import { Themes } from '../../styles/themes'

export const DivTrail = styled.div`
  width: 100vw;
  height: 55vh;
  background-color: ${Themes.purple};
  border-radius: 0 0 30px 30px;
  text-align: center;
  padding-top: 5vh;
`
export const DivContent = styled.div`
  width: 100vw;
  height: 45vh;
`
export const Title = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: ${Themes.white};
`
export const TrilhaContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
`;

export const Row =styled.svg`
  position: absolute;
  top: 30vh;
  right: 0vw;
  flex-shrink: 0;
  stroke-width: 3px;
  stroke: var(--ClearBlue, #95D5F8);
`
