import React from 'react'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import GlobalStyle from './styles/global'
import usePersistedState from './utils/usePersistedState'
import Routes from './routes'

import ThemeSwitcher from './components/ThemeSwitcher'
import light from './styles/themes/light'
import dark from './styles/themes/dark'

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', dark)

  const toggleTheme = (): void => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <Routes />
      <ThemeSwitcher toggleTheme={toggleTheme} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
