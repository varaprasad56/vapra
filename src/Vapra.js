import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { getMovies } from "../src/services/fakeMovieService";
import { deleteMovie } from "../src/services/fakeMovieService";
class Vapra extends Component {
  state = {
    movies: getMovies(),
  };
  //   constructor() {
  //     super();
  //     this.handleDeleteMovie = this.handleDeleteMovie.bind(this);
  //   }
  render() {
    return <React.Fragment>{this.displayContent()}</React.Fragment>;
  }
  displayContent() {
    return this.state.movies.length === 0 ? (
      <p className="m-3">There are no movies to display</p>
    ) : (
      this.displayMoviesTableWithMessage()
    );
  }
  handleDeleteMovie(key) {
    deleteMovie(key);
    this.setState({ movies: getMovies() });
  }

  displayMoviesTableWithMessage() {
    return (
      <React.Fragment>
        <p className="m-3">
          Currently displaying {this.state.movies.length} movies
        </p>
        <table className="table w-75 mx-auto">
          {this.displayTableHeader()}
          {this.displayTableBody()}
        </table>
      </React.Fragment>
    );
  }
  displayTableHeader() {
    return (
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Genre</th>
          <th scope="col">Stock</th>
          <th scope="col">Rate</th>
          <th scope="col"></th>
        </tr>
      </thead>
    );
  }
  displayTableBody() {
    return (
      <tbody>
        {this.state.movies.map((movie) => {
          console.log(movie);
          return (
            <React.Fragment>
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    onClick={() => this.handleDeleteMovie(movie._id)}
                    className="btn btn-sm btn-danger m-1"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </React.Fragment>
          );
        })}
      </tbody>
    );
  }
}

export default Vapra;
