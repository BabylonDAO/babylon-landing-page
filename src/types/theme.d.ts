import { FlattenSimpleInterpolation, ThemedCssFunction } from 'styled-components'

export type Color = string

export interface Colors {
  // base
  white: Color
  black: Color

  // text
  text1: Color
  text1h: Color

  // backgrounds / greys
  bg1: Color
  grey1: Color
  grey2: Color
  grey3: Color

  // primary
  primary1: Color
  primary2: Color
  primary2h: Color
  primary3: Color
  primary4: Color

  // secondary
  secondary1: Color
  secondary1h: Color
  secondary2: Color
  secondary2h: Color
}

export type Font = string

export interface Text {
  fontFamily: Font
  mainText: FlattenSimpleInterpolation
}

export interface DefaultTheme extends Colors, Text {
  // shadows
  largeShadow: FlattenSimpleInterpolation
  smallShadow: FlattenSimpleInterpolation

  // media queries
  mediaWidth: {
    upToExtraSmall: ThemedCssFunction<DefaultTheme>
    fromExtraSmall: ThemedCssFunction<DefaultTheme>
    upToSmall: ThemedCssFunction<DefaultTheme>
    fromSmall: ThemedCssFunction<DefaultTheme>
    upToMedium: ThemedCssFunction<DefaultTheme>
    fromMedium: ThemedCssFunction<DefaultTheme>
    upToLarge: ThemedCssFunction<DefaultTheme>
    fromLarge: ThemedCssFunction<DefaultTheme>
  }

  hapticTransitionTime: string
  mainTransitionTime: string

  // css snippets
  ellipse: FlattenSimpleInterpolation
  flexCenter: FlattenSimpleInterpolation
  flexColumnNoWrap: FlattenSimpleInterpolation
  flexRowNoWrap: FlattenSimpleInterpolation
  largeBorderRadius: FlattenSimpleInterpolation
  smallBorderRadius: FlattenSimpleInterpolation
  roundedBorders: FlattenSimpleInterpolation

  // mixins
  measurements: (number) => FlattenSimpleInterpolation
}
