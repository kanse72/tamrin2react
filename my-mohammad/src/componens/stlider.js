import React, { Component } from 'react';
import Img1 from '../pic/111.jpg'
import Img2 from '../pic/222.jpg'
import Img3 from '../pic/333.jpg'
import Img4 from '../pic/444.jpg'
import '../style/style.css'

class slider extends Component {
    constructor() {
        super()
        this.state = {
            cunt: 0,
            images: [Img1, Img2, Img3, Img4]
        }
    }

    upcunt = () => {
        if (this.state.cunt < 3) {
            this.setState((prevstat) => ({
                cunt: prevstat.cunt + 1
            }))

        }


    }
    downcunt = () => {
        if (this.state.cunt > 0) {
            this.setState((prevstat) => ({
                cunt: prevstat.cunt - 1
            }))

        }

    }

    render() {
        return (
            <div>
      
                <div className='slaider '>

                    <div className='slede activ' id='pic1'>
                        <img src={this.state.images[this.state.cunt]} alt="" />
                    </div>

                    <div className='next' onClick={this.upcunt}>next</div>
                    <div className='brve' onClick={this.downcunt}>preve</div>
                </div>

            </div>

        );
    }
}

export default slider;