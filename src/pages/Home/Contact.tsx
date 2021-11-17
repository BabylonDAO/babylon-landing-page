import React, { FC } from 'react'
import styled from 'styled-components'
import { CenteredDiv, CenteredImg, FlexColumnDiv, SpaceBetweenDiv } from '../../styles'

const CONTACT = styled(CenteredDiv)`
  > a {
    ${({ theme }) => theme.measurements('24px')}

    > img {
      ${({ theme }) => theme.measurements('inherit')}
      object-fit: contain;
    }
  }
`

const LEFT = styled.div`
  flex: 1;
  justify-content: flex-start;
  height: 140px;

  ${({ theme }) => theme.mediaWidth.upToLarge`
    margin-bottom: 64px;
  `}
  ${({ theme }) => theme.mediaWidth.upToSmall`
    margin-bottom: 0;
  `}

  > div {
    justify-content: flex-start;      
    margin-bottom: 8px;
    
    > a:not(:last-child) {
      margin-right: 24px;
    }
  }
`

const LOGO = styled(CenteredDiv)`
  > div {
    ${({ theme }) => theme.measurements('48px')}
  }

  > span {
    font-size: 20px;
    font-weight: bold;
    color: ${({ theme }) => theme.primary1};
  }
`

const RIGHT = styled.div`
  display: flex;
  flex: 3;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    flex-direction: column;
  `}
  ${({ theme }) => theme.mediaWidth.upToLarge`
    width: 100%;
  `}
  
  > div {
    flex: 1;
    justify-content: flex-start;
    height: 140px;

    ${({ theme }) => theme.mediaWidth.upToSmall`
      margin-top: 40px;
    `}
    ${({ theme }) => theme.mediaWidth.upToLarge`
      align-items: center;
      text-align: center;
    `}

    a {
      color: black;
      transition: color ${({ theme }) => theme.hapticTransitionTime} ease-in-out;
      
      &:not(:last-child) {
        margin-bottom: 16px;
      }
      
      &:hover {
        color: ${({ theme }) => theme.text1h};
      }
    }

    span {
      margin-bottom: 24px;
      font-size: 20px;
      color: ${({ theme }) => theme.grey3};
    }
  }
`

const WRAPPER = styled(SpaceBetweenDiv)`
  margin: 15vh auto;

  ${({ theme }) => theme.mediaWidth.upToLarge`
    width: 100%;
    flex-direction: column;
  `}  
  ${({ theme }) => theme.mediaWidth.fromLarge`
    width: 1200px;
    max-width: 80%;
  `}
`

export const Contact: FC = () => {
  return (
    <WRAPPER>
      <LEFT>
        <LOGO>
          <CenteredImg>
            <img src={`${process.env.PUBLIC_URL}/img/assets/logo.png`} alt="" />
          </CenteredImg>
          <span>BabylonDAO</span>
        </LOGO>
        <CONTACT>
          <a href="https://github.com/BabylonDAO/" target="_blank" rel="noopener noreferrer">
            <img src={`${process.env.PUBLIC_URL}/img/assets/github.png`} alt="" />
          </a>
          <a href="https://discord.gg/zvbAftXb/" target="_blank" rel="noopener noreferrer">
            <img src={`${process.env.PUBLIC_URL}/img/assets/discord.png`} alt="" />
          </a>
          <a href="https://twitter.com/babylondao/" target="_blank" rel="noopener noreferrer">
            <img src={`${process.env.PUBLIC_URL}/img/assets/twitter.png`} alt="" />
          </a>
          <a href="https://medium.com/@BabylonDAO/" target="_blank" rel="noopener noreferrer">
            <img src={`${process.env.PUBLIC_URL}/img/assets/medium.png`} alt="" />
          </a>
        </CONTACT>
      </LEFT>
      <RIGHT>
        <FlexColumnDiv>
          <span>Products</span>
          <FlexColumnDiv>
            <a>Bonds</a>
            <a>Staking</a>
            <a>BabylonSwap (coming soon)</a>
          </FlexColumnDiv>
        </FlexColumnDiv>
        <FlexColumnDiv>
          <span>Learn</span>
          <FlexColumnDiv>
            <a>Documentation</a>
            <a href="https://medium.com/@BabylonDAO/" target="_blank" rel="noopener noreferrer">
              Medium
            </a>
          </FlexColumnDiv>
        </FlexColumnDiv>
        <FlexColumnDiv>
          <span>Join the community</span>
          <FlexColumnDiv>
            <a href="https://discord.gg/zvbAftXb" target="_blank" rel="noopener noreferrer">
              Join Discord
            </a>
          </FlexColumnDiv>
        </FlexColumnDiv>
      </RIGHT>
    </WRAPPER>
  )
}
