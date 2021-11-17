import React, { FC } from 'react'
import styled from 'styled-components'
import { CenteredDiv, FlexColumnDiv } from '../../styles'
import { monetaryFormatValue } from '../../utils'

const BOTTOM = styled.div`
  text-align: center;

  ${({ theme }) => theme.mediaWidth.fromMedium`
    width: 40vw;
  `}
`

const CENTER = styled(CenteredDiv)`
  ${({ theme }) => theme.mediaWidth.upToSmall`
    flex-direction: column;
    
    > div:last-child {
      margin: 80px 0;
    }
  `}
  ${({ theme }) => theme.mediaWidth.fromSmall`
    width: 100%;
    margin: 120px 0;
  `}
  ${({ theme }) => theme.mediaWidth.fromMedium`
    > div:last-child {
      width: 40vw;
    }
  `}
`

const STAKE = styled(FlexColumnDiv)`
  ${({ theme }) => theme.mediaWidth.upToSmall`
    align-items: center;
  `}
  ${({ theme }) => theme.mediaWidth.fromSmall`
    align-items: flex-end;
    border-right: solid 1px white;
    margin-right: 44px;
    padding-right: 44px;
  `}
  ${({ theme }) => theme.mediaWidth.fromMedium`
    margin: 0 64px;
    padding-right: 64px;
  `}
  
  > button {
    white-space: nowrap;
    padding: 8px 32px;
    border-radius: 20px;
    border: none;
    background-color: ${({ theme }) => theme.secondary2};
    cursor: pointer;
    transition: background-color ${({ theme }) => theme.hapticTransitionTime} ease-in-out;
    
    span {
      color: black;
    }
    
    :hover {
      background-color: ${({ theme }) => theme.secondary2h};        
    }
  }
  
  > span:first-child {
    font-size: 50px;
    color: ${({ theme }) => theme.secondary2};
  }
  
  > span:nth-child(2) {
    margin-bottom: 24px;
  }
`

const WRAPPER = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.primary2};
  
  ${({ theme }) => theme.mediaWidth.upToSmall`
    text-align: center;
  `}

  > div {
    flex-direction: column;
    width: 1200px;
    max-width: 80%;
    margin: 15vh auto;
    
    > h2 {
      font-size: 40px;
      font-weight: bold;
      color: white;
    }
    
    h3 {
      font-size: 28px;
      color: white;
    }
    
    h4 {
      line-height: 24px;
      color: white;
    }
    
    h5 {
      margin: 16px 0;
      font-size: 16px;
      color: ${({ theme }) => theme.grey1};
    }
  }
`

export const Staking: FC = () => {
  const aPY = 0

  return (
    <WRAPPER>
      <CenteredDiv>
        <h2>
          Sustainable Staking APY
        </h2>
        <CENTER>
          <STAKE>
            <span>{monetaryFormatValue(aPY)}%</span>
            <span>BABYLON Staking APY</span>
            <button>
              <span>Stake Now</span>
            </button>
          </STAKE>
          <div>
            <h3>Treasury Regulated APY</h3>
            <h5>
              Treasury inflow will always outperform staking rewards
            </h5>
            <h4>
              Babylon is designed with long-term protocol health
              in mind. All BABYLON minted for
              staking rewards are backed with a reserve
              from the Treasury.
            </h4>
          </div>
        </CENTER>
        <BOTTOM>
          <h3>
            Investment Protection
          </h3>
          <h5>
            The fewer BABYLON staked, the higher APY
          </h5>
          <h4>
            BABYLON is minted and evenly distributed for staking
            rewards. More BABYLON staked reduces the APY but
            pushes the BABYLON price higher, creating a balance that
            protects your investment.
          </h4>
        </BOTTOM>
      </CenteredDiv>
    </WRAPPER>
  )
}
