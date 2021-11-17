import React, { FC } from 'react'
import styled from 'styled-components'
import { CenteredDiv, CenteredImg, FlexColumnDiv, SpaceBetweenDiv } from '../../styles'

const CENTER = styled(FlexColumnDiv)`
  align-items: center;
  height: 64.5vh;

  > div {
    width: 4px;
    height: 150px;
    margin: 12px 0;
    background-color: black;
  }

  > span {
    position: relative;
    ${({ theme }) => theme.flexCenter}
    ${({ theme }) => theme.measurements('40px')};
    background-color: black;
    color: white;
    font-weight: bold;
    font-size: 12px;
    border-radius: 50px;
    
    &:first-child::before,
    &:last-child::before {
      left: -116px;
      position: absolute;
      content: '';
      display: block;
      width: 100px;
      border-top: dashed 4px black;
    }
    
    &:nth-child(3)::after {
      right: -116px;
      position: absolute;
      content: '';
      display: block;
      width: 100px;
      border-top: dashed 4px black;
    }
  }
`

const ITEM = styled(FlexColumnDiv)`
  ${({ theme }) => theme.mediaWidth.fromLarge`
    width: 21vw;
  `}

  span {
    font-weight: 400;
    color: black;
  }
  
  h3 {
    font-size: 20px;
    color: black;
  }

  h4 {
    font-size: 16px;
    color: #999;
  }
`

const MODEL_DESKTOP = styled(CenteredDiv)`
  position: relative;
  margin-left: 6vw;
  ${({ theme }) => theme.mediaWidth.upToLarge`
    display: none;
  `}

  > div {
    flex-direction: column;

    &:first-child {
      margin-right: 32px;

      > div:nth-child(2) {
        margin: 64px 0;
      }
    }

    &:last-child {
      margin-left: 144px;

      > div:nth-child(2) {
        margin: 64px 0;
      }
    }
  }
`

const MODEL_RESPONSIVE = styled(FlexColumnDiv)`
  ${({ theme }) => theme.mediaWidth.upToLarge`
    width: 80%;
  `}
  ${({ theme }) => theme.mediaWidth.upToSmall`
    width: 100%;
    text-align: center;

    > div {
      &:not(:last-child) {
        margin-bottom: 40px;
      }

      &:first-child,
      &:last-child {
        flex-direction: column-reverse;
      }
      
      &:nth-child(2) {
        flex-direction: column;
      }
    }
  `}
  ${({ theme }) => theme.mediaWidth.fromLarge`
    display: none;
  `}
  
  ${({ theme }) => theme.mediaWidth.fromSmall`
    > div:first-child {
      margin-bottom: 40px;
  
      > div:last-child {
        margin-left: 80px;
      }
    }
  
    > div:not(:first-child):not(:last-child) {
      margin-bottom: 40px;
  
      > div:first-child {
        margin-right: 80px;
      }
    }
  
    > div:last-child > div:last-child {
      margin-left: 80px;
    }
  `}
`

const WRAPPER = styled(CenteredDiv)`
  flex-direction: column;
  margin: 15vh auto;
  
  ${({ theme }) => theme.mediaWidth.upToMedium`
    width: 80%;
  `}  
  ${({ theme }) => theme.mediaWidth.fromLarge`
    width: 1200px;
    max-width: 80%;
  `}

  > h2 {
    margin-bottom: 64px;
    font-size: 40px;
    font-weight: bold;
    color: white;
    color: black;
  }
`

const Center: FC = () => {
  return (
    <CENTER>
      <span>
        1
      </span>
      <div />
      <span>
        2
      </span>
      <div />
      <span>
        3
      </span>
    </CENTER>
  )
}

const Item: FC<{ header: string, text: string, title: string }> = ({ header, text, title}) => {
  return (
    <ITEM>
      <h4>
        {header}
      </h4>
      <h3>
        {title}
      </h3>
      <span>
        {text}
      </span>
    </ITEM>
  )
}

export const Model: FC = () => {
  return (
    <WRAPPER>
      <h2>
        How Babylon works
      </h2>
      <MODEL_DESKTOP>
        <CenteredDiv>
          <Item
            header="Treasury Revenue"
            title="Bonds & LP Fees"
            text="Bond sales and LP Fees increase Treasury Revenue and lock in liquidity and help control Babylon supply"
          />
          <CenteredImg>
            <img src={`${process.env.PUBLIC_URL}/img/assets/bb-temple.png`} alt="" />
          </CenteredImg>
          <Item
            header="Staking Rewards"
            title="Babylon Token"
            text="Bond sales and LP Fees increase Treasury Revenue and lock in liquidity and help control Babylon supply"
          />
        </CenteredDiv>
        <Center />
        <div>
          <CenteredImg>
            <img src={`${process.env.PUBLIC_URL}/img/assets/usdc.png`} alt="" />
          </CenteredImg>
          <Item
            header="Treasury Growth"
            title="Babylon Treasury"
            text="Bond sales and LP Fees increase Treasury Revenue and lock in liquidity and help control Babylon supply"
          />
          <CenteredImg>
            <img src={`${process.env.PUBLIC_URL}/img/assets/bbcoin.png`} alt="" />
          </CenteredImg>
        </div>
      </MODEL_DESKTOP>
      <MODEL_RESPONSIVE>
        <SpaceBetweenDiv>
          <Item
            header="Treasury Revenue"
            title="Bonds & LP Fees"
            text="Bond sales and LP Fees increase Treasury Revenue and lock in liquidity and help control Babylon supply"
          />
          <CenteredImg>
            <img src={`${process.env.PUBLIC_URL}/img/assets/usdc.png`} alt="" />
          </CenteredImg>
        </SpaceBetweenDiv>
        <SpaceBetweenDiv>
          <CenteredImg>
            <img src={`${process.env.PUBLIC_URL}/img/assets/bb-temple.png`} alt="" />
          </CenteredImg>
          <Item
            header="Treasury Growth"
            title="Babylon Treasury"
            text="Bond sales and LP Fees increase Treasury Revenue and lock in liquidity and help control Babylon supply"
          />
        </SpaceBetweenDiv>
        <SpaceBetweenDiv>
          <Item
            header="Staking Rewards"
            title="Babylon Token"
            text="Bond sales and LP Fees increase Treasury Revenue and lock in liquidity and help control Babylon supply"
          />
          <CenteredImg>
            <img src={`${process.env.PUBLIC_URL}/img/assets/bbcoin.png`} alt="" />
          </CenteredImg>
        </SpaceBetweenDiv>
      </MODEL_RESPONSIVE>
    </WRAPPER>
  )
}
