import React, { Component } from "react";

export default class ProjectItem extends Component {
  truncateDescription(description, maxLength) {
    if (description.length <= maxLength) {
      return description;
    } else {
      return description.substring(0, maxLength) + "…";
    }
  }

  render() {
    const { project } = this.props; // Destructure the project prop
    const maxLength = 100; // Maximum length for description

    // Define the fixed width and height for the image
    const imageStyle = {
      width: "207px", // Set the desired width
      height: "175px", // Set the desired height
    };

    return (
      <div>
      <div className="card my-4" style={{ width: 210 }}>
        <img
          src={project.photoLink}
          className="card-img-top"
          alt="website"
          style={imageStyle} // Apply the fixed size to the image
        />
        <div className="card-body">
          <h5 className="card-title">{project.label}</h5>
          <p className="card-text">
            {this.truncateDescription(project.description, maxLength)}
          </p>
          <a href="/" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div></div>
    );
  }
}
