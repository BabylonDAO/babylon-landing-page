import React, { FC } from 'react'
import styled from 'styled-components'
import { CenteredDiv, SpaceBetweenDiv } from '../../styles'

const CONTENT = styled(SpaceBetweenDiv)`
  width: 100%;

  ${({ theme }) => theme.mediaWidth.upToMedium`
    flex-direction: column;
  `}  
  ${({ theme }) => theme.mediaWidth.fromMedium`
    margin-top: 10vh;
  `}
  
  > div {
    flex: 1;
    height: 300px;
    text-align: center;

    ${({ theme }) => theme.mediaWidth.upToMedium`
      margin-top: 64px;
    `}

    &:nth-child(2) {
      ${({ theme }) => theme.mediaWidth.fromMedium`
        margin: 0 64px;
      `}
    }
  }
  
  h3 {
    ${({ theme }) => theme.flexCenter}
    font-size: 28px;
    color: black;

    ${({ theme }) => theme.mediaWidth.fromMedium`
      height: 120px;
    `}
  }
  
  h5 {
    font-size: 16px;
    font-weight: 400;
    line-height: 32px;
    color: black;
  }
`

const WRAPPER = styled(CenteredDiv)`
  flex-direction: column;
  width: 1200px;
  max-width: 80%;
  margin: 15vh auto;
  
  h2 {
    font-size: 40px;
    font-weight: bold;
    color: white;
    color: black;
    
    ${({ theme }) => theme.mediaWidth.upToMedium`
      text-align: center;
    `}  
  }
`

export const Babylon: FC = () => {
  return (
    <WRAPPER>
      <h2>
        How is Babylon different?
      </h2>
      <CONTENT>
        <div>
          <h3>
            Babylon is designed to grow in value
          </h3>
          <h5>
            Babylon is backed by an ever-growing, income-generating treasury. We’ve created a currency that is able to
            constantly grow purchasing power despite market conditions.
          </h5>
        </div>
        <div>
          <h3>
            Babylon is primarily built on Solana
          </h3>
          <h5>
            Babylon is built primarily on Solana which enables scalable user friendly apps while powering fast
            transactions with low to non-existent gas fees.
          </h5>
        </div>
        <div>
          <h3>
            Adaptability
          </h3>
          <h5>
            The babylonian team applies game theory to effectively scale the community long-term.
          </h5>
        </div>
      </CONTENT>
    </WRAPPER>
  )
}
