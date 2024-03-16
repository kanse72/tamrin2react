import React, { Component } from 'react';
import About from './componens/about'
import { Link, Route, Routes } from 'react-router-dom';
import "./style/style.css"
import Slider from './componens/stlider'
import Home from './componens/home'
import Moves from './componens/move'




class compnew extends Component {
    constructor() {
        super()

    }


    render() {
        return (
            <div>
                <div className='nav'>

                    <Link to=""><button>Home</button></Link>
                    <Link to="/move"><button>move</button></Link>
                    <Link to="/about"> <button>about</button></Link>
                    <Link to="/slider">  <button>slider</button></Link>


                </div>
                <hr />

                <Routes>
                    <Route path='/about' element={<About />}></Route>
                    <Route path='/slider' element={<Slider />}></Route>
                    <Route path='' element={<Home />}></Route>
                    <Route path='/move' element={< Moves/>}></Route>
                </Routes>
            </div>
        );
    }
}

export default compnew;