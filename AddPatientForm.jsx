import { useState } from "react";

function AddPatientForm({ onAdd }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [contact, setContact] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ id: Date.now(), name, age, contact });
    setName(""); setAge(""); setContact("");
  };

  return (
    <form onSubmit={handleSubmit} className="card p-3 shadow-sm">
      <h5>Add New Patient</h5>
      <input
        className="form-control mb-2"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <input
        className="form-control mb-2"
        placeholder="Age"
        value={age}
        onChange={e => setAge(e.target.value)}
        required
      />
      <input
        className="form-control mb-2"
        placeholder="Contact"
        value={contact}
        onChange={e => setContact(e.target.value)}
        required
      />
      <button className="btn btn-secondary w-100">Add Patient</button>
    </form>
  );
}

export default AddPatientForm;
