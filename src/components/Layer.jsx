import React from 'react'
import Shape from './Layer/Shape'
import Media from './Layer/Media'
import Text from './Layer/Text'

const Layer = ({ baseUrl, element: { type, layout, style, token, media, html }}) => {
    switch(type) {
        case 'shape': 
            return <Shape 
                layout={layout} 
                style={style}
                token={token}
                type={type}
                />
        case 'media':
            return <Media 
                layout={layout} 
                media={media}
                token={token}
                type={type}
                baseUrl={baseUrl}
                />
        case 'text': 
            return <Text 
                layout={layout} 
                html={html}
                token={token}
                type={type}
                baseUrl={baseUrl}
                />
        default:
            return <div>unknown type</div>
    }
}

export default Layer