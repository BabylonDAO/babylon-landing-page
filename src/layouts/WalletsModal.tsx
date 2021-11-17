import React, { FC, useCallback } from 'react'
import styled from 'styled-components'
import { useWallet } from '@solana/wallet-adapter-react'
import { WalletName } from '@solana/wallet-adapter-wallets'
import { Modal } from '../components'
import { useWalletModal } from '../context'
import { CenteredDiv, CenteredImg, SpaceBetweenDiv } from '../styles'

const BODY = styled(CenteredDiv)`
  flex-direction: column;
`

const ICON = styled(CenteredImg)`
  ${({ theme }) => theme.measurements('32px')}
  ${({ theme }) => theme.roundedBorders}
  background-color: black;

  img {
    ${({ theme }) => theme.measurements('16px')}
  }
`

const NAME = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.text1};
`

const WALLET = styled(SpaceBetweenDiv)`
  width: 100%;
  margin-top: 16px;
  padding: 8px;
  padding-left: 16px;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.walletModalWallet};
  ${({ theme }) => theme.smallShadow}
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.secondary2};

    span {
      color: white;
    }
  }
`

export const WalletsModal: FC = () => {
  const { wallets, select } = useWallet()
  const { setVisible, visible } = useWalletModal()

  const handleCancel = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      if (!event.defaultPrevented) setVisible(false)
    },
    [setVisible]
  )

  const handleWalletClick = useCallback(
    (event: React.MouseEvent<HTMLElement>, walletName: WalletName) => {
      select(walletName)
      handleCancel(event)
    },
    [select, handleCancel]
  )

  return (
    <Modal setVisible={setVisible} title="Connect to a wallet" visible={visible}>
      <BODY>
        {wallets.map((wallet, index) => (
          <WALLET key={index} onClick={(event) => handleWalletClick(event, wallet.name)}>
            <NAME>{wallet.name}</NAME>
            <ICON>
              <img src={wallet.icon} alt="icon" />
            </ICON>
          </WALLET>
        ))}
      </BODY>
    </Modal>
  )
}
