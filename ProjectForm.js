import React, { useState } from "react";
import FileUploader from "./FileUploader";
import CountrySearch from "./CountrySearch";


export default function ProjectForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    city: "",
    state: "",
    zip: "",
    agree: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    // You can validate the form data and update the form's validation state as needed
  };
  const handleFileUpload = (file) => {
    // Handle the uploaded file here (e.g., upload it to a server or process it)
    console.log("Uploaded file:", file.name);
  };


  return (
    <div className="container my-4">
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-4">
          <label htmlFor="validationServer01" className="form-label">
            First name
          </label>
          <input
            type="text"
            className={`form-control ${
              formData.firstName ? "is-valid" : "is-invalid"
            }`}
            id="validationServer01"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
          <div className="valid-feedback">Looks good!</div>
          <div className="invalid-feedback">Please enter your first name.</div>
        </div>
        <div className="col-md-4">
          <label htmlFor="validationServer01" className="form-label">
            Middle name
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Middle name"
            aria-label="Middle name"
          />
          <div className="valid-feedback">Looks good!</div>
          <div className="invalid-feedback">Please enter your first name.</div>
        </div>
        <div className="col-md-4">
          <label htmlFor="validationServer01" className="form-label">
            Last name
          </label>
          <input
            type="text"
            className={`form-control ${
              formData.lastName ? "is-valid" : "is-invalid"
            }`}
            id="validationServer01"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
          <div className="valid-feedback">Looks good!</div>
          <div className="invalid-feedback">Please enter your last name.</div>
        </div>
        <CountrySearch /><FileUploader onFileSelect={handleFileUpload} />
        {/* ... Repeat similar code for other form fields */}
        <div className="col-12">
          <div className="form-check">
            <input
              className={`form-check-input ${
                formData.agree ? "is-valid" : "is-invalid"
              }`}
              type="checkbox"
              id="invalidCheck3"
              name="agree"
              checked={formData.agree}
              onChange={handleInputChange}
              required
            />
            <label className="form-check-label" htmlFor="invalidCheck3">
              Agree to terms and conditions
            </label>
            <div className="invalid-feedback">
              You must agree before submitting.
            </div>
          </div>
        </div>
        <div className="col-12">
          <button className="btn btn-primary" type="submit">
            Submit form
          </button>
        </div>
      </form>
    </div>
  );
}
