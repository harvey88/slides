import React, { Component } from 'react'
import data from '../data/data.json'
import Slide from './Slide'
import '../styled/styles.css'

class WrapperSlides extends Component{
    constructor(){
        super()
        this.state = {
            data : data,
            slide: {
                currentSlide: 0,
                length: data.length,
            }

        }
    }

    showSlide = () => {
        const { data: { slides }, slide: { currentSlide } } = this.state
        const delay = slides[currentSlide].delay ? slides[currentSlide].delay * 100 : 3000
        setTimeout( () => {
            this.currentSlide()
        }, delay)
        return (
            <Slide 
                baseUrl={this.props.baseUrl} 
                slide={slides[currentSlide]}
            />
        )
    }



    currentSlide = () => {
        const { data: { slides }, slide: { currentSlide, length } } = this.state
            if (currentSlide === length - 1) {
                this.setState({
                    slide: {
                        currentSlide: 0,
                        length: slides.length
                    }
                })
            } else {
                this.setState({
                    slide: {
                        currentSlide: currentSlide + 1,
                        length: slides.length
                    }
                })
            }
    }

    render() {

        const { 
            data: { 
                canvas: { 
                    display_height, 
                    display_width  
                }
            }
        } = this.state
        return(
            <div
                style={{
                    width: `${display_width}px`,
                    height: `${display_height}px`,
                }}
                className='wrapper'
            >
                <canvas 
                    className='canvas'
                    width={display_width} 
                    height={display_height}
                >
                </canvas>
                {this.showSlide()}
            </div>
            
        )
    }
}

export default WrapperSlides