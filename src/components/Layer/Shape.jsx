import React, { Component } from 'react'

class Shape extends Component{
    render() {
        const { layout: { left, top, right, bottom }, style: { background_color } } = this.props
        return (
            <div
                style={{
                    left: `${left}%`,
                    top: `${top}%`,
                    right: `${right}%`,
                    bottom: `${bottom}%`,
                    backgroundColor: background_color,
                    
                }}
                className='shape'>
            Shape
            </div>
        )
    }
}

export default Shape