import React from 'react'
import { Router } from 'router/Router'
import { AuthProvider } from 'shared/contexts/AuthContext'
import { ErrorProvider } from 'shared/contexts/ErrorContext'
import { Provider as StoreProvider } from 'react-redux'
import { QueryClientProvider } from 'react-query'
import { ThemeProvider } from '@mui/material/styles'
import { store } from './store/store'
import { theme } from 'shared/styles/theme'
import { client } from 'core/utils/QueryClient'
import { AutoLogin } from 'shared/hocs/AutoLogin'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={client}>
        <StoreProvider store={store}>
          <ErrorProvider>
            <AuthProvider>
              <AutoLogin>
                <Router />
              </AutoLogin>
            </AuthProvider>
          </ErrorProvider>
        </StoreProvider>
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export default App
