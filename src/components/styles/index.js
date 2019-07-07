import { css } from 'styled-components'

export const colors = {
  main_dark: "#32b593",
  main_light: "#83e0bf",
  accent: "#edf179",
  white: "#fff",
  black: "#093945",
}

export const vars = {
  main_width: 1000
}

export const mixins = {
  inner: css`
    width: ${vars.main_width}px;
    margin: 0 auto;
    padding: 0 10px;
  `,
  transition: ({
    prop = 'all',
    sec = .3,
    easing = 'ease'
  }) => css`
    transition: ${prop} ${sec}s ${easing};
  `,
  font_noto: css`
    font-family: 'Noto Sans', sans-serif;
  `
}
