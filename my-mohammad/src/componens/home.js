import React, { Component } from 'react';
import Pichome from "../pic/home.jpg"
import '../style/style.css'

class Homepage extends Component {
    
    render() { 
        return (

            <div className='pichome'>
                <img src={Pichome} alt="homepic" />
            </div>
        );
    }
}
 
export default Homepage;