import React from 'react'
import Shape from './Layer/Shape'
import Media from './Layer/Media'
import Text from './Layer/Text'

const Layer = ({ element: { type }}) => {
    switch(type) {
        case 'shape': 
            return <Shape />
        case 'media':
            return <Media />
        case 'text': 
            return <Text />
        default:
            return <div>unknown type</div>
    }
}

export default Layer