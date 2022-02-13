import React from 'react'

export function childrenWithProps(props) {
    return React.Children.map(props.children, child => {
        return React.cloneElement(child, {
            // Atribui os props do pai para o filho, e depois afirma o do filho caso haja conflito
            ...props, ...child.props 
        })
    })
}