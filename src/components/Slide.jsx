import React, { Component } from 'react'
import Layer from './Layer'

class Slide extends Component {
    render() {
        // console.log('slides', this.props.slide)
        const { slide: { elements } } = this.props
        return(
            <div className='slide'>
                {elements.map((el, index) => {
                    // console.log('el', el)
                    return(
                        <Layer
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