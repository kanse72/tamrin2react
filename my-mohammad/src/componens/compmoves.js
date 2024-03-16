import React, { Component } from 'react';
import "../style/style.css"


class Movebox extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { Title, Genre, Poster, Year, Director } = this.props
        return (

            <div className='boxfilm'>
                <div className='imgdiv'><img src={Poster} alt="aks" /></div>
                <div> <h3> {Title}</h3></div>


                <div>{Director}</div>
                <div>{Year}</div>


                <div>{Genre}</div>
                <div>{ }</div>

            </div>
        );
    }
}

export default Movebox;