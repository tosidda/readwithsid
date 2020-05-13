import React from 'react';
import {MDXProvider} from '@mdx-js/react'
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from 'prism-react-renderer/themes/nightOwl'
import {Code} from './src/components/pageElements/Code'

const component = {
    h2: ({children}) => {
        return <h2 style={{color: 'rebeccapurple'}}>{children}</h2>
    },
    'p.inlineCode': props => {
    return (<code {...props} style={{backgroundColor: 'lightgrey'}} />)
    },
    pre: ({children: {props}}) => {
      return <Code codeString={props.children.trim()} language={props.className && props.className.replace('--language', '') }
      {...props}/>  
    }
}

export const wrapRootElement = ({element}) => {
    return (
    <MDXProvider components={component}>
        {element}
    </MDXProvider>
)} 