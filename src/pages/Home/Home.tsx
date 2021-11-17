import React, { FC } from 'react'
import { Babylon } from './Babylon'
import { Contact } from './Contact'
import { Intro } from './Intro'
import { Liquidity } from './Liquidity'
import { Model } from './Model'
import { Stats } from './Stats'
import { Staking } from './Staking'
import styled from 'styled-components'
import { FlexColumnDiv } from '../../styles'

const WRAPPER = styled(FlexColumnDiv)`
  align-items: center;
  margin: auto;
`

export const Home: FC = () => {
  return (
    <WRAPPER>
      <Intro />
      <Stats />
      <Model />
      <Staking />
      <Babylon />
      <Liquidity />
      <Contact />
    </WRAPPER>
  )
}
