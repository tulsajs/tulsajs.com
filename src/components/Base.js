import styled from "@emotion/styled"
import { css } from "@emotion/core"
import isString from "lodash/isString"
import isObject from "lodash/isObject"
import {
  border,
  color,
  display,
  flexBasis,
  flexDirection,
  flexWrap,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  space,
  width,
  zIndex,
  style,
  position,
} from "styled-system"

const opacity = style({
  prop: "opacity",
  cssProperty: "opacity",
  key: "opacity",
  alias: "op",
})

const flex = style({
  prop: "flex",
  cssProperty: "flex",
  key: "flex",
  alias: "fl",
})

const flexGrow = style({
  prop: "flexGrow",
  cssProperty: "flexGrow",
  key: "flexGrow",
  alias: "flg",
})

const flexShrink = style({
  prop: "flexShrink",
  cssProperty: "flexShrink",
  key: "flexShrink",
  alias: "fls",
})

const order = style({
  prop: "order",
  cssProperty: "order",
  key: "order",
  alias: "order",
})

const boxShadow = style({
  prop: "boxShadow",
  cssProperty: "boxShadow",
  key: "shadows",
  alias: "bs",
})

const borderRadius = style({
  prop: "borderRadius",
  cssProperty: "borderRadius",
  key: "borderRadius",
  alias: "rd",
})

const fontSize = style({
  prop: "fontSize",
  cssProperty: "fontSize",
  key: "fontSizes",
  alias: "fs",
})

const fonts = style({
  prop: "fontFamily",
  cssProperty: "fontFamily",
  key: "fonts",
  alias: "ff",
})

const letterSpacings = style({
  prop: "letterSpacing",
  cssProperty: "letterSpacing",
  key: "letterSpacing",
  alias: "ls",
})

const backgroundPosition = style({
  prop: "backgroundPosition",
  cssProperty: "backgroundPosition",
  key: "backgroundPosition",
  alias: "bgp",
})

const backgroundSize = style({
  prop: "backgroundSize",
  cssProperty: "backgroundSize",
  key: "backgroundSize",
  alias: "bgs",
})

const textAlign = style({
  prop: "textAlign",
  cssProperty: "textAlign",
  key: "textAlign",
  alias: "ta",
})

const lineHeight = style({
  prop: "lineHeight",
  cssProperty: "lineHeight",
  key: "lineHeight",
  alias: "lh",
})

const widths = style({
  prop: "w",
  cssProperty: "width",
  key: "widths",
})

const justifyContent = style({
  prop: "justifyContent",
  cssProperty: "justifyContent",
  alias: "jc",
})

const justifyItems = style({
  prop: "justifyItems",
  cssProperty: "justifyItems",
  alias: "ji",
})

const justifySelf = style({
  prop: "justifySelf",
  cssProperty: "justifySelf",
  alias: "js",
})

const alignContent = style({
  prop: "alignContent",
  cssProperty: "alignContent",
  alias: "ac",
})

const alignItems = style({
  prop: "alignItems",
  cssProperty: "alignItems",
  alias: "ai",
})

const alignSelf = style({
  prop: "alignSelf",
  cssProperty: "alignSelf",
  alias: "aS",
})

const cursor = style({
  prop: "cursor",
  cssProperty: "cursor",
})

const textTransform = style({
  prop: "textTransform",
  cssProperty: "textTransform",
  alias: "tt",
})

const fontWeight = style({
  prop: "fontWeight",
  cssProperty: "fontWeight",
  key: "fontWeight",
  alias: "fw",
})

const height = style({
  prop: "height",
  cssProperty: "height",
  key: "heights",
  alias: "h",
})

const states = (props, style, fn) => {
  return css`
    ${props[style] && isString(props[style]) && fn(props)}
    ${props[style] &&
      isObject(props[style]) &&
      css`
        ${fn({ ...props, [style]: props[style].base })}}
        &:hover {
          ${fn({ ...props, [style]: props[style].hover })}}
        }
        &:active {
          ${fn({ ...props, [style]: props[style].active })}}
        }
        &:focus {
          ${fn({ ...props, [style]: props[style].focus })}}
        }
      `}
  `
}

const allStyles = props => css`
  ${alignContent(props)}
  ${alignItems(props)}
  ${alignSelf(props)}
  ${lineHeight(props)}
  ${backgroundPosition(props)}
  ${backgroundSize(props)}
  ${color(props)}
  ${display(props)}
  ${flex(props)}
  ${flexBasis(props)}
  ${letterSpacings(props)}
  ${flexDirection(props)}
  ${flexGrow(props)}
  ${flexShrink(props)}
  ${flexWrap(props)}
  ${fontSize(props)}
  ${height(props)}
  ${justifyContent(props)}
  ${justifyItems(props)}
  ${justifySelf(props)}
  ${maxHeight(props)}
  ${maxWidth(props)}
  ${minHeight(props)}
  ${minWidth(props)}
  ${order(props)}
  ${space(props)}
  ${borderRadius(props)}
  ${width(props)}
  ${widths(props)}
  ${zIndex(props)}
  ${opacity(props)}
  ${fonts(props)}
  ${textAlign(props)}
  ${cursor(props)}
  ${position(props)}
  ${textTransform(props)}
  ${fontWeight(props)}

  box-sizing: border-box;
  ${props.flexd && `display: flex`};
  ${props.flexInline && `display: flexInline`};
  ${props.block && `display: block`};
  ${props.inline && `display: inline`};
  ${props.relative && `position: relative`};
  ${states(props, "border", border)}
  ${states(props, "color", color)}
  ${states(props, "bg", color)}
  ${states(props, "bs", boxShadow)}
  ${states(props, "boxShadow", boxShadow)}
`

export const Div = styled.div`
  ${allStyles}
`

export const Span = styled.span`
  ${allStyles}
`

export const P = styled.p`
  ${allStyles}
`

export const Li = styled.li`
  margin: 0;
  list-style: none;
  ${allStyles}
`

export const Ul = styled.ul`
  margin: 0;
  ${allStyles}
`

export const Button = styled.button`
  cursor: pointer;
  text-decoration: none;
  ${allStyles}
`

export const Svg = styled.svg`
  fill: currentColor;
  ${allStyles}
`

export const Img = styled.img`
  max-width: 100%;
  ${allStyles}
`

export const A = styled.a`
  cursor: pointer;
  text-decoration: none;
  ${props => props.td && `text-decoration: underline;`}
  ${allStyles}
`

export const Footer = styled.footer`
  ${allStyles}
`
