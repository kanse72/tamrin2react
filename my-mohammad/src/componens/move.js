import React, { Component } from 'react';
import "../style/style.css"

import Movebox from './compmoves'

import Moveganre from './moveganre';




class about extends Component {
    constructor() {
        super()
        this.state = {
            posts: [],
            tempmovies: [],
            genrearry: [],
            filtermovie: [],
            filtersubject: []
        }

    }


    componentDidMount() {
        this.getdata()


    }
    getdata = () => {
        fetch("/json/moves.json")
            .then(response => response.json()).then(data => this.setState({ posts: data.movies, tempmovies: data.movies }, () => this.getgenre()))
    }
    getgenre = () => {
        var array = [];
        var genre = '';
        var myarray = [];
        var toarray = [];

        this.state.tempmovies.map((movie) => {
            genre = movie.Genre

            myarray = genre.split(",")
            toarray = [...array, ...myarray]
            array = toarray
        })
        const uniqgenre = new Set(array)
        const arrayuniqgenre = [...uniqgenre];
        this.setState({
            genrearry: arrayuniqgenre
        })


    }
   





    render() {
console.log(this.state.filtermovie)
        return (
            <div className='boxmove' >

                <div className='moves'>

                    <div className='moveitem'>
                        {
                            this.state.posts.map((post) =>
                                <Movebox key={post.id} Title={post.Title} Genre={post.Genre}
                                    Poster={post.Poster} Year={post.Year} Director={post.Director} />
                            )

                        }



                    </div>
                </div>
                <div className='serch'>
                    <div><input type="text" name="" id="" placeholder='click to serch'  /></div>
                    <Moveganre genrearray={this.state.genrearry} />



                </div>
            </div>
        );
    }
}

export default about;