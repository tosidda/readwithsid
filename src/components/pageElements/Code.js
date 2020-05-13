import React from 'react'
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from 'prism-react-renderer/themes/nightOwl'
import styled from 'styled-components'
import { copyToClipboard } from '../../utils/copy-to-clipboard';

const Pre = styled.pre`
    position: relative;
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

const CopyCode = styled.button`
    position: absolute;
    right: 0.25rem;
    border-radius: 3px;
    margin: 0.25em;
    opacity: 0.3;
    &:hover {
        opacity: 1;
        transition: 0.3s opacity ease-in-out;
    }
`

export const Code = ({codeString, language, ...props}) => {
    const handleClick = () => {
        copyToClipboard(codeString)
    }
    return (
        <Highlight {...defaultProps} code={codeString} theme={theme} language={language}>
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <Pre className={className} style={style}>
        <CopyCode onClick={handleClick}>Copy the Code</CopyCode>
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

