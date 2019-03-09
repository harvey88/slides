import React, { Component } from 'react'
import Layer from './Layer'

class Slide extends Component {
    render() {
        const { slide: { elements }, baseUrl } = this.props
        return(
            <div className='slide'>
                {elements.map((el, index) => {
                    return(
                        <Layer
                            baseUrl={baseUrl}
                            key={index} 
                            element={el}
                        />
                    )
                }) }
            </div>
        )
    }
}

export default Slide