import React, { FC } from 'react'
import styled from 'styled-components'
import { CenteredImg, FlexColumnDiv } from '../../styles'
import { Header } from './Header'

const BOTTOM = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;

  > div:last-child {
    margin-left: 5vw;
  }

  ${({ theme }) => theme.mediaWidth.upToSmall`
    flex-direction: column;
    text-align: center;
    
    button {
      margin-bottom: 10vh;
    }
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
  ${({ theme }) => theme.mediaWidth.fromLarge`
    margin: 15vh 0;
  `}
  ${({ theme }) => theme.mediaWidth.upToLarge`
    ${({ theme }) => theme.measurements('300px')}
    margin: 10vh 0;
  `}
  ${({ theme }) => theme.mediaWidth.upToSmall`
    ${({ theme }) => theme.measurements('200px')}
    margin: 5vh 0;
  `}
`

const TOP = styled(FlexColumnDiv)`
  justify-content: center;
  width: 55%;

  ${({ theme }) => theme.mediaWidth.upToMedium`
    height: 40vh;
  `}
  ${({ theme }) => theme.mediaWidth.upToSmall`
    margin-bottom: 10vh !important;
    text-align: center;
    display: flex;
    align-items: center;
  `}

  h1 {
    margin-bottom: 40px;
    color: #0E1A45;

    ${({ theme }) => theme.mediaWidth.fromLarge`
      margin-top: 15vh;
      font-size: 40px;
    `}
    ${({ theme }) => theme.mediaWidth.upToLarge`
      margin-top: 10vh;
      font-size: 30px;
    `}
    ${({ theme }) => theme.mediaWidth.upToMedium`
      font-size: 20px;
    `}
  }

  h4 {
    color: #0E1A45;
    font-weight: 400;
    
    ${({ theme }) => theme.mediaWidth.fromLarge`
      margin-bottom: 20vh;
      font-size: 22px;
    `}
    ${({ theme }) => theme.mediaWidth.upToLarge`
      margin-bottom: 15vh;
      font-size: 18px;
    `}
    ${({ theme }) => theme.mediaWidth.upToMedium`
      margin-bottom: 5vh;
      font-size: 16px;
    `}
    ${({ theme }) => theme.mediaWidth.upToSmall`
      width: 60%;
    `}
  }
`

const INTRO = styled.div`
  z-index: 2;

  button {
    margin-top: 32px;
    padding: 8px 64px;
    border: none;
    border-radius: 4px;
    background-color: #EAD097;
    transition: background-color ${({ theme }) => theme.hapticTransitionTime} ease-in-out;
    cursor: pointer;
    
    span {
      color: black;
    }
    
    :hover {
      background-color: ${({ theme }) => theme.secondary1h};
    }
  }
`

const BOTTOM_OUTER = styled.div`
  background-color: #0E1A45;
  
  > div {
    width: 1200px;
    max-width: 80%;
    margin: 0 auto;
    ${({ theme }) => theme.flexCenter}
  }
`

const TOP_OUTER = styled.div`
  > div {
    width: 1200px;
    max-width: 80%;
    margin: 0 auto;
  }
`

const TOWER = styled(CenteredImg)`
  position: absolute;
  z-index: 3;
  
  ${({ theme }) => theme.mediaWidth.upToSmall`
    display: none;
  `}
  ${({ theme }) => theme.mediaWidth.fromSmall`
    right: 5vw;
    top: 190px;
  `}
  ${({ theme }) => theme.mediaWidth.fromMedium`
    right: 10vw;
    top: 10vh;
  `}
  ${({ theme }) => theme.mediaWidth.fromLarge`
    right: 5vw;
    top: 100px;
  `}
  
  > div:first-child {
    ${({ theme }) => theme.mediaWidth.fromSmall`
      height: 400px;
    `}
    ${({ theme }) => theme.mediaWidth.fromMedium`
      height: 500px;
    `}
    ${({ theme }) => theme.mediaWidth.fromLarge`
      height: 650px;
    `}
  }
`

const WRAPPER = styled(FlexColumnDiv)`
  position: relative;
  background-color: #F7F2EA;
  width: 100%;
`

export const Intro: FC = () => {
  return (
    <WRAPPER>
      <Header />
      <TOWER>
        <CenteredImg>
          <img src={`${process.env.PUBLIC_URL}/img/assets/tower.png`} alt="" />
        </CenteredImg>
        <CenteredImg>
          <img src={`${process.env.PUBLIC_URL}/img/assets/cloud.png`} alt="" />
        </CenteredImg>
        <CenteredImg>
          <img src={`${process.env.PUBLIC_URL}/img/assets/cloud.png`} alt="" />
        </CenteredImg>
      </TOWER>
      <INTRO>
        <TOP_OUTER>
          <TOP>
            <h1>
              The Decentralized
              <br />
              Reserve Currency
            </h1>
            <h4>
              Babylon is building a community-owned decentralized
              <br />
              financial infrastructure to bring more stability and
              <br />
              transparency for the world through Solana.
            </h4>
          </TOP>
        </TOP_OUTER>
        <BOTTOM_OUTER>
          <BOTTOM>
            <SPHINX>
              <img src={`${process.env.PUBLIC_URL}/img/assets/sphinx.png`} alt="" />
            </SPHINX>
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
          </BOTTOM>
        </BOTTOM_OUTER>
      </INTRO>
    </WRAPPER>
  )
}
