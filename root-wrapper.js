import React from 'react';
import {MDXProvider} from '@mdx-js/react'
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from 'prism-react-renderer/themes/nightOwl'

const component = {
    h2: ({children}) => {
        return <h2 style={{color: 'rebeccapurple'}}>{children}</h2>
    },
    'p.inlineCode': props => {
    return (<code {...props} style={{backgroundColor: 'lightgrey'}} />)
    },
    pre: props => {
        const className = props.children.props.className || '' 
        const matches = className.match(/language-(?<lang>.*)/)
        console.log('---------------------')
        console.log(matches)
        console.log('---------------------')
        return (
        <Highlight {...defaultProps} code={props.children.props.children.trim()} theme={theme} language={matches && matches.groups && matches.groups.lang ? matches.groups.lang : ''}>
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <pre className={className} style={style}>
        {tokens.map((line, i) => (
          <div {...getLineProps({ line, key: i })}>
            {line.map((token, key) => (
              <span {...getTokenProps({ token, key })} />
            ))}
          </div>
        ))}
      </pre>
    )}
  </Highlight>
    )}
}

export const wrapRootElement = ({element}) => {
    return (
    <MDXProvider components={component}>
        {element}
    </MDXProvider>
)} 