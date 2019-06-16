import React from 'react'
import Typist from 'react-typist';
import { css } from '@emotion/core'

const descriptionCss = css`
  text-align: center;
  font-size: 36px;
  color: #cce;
  display: flex;
  flex-direction: column;

  & span {
    display: block;
  }
`

const smallFontCss = css`
  font-size: 30px;
`

const finalSenCss = css`
  ${smallFontCss}
  margin-top: 40px;
`

const geraldCss = css`
  font-weight: bold;
`

export default function Description() {
  return (
    <div css={descriptionCss}>
      <Typist cursor={{ show: false }} avgTypingDelay={45}>
        <div css={smallFontCss}>Hello!</div>{' '}
        <Typist.Delay ms={1000} />
        <span css={geraldCss}>My name is Gerald.</span>
        <Typist.Delay ms={1000} />
        <span css={finalSenCss}>I'm ready to hear all about the bug you're about to fix.</span>
      </Typist>
    </div>
  )
}