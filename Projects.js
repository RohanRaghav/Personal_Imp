import React, { Component } from "react";
import ProjectItem from "./ProjectItem";
import DropDownSearch from "./DropDownSearch";

export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 2000);
  }

  render() {
    const { loading } = this.state;

    return (
      <div className="container my-3">
        <center><DropDownSearch /></center>
        <br />
        <br />
        <div className="row">
          {loading ? (
            <div className="container">
            <div className="col-md-3 text-center">
              <div className="spinner-border text-secondary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div></div>
          ) : (
            <>
              <div className="col-md-3">
                <ProjectItem />
              </div>
              <div className="col-md-3">
                <ProjectItem />
              </div>
              <div className="col-md-3">
                <ProjectItem />
              </div>
              <div className="col-md-3">
                <ProjectItem />
              </div>
              <div className="col-md-3">
                <ProjectItem />
              </div>
              <div className="col-md-3">
                <ProjectItem />
              </div>
              <div className="col-md-3">
                <ProjectItem />
              </div>
              <div className="col-md-3">
                <ProjectItem />
              </div>
              <div className="col-md-3">
                <ProjectItem />
              </div>
              <div className="col-md-3">
                <ProjectItem />
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
}
