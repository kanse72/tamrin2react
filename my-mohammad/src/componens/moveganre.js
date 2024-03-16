import React, { Component } from 'react';
import "../style/style.css"
class Moveganre extends Component {

    render() {
        const { genrearray } = this.props
        return (
            <div>
                {genrearray.map((genre) =>
                    <>

                        <button value={genre} >{genre}</button> <br />
                    </>
                )}
            </div>
        );
    }
}

export default Moveganre;