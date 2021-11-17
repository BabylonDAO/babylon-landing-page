import React, { FC } from 'react'
import styled from 'styled-components'
import { CenteredDiv, FlexColumnDiv, SpaceBetweenDiv } from '../../styles'
import { monetaryFormatValue } from '../../utils'

const STATS = styled(SpaceBetweenDiv)`
  ${({ theme }) => theme.mediaWidth.upToLarge`
    flex-direction: column;
    
    > div:not(:last-child) {
      margin-bottom: 32px;
    }
  `}
`

const WRAPPER = styled(CenteredDiv)`
  width: 100%;
  padding 32px 0;
  background-color: black;
  
  > div {
    width: 70%;

    > div {
      align-items: center;
      
      span {
        color: white;
      }

      span:first-child {
        margin-bottom: 8px;
        font-size: 20px;
      }
      
      span:last-child {
        font-size: 30px;
        font-weight: bold;
      }
    }
  }
`

export const Stats: FC = () => {
  const total = '-'
  const treasury = 0
  const tVL = 0
  const aPY = 0

  return (
    <WRAPPER>
      <STATS>
        <FlexColumnDiv>
          <span>Total BABYLON Staked</span>
          <span>{total}</span>
        </FlexColumnDiv>
        <FlexColumnDiv>
          <span>Treasury Balance</span>
          <span>${monetaryFormatValue(treasury)}</span>
        </FlexColumnDiv>
        <FlexColumnDiv>
          <span>Total Value Locked</span>
          <span>${monetaryFormatValue(tVL)}</span>
        </FlexColumnDiv>
        <FlexColumnDiv>
          <span>Current APY</span>
          <span>{aPY}%</span>
        </FlexColumnDiv>
      </STATS>
    </WRAPPER>
  )
}
