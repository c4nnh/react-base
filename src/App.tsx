import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import tw, { theme } from 'twin.macro'
import { useAuthStore } from './store'
import { Navigate } from 'react-router-dom'
import { Button, Checkbox } from '@mui/material'

function App() {
  const { t, i18n } = useTranslation()
  const { user } = useAuthStore()

  if (!user) {
    return <Navigate to="/auth" replace />
  }

  return (
    <div className="flex flex-col">
      <span className="text-green-500">React base</span>
      <StyledDiv>Styled Div</StyledDiv>
      <StyledWithAttrsDiv>Styled With Attrs Div</StyledWithAttrsDiv>
      <StyledWithPropsDiv color="blue">
        Styled With Props Div
      </StyledWithPropsDiv>
      <TwinMacroDiv>Twin Macro Div</TwinMacroDiv>
      <ThemeOfTwinMacroDiv>Theme Of Twin Macro Div</ThemeOfTwinMacroDiv>
      <span>{t('usingI18next')}</span>
      <span>Selected language: {i18n.language}</span>
      <button className="bg-red-200" onClick={() => i18n.changeLanguage('en')}>
        EN
      </button>
      <button className="bg-blue-200" onClick={() => i18n.changeLanguage('vi')}>
        VI
      </button>
      <Button variant="text">Text</Button>
      <Checkbox defaultChecked />
      <Checkbox defaultChecked color="secondary" />
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
