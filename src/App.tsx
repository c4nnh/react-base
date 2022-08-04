import React from 'react'
import styled from 'styled-components'
import tw, { theme } from 'twin.macro'

function App() {
  return (
    <div>
      <span className="text-green-500">React base</span>
      <StyledDiv>Styled Div</StyledDiv>
      <StyledWithAttrsDiv>Styled With Attrs Div</StyledWithAttrsDiv>
      <StyledWithPropsDiv color="blue">
        Styled With Props Div
      </StyledWithPropsDiv>
      <TwinMacroDiv>Twin Macro Div</TwinMacroDiv>
      <ThemeOfTwinMacroDiv>Theme Of Twin Macro Div</ThemeOfTwinMacroDiv>
    </div>
  )
}

export default App

const StyledDiv = styled.div`
  width: 50px;
  height: 100px;
  background-color: red;
`

const StyledWithAttrsDiv = styled.div.attrs({
  className: 'text-red-500',
})``

const StyledWithPropsDiv = styled.div<{ color: string }>`
  color: ${props => props.color};
`

const TwinMacroDiv = styled.div`
  ${tw`text-yellow-500`}
`
const ThemeOfTwinMacroDiv = styled.div`
  color: ${theme`colors.purple.500`};
`
