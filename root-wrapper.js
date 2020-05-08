import React from 'react';
import {MDXProvider} from '@mdx-js/react'

const component = {
    h2: ({children}) => {
        return <h2 style={{color: 'rebeccapurple'}}>{children}</h2>
    },
    'p.inlineCode': props => {
    return (<code {...props} style={{backgroundColor: 'lightgrey'}} />)
    }
}

export const wrapRootElement = ({element}) => {
    return (
    <MDXProvider components={component}>
        {element}
    </MDXProvider>
)} 