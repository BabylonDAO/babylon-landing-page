import React, { FC } from 'react'
import styled from 'styled-components'
import { CenteredImg, FlexColumnDiv } from '../../styles'
import { Header } from './Header'

const BOTTOM = styled.div`
  display: flex;
  align-items: center;

  ${({ theme }) => theme.mediaWidth.fromLarge`
    justify-content: space-between;
    margin-top: 15vh;
  `}
  ${({ theme }) => theme.mediaWidth.upToLarge`
    justify-content: space-between;
    margin-top: 15vw;
  `}
  ${({ theme }) => theme.mediaWidth.upToSmall`
    flex-direction: column-reverse;
    text-align: center;
  `}
  
  h2 {
    margin-bottom: 40px;
    color: white;
    
    ${({ theme }) => theme.mediaWidth.fromLarge`
      font-size: 40px;
    `}
    ${({ theme }) => theme.mediaWidth.upToLarge`
      font-size: 30px;
    `}
    ${({ theme }) => theme.mediaWidth.upToMedium`
      font-size: 20px;
    `}
  }
  
  h3 {
    color: white;

    ${({ theme }) => theme.mediaWidth.fromLarge`
      font-size: 22px;
    `}    
    ${({ theme }) => theme.mediaWidth.upToLarge`
      font-size: 18px;
    `}
    ${({ theme }) => theme.mediaWidth.upToMedium`
      font-size: 16px;
    `}
  }
`

const SPHINX = styled(CenteredImg)`
  ${({ theme }) => theme.mediaWidth.upToLarge`
    ${({ theme }) => theme.measurements('300px')}
  `}
  ${({ theme }) => theme.mediaWidth.upToSmall`
    ${({ theme }) => theme.measurements('200px')}
    margin-bottom: 40px;
  `}
`

const TOP = styled(FlexColumnDiv)`
  justify-content: center;
  width: 55%;
  margin: auto 0;

  ${({ theme }) => theme.mediaWidth.upToMedium`
    height: 50vh;
  `}

  h1 {
    margin-bottom: 40px;
    font-weight: bold;
    color: ${({ theme }) => theme.primary3};

    ${({ theme }) => theme.mediaWidth.fromLarge`
      margin-top: 5vw;
      font-size: 40px;
    `}
    ${({ theme }) => theme.mediaWidth.upToLarge`
      margin-top: 10vw;
      font-size: 30px;
    `}
    ${({ theme }) => theme.mediaWidth.upToMedium`
      font-size: 20px;
    `}
  }

  h4 {
    color: ${({ theme }) => theme.primary4};
    
    ${({ theme }) => theme.mediaWidth.fromLarge`
      margin-bottom: 10vw;
      font-size: 22px;
    `}
    ${({ theme }) => theme.mediaWidth.upToLarge`
      margin-bottom: 10vw;
      font-size: 18px;
    `}
    ${({ theme }) => theme.mediaWidth.upToMedium`
      margin-bottom: 5vw;
      font-size: 16px;
    `}
  }
`

const INTRO = styled.div`
  z-index: 2;
  width: 1200px;
  max-width: 80%;
  
  ${({ theme }) => theme.mediaWidth.fromLarge`
    margin: 0 auto 15vh;
    padding-top: 15vh;
  `}
  ${({ theme }) => theme.mediaWidth.upToLarge`
    margin: 0 auto 10vh;
  `}
  ${({ theme }) => theme.mediaWidth.upToMedium`
    margin: 0 auto 5vh;
  `}

  button {
    margin-top: 32px;
    padding: 8px 64px;
    border: none;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.secondary1};
    transition: background-color ${({ theme }) => theme.hapticTransitionTime} ease-in-out;
    cursor: pointer;
    
    :hover {
      background-color: ${({ theme }) => theme.secondary1h};
    }
  }
`

const WRAPPER = styled(FlexColumnDiv)`
  position: relative;
  width: 100%;
  background: radial-gradient(
    farthest-corner at 0 0,
    rgba(255,255,255,0.9) 1%,
    rgba(255,255,255,0.9) 35%,
    rgba(79, 83, 136, 0.8) 55%,
    rgba(79, 83, 136, 1) 100%
  ), url("/img/assets/tower.png");
  background-size: cover;
  
  > div:nth-child(2) {
    position: absolute;
    ${({ theme }) => theme.measurements('auto')}
    bottom: -2px;
    right: 0;
    box-shadow: inset -7px 0 0 0 rgb(44, 63, 104);
    
    ${({ theme }) => theme.mediaWidth.fromSmall`
      width: 100%;
    `}
    ${({ theme }) => theme.mediaWidth.upToSmall`
      height: 60vh;
    `}
  }
`

export const Intro: FC = () => {
  return (
    <WRAPPER>
      <Header />
      <CenteredImg>
        <img src={`${process.env.PUBLIC_URL}/img/assets/substract.svg`} alt="close" />
      </CenteredImg>
      <INTRO>
        <TOP>
          <h1>
            The Decentralized Reserve Currency
            <br />
            Built On Solana
          </h1>
          <h4>
            Babylon is building a community-owned decentralized
            <br />
            financial infrastructure to bring more stability and
            <br />
            transparency for the world through Solana.
          </h4>
        </TOP>
        <BOTTOM>
          <div>
            <h2>
              Introducing BabylonDAO
            </h2>
            <h3>
              Generating sustainable protocol-owned
              <br />
              liquidity for Babylonians.
            </h3>
            <button>
              <span>Bond</span>
            </button>
          </div>
          <SPHINX>
            <img src={`${process.env.PUBLIC_URL}/img/assets/sphinx.png`} alt="" />
          </SPHINX>
        </BOTTOM>
      </INTRO>
    </WRAPPER>
  )
}
