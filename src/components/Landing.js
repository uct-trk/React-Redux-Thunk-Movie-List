import React, { Component } from 'react'
import { connect } from 'react-redux'
import SearchForm from './SearchForm'
import MoviesList from './MoviesList'
import Spinner from './Spinner'

class Landing extends Component {
    render() {

        // destructuring
        const {loading} = this.props

        return (
            <div className="container">
                <SearchForm/>
                {loading ? <Spinner/> : <MoviesList/>}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    loading : state.movies.loading
}) 

export default connect(mapStateToProps)(Landing) 
