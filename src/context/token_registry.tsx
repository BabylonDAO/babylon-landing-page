import React, { createContext, FC, ReactNode, useContext, useEffect, useState } from 'react'
import { TokenInfo, TokenListProvider } from '@solana/spl-token-registry'
import { useConnectionConfig } from './settings'

interface ITokenRegistryConfig {
  getTokenInfoFromSymbol: (x: string) => TokenInfo | undefined
  tokens: TokenInfo[]
}

const TokenRegistryContext = createContext<ITokenRegistryConfig | null>(null)

export const TokenRegistryProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { chainId } = useConnectionConfig()
  const [tokens, setTokens] = useState<TokenInfo[]>([])

  const getTokenInfoFromSymbol = (symbol: string) => tokens.find(({ symbol: x }) => x === symbol)

  useEffect(() => {
    ;(async () => {
      const list = (await new TokenListProvider().resolve()).filterByChainId(chainId).getList()
      list.sort(({ symbol: a }, { symbol: b }) => a.localeCompare(b))
      setTokens(list)
    })()
  }, [chainId])

  return (
    <TokenRegistryContext.Provider
      value={{
        getTokenInfoFromSymbol,
        tokens
      }}
    >
      {children}
    </TokenRegistryContext.Provider>
  )
}

export const useTokenRegistry = (): ITokenRegistryConfig => {
  const context = useContext(TokenRegistryContext)
  if (!context) {
    throw new Error('Missing token registry context')
  }

  const { getTokenInfoFromSymbol, tokens } = context
  return { getTokenInfoFromSymbol, tokens }
}
