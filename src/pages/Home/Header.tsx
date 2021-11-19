import React, { FC } from 'react'
import styled from 'styled-components'
import { CenteredDiv, CenteredImg, SpaceBetweenDiv } from '../../styles'

const LOGO = styled(CenteredDiv)`
  > div {
    ${({ theme }) => theme.measurements('48px')}
  }

  > span {
    margin-left: 16px;
    font-size: 20px;
    color: ${({ theme }) => theme.primary1};
  }
`

const TABS = styled.div`
  > button {
    white-space: nowrap;
    margin-left: 64px;
    padding: 8px 24px;
    border: none;
    border-radius: 8px;
    background-color: #0E1A45;
    transition: background-color ${({ theme }) => theme.hapticTransitionTime} ease-in-out;
    cursor: pointer;
    
    ${({ theme }) => theme.mediaWidth.upToSmall`
      margin-left: 16px;
    `}
    
    :hover {
      background-color: ${({ theme }) => theme.primary2h};
    }
    
    a {
      color: white;
    }
  }

  > a {
    margin-right: 16px;
    font-size: 15px;
    color: #0E1A45;
    transition: color ${({ theme }) => theme.hapticTransitionTime} ease-in-out;
    cursor: pointer;

    ${({ theme }) => theme.mediaWidth.upToMedium`
      display: none;
    `}

    :hover {
      color: ${({ theme }) => theme.primary2h};
    }
  }
`

const WRAPPER = styled(SpaceBetweenDiv)`
  padding: 32px 0;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    margin: 0 16px;
  `}
  ${({ theme }) => theme.mediaWidth.fromSmall`
    width: 1200px;
    max-width: 80%;
    margin: 0 auto;
  `}
`

export const Header: FC = () => {
  return (
    <WRAPPER>
      <LOGO>
        <CenteredImg>
          <img src={`${process.env.PUBLIC_URL}/img/assets/logo.png`} alt="" />
        </CenteredImg>
        <span>BabylonDAO</span>
      </LOGO>
      <TABS>
        <a>Stake</a>
        <a>Bond</a>
        <a>FAQs</a>
        <a>Get Involved</a>
        <button>
          <a>Enter App</a>
        </button>
      </TABS>
    </WRAPPER>
  )
}
