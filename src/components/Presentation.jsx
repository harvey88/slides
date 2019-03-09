import React, { Component, Fragment } from 'react'
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
        // console.log('dfgdfg', slides[currentSlide])
        const delay = slides[currentSlide].delay ? slides[currentSlide].delay * 100 : 3000
        setTimeout( () => {
            this.currentSlide()
        }, delay)
        return (
            <Slide 
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


    // generator = () => {
    //     const { data: { slides } } = this.state
    //     return function* gen() {
    //         let current = 0
    //         const length = slides.length
    //         while(current <= length) {
    //             console.log('slides[current]', slides[current])
    //             yield slides[current]
    //             current++
    //         }
    //     }
    // } 

    render() {
        // console.log('data', this.state.data)
        const { 
            data: { 
                canvas: { 
                    display_height, 
                    display_width  
                }, 
                slides
            }
        } = this.state
        return(
            <div
                style={{
                    width: `${400}px`,
                    height: `${400}px`,
                }}
                className='wrapper'
            >
                <canvas 
                    className='canvas'
                    width={400} 
                    height={400}
                >
                </canvas>
                {this.showSlide()}
                <button onClick={this.currentSlide}>click</button>
            </div>
            
        )
    }
}

export default WrapperSlides