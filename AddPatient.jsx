import React from "react";

function AddPatient() {
  return (
    <div className="container mt-5">
      <h2 className="fw-bold text-primary">Add New Patient</h2>
      <form className="mt-4">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" placeholder="Enter patient name" />
        </div>

        <div className="mb-3">
          <label className="form-label">Age</label>
          <input type="number" className="form-control" placeholder="Enter patient age" />
        </div>

        <div className="mb-3">
          <label className="form-label">Diagnosis</label>
          <input type="text" className="form-control" placeholder="Enter diagnosis" />
        </div>

        <button type="submit" className="btn btn-success">Add Patient</button>
      </form>
    </div>
  );
}

export default AddPatient;
