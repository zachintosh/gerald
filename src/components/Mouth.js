import React from 'react'

export default function Mouth({ color = 'orange' }) {
  return (
    <div className="gerald-mouth">
      <svg xmlns="http://www.w3.org/2000/svg" width="198px" height="76px" version="1.1" viewBox="-0.5 -0.5 198 76">
        <defs/>
        <g>
            <path fill={color} stroke="none" d="M 39.5 -1 Q 79.5 -1 79.5 39 Q 79.5 79 39.5 79 Q 59.5 39 39.5 -1 Z" pointer-events="none" transform="rotate(65,59.5,39)"/>
            <path fill={color} stroke="none" d="M 116.5 -1 Q 156.5 -1 156.5 39 Q 156.5 79 116.5 79 Q 136.5 39 116.5 -1 Z" pointer-events="none" transform="translate(0,39)scale(1,-1)translate(0,-39)rotate(-115,136.5,39)"/>
            <ellipse cx="98" cy="15" fill={color} stroke="none" pointer-events="none" rx="15" ry="15"/>
            <ellipse cx="13" cy="51" fill={color} stroke="none" pointer-events="none" rx="13" ry="13"/>
            <ellipse cx="184" cy="51" fill={color} stroke="none" pointer-events="none" rx="13" ry="13"/>
            <path fill={color} stroke="none" d="M 88 -35 Q 108 -35 108 62.5 Q 108 160 88 160 Z" pointer-events="none" transform="rotate(90,98,62.5)"/>
            <ellipse cx="97" cy="48" fill={color} stroke="none" pointer-events="none" rx="24" ry="24"/>
        </g>
      </svg>
    </div>
  )

}