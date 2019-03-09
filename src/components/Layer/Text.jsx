import React, { Component } from 'react'

class Text extends Component{
    constructor(){
        super()
        this.state = {}
        this.ref = React.createRef()
    }

    componentDidMount(){
        this.ref.current.innerHTML = this.props.html.text
    }


    render() {
        const { layout: { left, top, right, bottom } } = this.props
        return(
            <div
                style={{
                    left: `${left}%`,
                    top: `${top}%`,
                    right: `${right}%`,
                    bottom: `${bottom}%`,
                    
                }}
                ref={this.ref}
                className='text'>
            </div>
        )
    }
}

export default Text