/* External dependencies */
import styled, { createGlobalStyle } from 'styled-components'

/* Internal dependencies */
import Colors from 'Styles/colors'

const FontFamily = [
  'Avenir',
  'Avenir Next',
  'Apple SD Gothic Neo',
  'Nanum Barun Gothic',
  'Helvetica',
  'Arial',
  'Malgun Gothic',
  '맑은고딕',
  '맑은 고딕',
  '돋움',
  'Dotum',
  'Noto Sans Japanese',
  'Hiragino Kaku Gothic ProN',
  'ヒラギノ角ゴ ProN W3',
  'YuGothic',
  'Yu Gothic',
  'メイリオ',
  'sans-serif',
]

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body {
    font-family: ${FontFamily.join(',')};
    padding: 0;
    margin: 0;
  }
`

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.Grey500};
`

export const Content = styled.div`
  background-color: ${Colors.White};
  width: 312px;
  border-radius: 8px;
  padding-top: 8px;
  box-shadow: inset 0 0 0 1px ${Colors.Grey300};
`
