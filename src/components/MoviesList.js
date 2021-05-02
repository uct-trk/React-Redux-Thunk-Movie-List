import React, { Component } from 'react'
import { connect } from 'react-redux'
import MovieCard from './MovieCard'

class MoviesList extends Component {
    render() {

        // destructuring
        const { movies } = this.props

        let content = ""
        // film sayısı 0 dan buyukse movie card gözükecek aksi halde boş gözükecek
        // Ternary

        content =
            movies.Response === 'True'
                ? movies.Search.map((movie, index) => (
                    <MovieCard key={index} movie={movie} />
                ))
                : null;

        return (
            <div className="row">
                {content}
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    movies: state.movies.movies
})

export default connect(mapStateToProps)(MoviesList)
