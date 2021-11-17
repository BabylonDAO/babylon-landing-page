import React from 'react'
import { ThemeProvider as StyledComponentsThemeProvider, css, DefaultTheme } from 'styled-components'
import type { Colors, Text } from './types/theme'

const WIDTH_UP_TO = {
  upToExtraSmall: 500,
  upToSmall: 720,
  upToMedium: 960,
  upToLarge: 1280
}

const WIDTH_FROM = {
  fromExtraSmall: 501,
  fromSmall: 721,
  fromMedium: 961,
  fromLarge: 1281
}

const mediaWidthTemplatesUpTo: {
  [width in keyof typeof WIDTH_UP_TO]: typeof css
} = Object.keys(WIDTH_UP_TO).reduce((accumulator, size) => {
  ;(accumulator as any)[size] = (a: any, b: any, c: any) => css`
    @media (max-width: ${(WIDTH_UP_TO as any)[size]}px) {
      ${css(a, b, c)}
    }
  `
  return accumulator
}, {}) as any

const mediaWidthTemplatesFrom: {
  [width in keyof typeof WIDTH_FROM]: typeof css
} = Object.keys(WIDTH_FROM).reduce((accumulator, size) => {
  ;(accumulator as any)[size] = (a: any, b: any, c: any) => css`
    @media (min-width: ${(WIDTH_FROM as any)[size]}px) {
      ${css(a, b, c)}
    }
  `
  return accumulator
}, {}) as any

const white = '#FFFFFF'
const black = '#000000'

export function colors(): Colors {
  return {
    // base
    white,
    black,

    // text
    text1: black,
    text1h: '#7d7d7d',

    // backgrounds / greys
    bg1: white,
    grey1: '#cccccc',
    grey2: '#474747',
    grey3: '#999999',

    // primary colors
    primary1: '#232A6C',
    primary2: '#26406B',
    primary2h: '#16305B',
    primary3: '#425A81',
    primary4: '#566378',

    // secondary colors
    secondary1: '#958454',
    secondary1h: '#857444',
    secondary2: '#FFC768',
    secondary2h: '#EFB758'
  }
}

export function text(): Text {
  return {
    fontFamily: 'Rubik',
    mainText: css`
      font-family: 'Rubik';
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      color: black;
    `
  }
}

export function theme(): DefaultTheme {
  return {
    ...colors(),
    ...text(),

    largeShadow: css`
      box-shadow: 0 7px 15px 9px rgb(189, 189, 189, 0.25);
    `,
    smallShadow: css`
      box-shadow: 0 4px 15px 2px rgb(0, 0, 0, 0.25);
    `,

    mediaWidth: { ...mediaWidthTemplatesFrom, ...mediaWidthTemplatesUpTo },

    hapticTransitionTime: '200ms',
    mainTransitionTime: '500ms',

    // css snippets
    ellipse: css`
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `,
    flexCenter: css`
      display: flex;
      justify-content: center;
      align-items: center;
    `,
    flexColumnNoWrap: css`
      display: flex;
      flex-flow: column nowrap;
    `,
    flexRowNoWrap: css`
      display: flex;
      flex-flow: row nowrap;
    `,
    largeBorderRadius: css`
      border-radius: 20px;
    `,
    smallBorderRadius: css`
      border-radius: 8px;
    `,
    roundedBorders: css`
      border-radius: 50px;
    `,

    // mixins
    measurements: (size) => css`
      height: ${size};
      width: ${size};
    `
  }
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <StyledComponentsThemeProvider theme={() => theme()}>{children}</StyledComponentsThemeProvider>
}
