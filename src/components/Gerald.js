import React from 'react'
import Mouth from './Mouth'
import { css } from '@emotion/core'

export default function Gerald() {

  const eyeCss = css`
    background-color: blue !important;
  `

  const theme = {
    eyePupilColor: 'white',
    eyeBackground: 'radial-gradient(ellipse at top, rgb(25, 25, 25), rgb(75, 75, 75))',
    bodyBackground: 'radial-gradient(ellipse at top, rgb(255, 255, 0), rgb(255, 210, 0))',
    headBackground: 'radial-gradient(ellipse at top, rgb(255, 255, 0), rgb(255, 210, 0))',
    wingBackground: 'radial-gradient(ellipse at top, rgb(255, 255, 0), rgb(255, 210, 0))',
    mouthColor: 'orange'
  }

  const { eyePupilColor, bodybackground, headbackground, wingbackground } = theme

  const GeraldHead = () => <div style={{ background: theme.headbackground }} className="gerald-head" />
  const GeraldEye = ({side}) => <div css={eyeCss} className={`gerald-eye ${side}`} />
  const GeraldMouth = () => <Mouth color={theme.mouthColor} />
  const GeraldBody = () => <div className="gerald-body" />
  const GeraldWing = ({side}) => <div className={`gerald-wing ${side}`} />

  return (
    <div className="main-container">
      <div className="gerald-main">
        <GeraldHead />
        <GeraldEye side="left" />
        <GeraldEye side="right" />
        <GeraldMouth />
        <GeraldBody />
        <GeraldWing side="left" />
        <GeraldWing side="right" />
      </div>
    </div>
  );
}
  
