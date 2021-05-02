
import React, { Component } from 'react'

import { connect } from 'react-redux';
import { searchMovie, fetchMovies, setLoading } from '../redux/actions/searchAction'


class SearchForm extends Component {

    // SEARCH INPUT
    onChangeHandler = (e) => {
        this.props.searchMovie(e.target.value);
    }

    // FORM AREA - loading - API
    onSubmitHandler = (e) => {
        e.preventDefault();
        this.props.fetchMovies(this.props.text)
        this.props.setLoading()

    }

    render() {
        return (
          
            <form onSubmit={this.onSubmitHandler}>
                <input
                    className="w-100 mt-4 mb-4" 
                    type="text" 
                    placeholder="Film Ara" 
                    onChange={this.onChangeHandler}/>
            
            <button type="submit" className="offset-5 col-2 align-self-center bg-warning text-dark border-0 mb-5">ARA</button>
            </form>
         

        )
    }
}
const mapStateToProps = (state) => ({
    text: state.movies.text
})


export default connect(mapStateToProps, { searchMovie, fetchMovies, setLoading })(SearchForm)
