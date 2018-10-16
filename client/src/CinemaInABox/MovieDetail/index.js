import React, { Component } from 'react';

class MovieDetail extends Component {
    render() {
        const {movie} = this.props;
        return (
            <div className="movie-items">
                <div>{movie.Movie}</div>
                <div>{movie.Actor_1}</div>
                <div>{movie.Actress_1}</div>
                <div>{movie.Date_of_Release}</div>
                <div>{movie.Director_1}</div>
                <div>{movie.Distributed_By_1}</div>
                <div>{movie.Distributed_By_2}</div>
                <div>{movie.Genre}</div>
                <div>{movie.Lifetime_4}</div>
                <div>{movie.Movie_Buzzindex}</div>
                <div>{movie.Producer_1}</div>
                <div>{movie.Producer_2}</div>
                <div>{movie.Producer_3}</div>
                <div>{movie.Producer_4}</div>
                <div>{movie.Production_House_1}</div>
                <div>{movie.Production_House_2}</div>
                <div>{movie.Quarter}</div>
                <div>{movie.Year}</div>
            </div>
            
        );
    }
}

export default MovieDetail;