import React, { FC } from 'react'
import styled from 'styled-components'
import { CenteredDiv, CenteredImg, SpaceBetweenDiv } from '../../styles'

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
    
    > div {
      ${({ theme }) => theme.measurements('64px')}
      margin: 0 auto 3vh;
    }

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
    font-size: 20px;
    color: #0E1A45;

    ${({ theme }) => theme.mediaWidth.fromMedium`
      height: 120px;
    `}
  }
  
  h5 {
    font-size: 16px;
    font-weight: 400;
    line-height: 32px;
    color: #0E1A45;
  }
`

const WRAPPER = styled(CenteredDiv)`
  flex-direction: column;
  width: 1200px;
  max-width: 80%;
  margin: 15vh auto 20vh;
  
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
          <CenteredImg>
            <img src={`${process.env.PUBLIC_URL}/img/assets/bab1.png`} alt="" />
          </CenteredImg>
          <h3>
            Designed to grow in value
          </h3>
          <h5>
            Babylon is backed by an ever-growing, income-generating treasury. We’ve created a currency that is able to
            constantly grow purchasing power despite market conditions.
          </h5>
        </div>
        <div>
          <CenteredImg>
            <img src={`${process.env.PUBLIC_URL}/img/assets/bab2.png`} alt="" />
          </CenteredImg>
          <h3>
            Babylon is primarily built on Solana
          </h3>
          <h5>
            Babylon is built primarily on Solana which enables scalable user friendly apps while powering fast
            transactions with low to non-existent gas fees.
          </h5>
        </div>
        <div>
          <CenteredImg>
            <img src={`${process.env.PUBLIC_URL}/img/assets/bab3.png`} alt="" />
          </CenteredImg>
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
