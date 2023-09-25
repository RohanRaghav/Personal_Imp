import React, { Component } from "react";

export default class ProjectItem extends Component {
  render() {
    return (
      <div className="container my-3">
        <div className="card" style={{ width: 210 }}>
          <img src="/" className="card-img-top" alt="website" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="/" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}
