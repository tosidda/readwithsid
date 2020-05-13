import React from 'react'
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from 'prism-react-renderer/themes/nightOwl'
import styled from 'styled-components'

const Pre = styled.pre`
    text-align: left;
    margin: 1em 0;
    padding: 0.5em;
    overflow-x: auto;
    border-radius: 3px;
    & .token-line {
        line-height: 1.3em;
        height: 1.3em;
    }

    font-family: 'Courier New', Courier, monospace;
`

const LineNo = styled.span`
    display: inline-block;
    width: 2em;
    user-select: none;
    opacity: 0.3;
`

export const Code = ({codeString, language, ...props}) => {
    return (
        <Highlight {...defaultProps} code={codeString} theme={theme} language={language}>
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <Pre className={className} style={style}>
        {tokens.map((line, i) => (
          <div {...getLineProps({ line, key: i })}>
            <LineNo>{i + 1} </LineNo>
            {line.map((token, key) => (
              <span {...getTokenProps({ token, key })} />
            ))}
          </div>
        ))}
      </Pre>
    )}
  </Highlight>
    )
}

