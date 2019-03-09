import React, { Component } from 'react'

class Media extends Component{
    render() {
    const { 
        layout: { 
            left, 
            top, 
            right, 
            bottom 
        }, 
        media: { 
            mime, 
            token 
        }, 
        baseUrl 
    } = this.props

        return(
            <div
                style={{
                    left: `${left}%`,
                    top: `${top}%`,
                    right: `${right}%`,
                    bottom: `${bottom}%`
                    
                }}
                className='media'
                >
                <img src={`${baseUrl}${token}.${mime}`} alt={mime} />
            </div>
        )
    }
}

export default Media