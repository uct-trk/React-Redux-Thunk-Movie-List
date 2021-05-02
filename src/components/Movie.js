import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchMovie, setLoading } from '../redux/actions/searchAction'

import Spinner from './Spinner'

class Movie extends Component {


  componentDidMount() {
    this.props.fetchMovie(this.props.match.params.id);
    this.props.setLoading();
  }
  render() {

    // destructing
    const { loading, movie } = this.props;

    let movieInfo = (
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4 card card-body">
            <img src={movie.Poster} className="thumbnail" alt="Poster" />
          </div>
          <div className="col-md-8">
            <h2 className="mb-4">{movie.Title}</h2>
            <ul className="list-group">
              <li className="list-group-item">
                <strong>Tür:</strong> {movie.Genre}
              </li>
              <li className="list-group-item">
                <strong>Gösterim Tarihi:</strong> {movie.Released}
              </li>
              <li className="list-group-item">
                <strong>Süre:</strong> {movie.Runtime}
              </li>
              <li className="list-group-item">
                <strong>Kitle:</strong> {movie.Rated}
              </li>
              <li className="list-group-item">
                <strong>IMDB Puanı:</strong> {movie.imdbRating}
              </li>
              <li className="list-group-item">
                <strong>Yönetmen:</strong> {movie.Director}
              </li>
              <li className="list-group-item">
                <strong>Yazar:</strong> {movie.Writer}
              </li>
              <li className="list-group-item">
                <strong>Oyuncular:</strong> {movie.Actors}
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="card card-body bg-dark my-5 text-light">
            <div className="col-md-12">
              <h3>Hakkında </h3>
              {movie.Plot}
              <hr />
              <a
                href={'https://www.imdb.com/title/' + movie.imdbID}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-warning mr-5"
              >
                IMDB Sayfasında Gör
              </a>
              <Link to="/" className="btn btn-info text-light">
                Arama Sayfasına Dön
              </Link>
            </div>
          </div>
        </div>
      </div>
    );

    let content = loading ? <Spinner /> : movieInfo;
    return <div>{content}</div>;
  }
}

const mapStateToProps = (state) => ({
  loading: state.movies.loading,
  movie: state.movies.movie
});

export default connect(mapStateToProps,{ fetchMovie, setLoading })(Movie);
