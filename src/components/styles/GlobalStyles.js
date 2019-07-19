import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  html, body, div, span, object, iframe, h1, h2, h3, h4, h5, h6,
  p, blockquote, pre, abbr, address, cite, code, del, dfn, em, img,
  ins, kbd, q, samp, small, strong, sub, sup, var, b,
  i, dl, dt, dd, ol, ul, li, fieldset, form, label, button, input, textarea, legend, table,
  caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details,
  figcaption, figure, footer, header, main, aside hgroup, menu, nav, section, summary,
  time, mark, audio, video, a {
    margin: 0;
    padding: 0;
    border: 0;
    background: transparent;
    outline: 0;
    box-sizing: border-box;
    line-height: 1;
    color: #093945;
  }

  nav, ul, li {
    list-style: none;
  }

  table {
    border-spacing: 0;
    border-collapse: collapse;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }

  input,
  select {
    vertical-align: middle;
  }
  img {
    vertical-align: top;
    width: 100%;
  }

  /*  Base 
  -----------------------------------------------------------------------------*/

  body {
    font-family: "游ゴシック Medium", "游ゴシック", YuGothic, YuGothicM, "Hiragino Kaku Gothic ProN", "Hiragino Kaku Gothic Pro", メイリオ, Meiryo, sans-serif;
  }

  a {
    text-decoration: none;
  }
`

export default GlobalStyles