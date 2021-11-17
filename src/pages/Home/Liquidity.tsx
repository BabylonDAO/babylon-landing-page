import React, { FC } from 'react'
import styled from 'styled-components'
import { CenteredDiv, FlexColumnDiv, SpaceBetweenDiv } from '../../styles'
import { monetaryFormatValue } from '../../utils'

const STATS = styled(FlexColumnDiv)`
  > div:first-child {
    margin-bottom: 40px;
  }
  
  span {
    color: black;
    
    &:first-child {
      font-size: 40px;
    }
    
    &:last-child {
      color: ${({ theme }) => theme.grey2};
    }
  }
`

const WRAPPER = styled(CenteredDiv)`
  width: 100%;
  background-color: #e5e5e5;
  
  > div {
    width: 1200px;
    max-width: 80%;
    margin: 15vh auto;
    
    ${({ theme }) => theme.mediaWidth.upToMedium`
      flex-direction: column;
      text-align: center;
      
      > div:first-child {
        margin-bottom: 64px;
      }
    `}
  }

  h3 {
    font-size: 28px;
    color: black;
  }
  
  h4 {
    line-height: 24px;
    color: black;

    ${({ theme }) => theme.mediaWidth.fromMedium`
      width: 40vw;
    `}
  }
  
  h5 {
    margin: 16px 0;
    font-size: 16px;
    color: ${({ theme }) => theme.grey2};
  }
`

export const Liquidity: FC = () => {
  const total = '-'
  const treasury = 0

  return (
    <WRAPPER>
      <SpaceBetweenDiv>
        <div>
          <h3>
            Liquidity Protected
          </h3>
          <h5>
            Babylon LP is owned and protected by Babylon itself
          </h5>
          <h4>
            Babylon owns almost all of its liquidity, which helps
            maintain price stability and treasury income. With a
            protocol-owned liquidity, Babylon is protected from
            unpredictable and unfavorable market conditions due to
            longevity and efficiency.
          </h4>
        </div>
        <STATS>
          <FlexColumnDiv>
            <span>${monetaryFormatValue(treasury)}</span>
            <span>Protocol Owned Liquidity</span>
          </FlexColumnDiv>
          <FlexColumnDiv>
            <span>{total}%</span>
            <span>of Total LP Supply</span>
          </FlexColumnDiv>
        </STATS>
      </SpaceBetweenDiv>
    </WRAPPER>
  )
}
