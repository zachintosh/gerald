import React from 'react'
import Mouth from './Mouth'
import { css } from '@emotion/core'

export default function Gerald() {

  const theme = {
    headBackground: 'radial-gradient(ellipse at top, rgb(255, 255, 0), rgb(255, 210, 0))',
    eyePupilColor: 'white',
    eyeBackground: 'radial-gradient(ellipse at top, rgb(25, 25, 25), rgb(75, 75, 75))',
    bodyBackground: 'radial-gradient(ellipse at top, rgb(255, 255, 0), rgb(255, 210, 0))',
    wingBackground: 'radial-gradient(ellipse at top, rgb(255, 255, 0), rgb(255, 210, 0))',
    mouthColor: 'orange'
  }

  // const theme = {
  //   headBackground: 'radial-gradient(ellipse at top, #333, black)',
  //   eyePupilColor: 'grey',
  //   eyeBackground: 'radial-gradient(ellipse at top, grey, rgb(75, 75, 75))',
  //   bodyBackground: 'radial-gradient(ellipse at top, #333, black)',
  //   wingBackground: 'radial-gradient(ellipse at top, #333, black)',
  //   mouthColor: 'orange'
  // }
  
  const headCss = css`
    background: ${theme.headBackground};
  `

  const eyeCss = css`
    background: ${theme.eyeBackground};
    &::before {
      background-color: ${theme.eyePupilColor};
    }
  `

  const mouthCss = css`
    background-color: ${theme.mouthColor};
  `

  const bodyCss = css`
    background: ${theme.bodyBackground};
    `

  const wingCss = css`
    background: ${theme.wingBackground};
  `

  const GeraldHead = () => <div css={headCss} className="gerald-head" />
  const GeraldEye = ({side}) => <div css={eyeCss} className={`gerald-eye ${side}`} />
  const GeraldMouth = () => <Mouth color={theme.mouthColor} />
  const GeraldBody = () => <div css={bodyCss} className="gerald-body" />
  const GeraldWing = ({side}) => <div css={wingCss} className={`gerald-wing ${side}`} />

  return (
    <div className="gerald-main">
      <GeraldHead />
      <GeraldEye side="left" />
      <GeraldEye side="right" />
      <GeraldMouth />
      <GeraldBody />
      <GeraldWing side="left" />
      <GeraldWing side="right" />
    </div>
  );
}
  
