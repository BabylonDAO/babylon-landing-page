import React from 'react'
import { Router } from './Router'
import { AccountsProvider, SettingsProvider, TokenRegistryProvider, WalletProvider } from './context'
import ThemeProvider from './theme'
import './App.less'

export default function App(): JSX.Element {
  return (
    <ThemeProvider>
      <SettingsProvider>
        <WalletProvider>
          <TokenRegistryProvider>
            <AccountsProvider>
              <Router />
            </AccountsProvider>
          </TokenRegistryProvider>
        </WalletProvider>
      </SettingsProvider>
    </ThemeProvider>
  )
}
