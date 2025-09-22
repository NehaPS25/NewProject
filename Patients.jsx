import { useState } from "react";

function Patients({ patients, setPatients }) {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  // Filter patients by search query
  const filteredPatients = patients.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="patients-container">
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search patients..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <div className="card-container">
        {filteredPatients.map(p => (
          <div className="card-wrapper" key={p.id}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{p.name}</h5>
                <p className="card-text">Age: {p.age}</p>
                <p className="card-text">Contact: {p.contact}</p>
                <button className="btn btn-secondary" onClick={() => setSelected(p)}>View Details</button>
              </div>
            </div>
          </div>
        ))}
        {filteredPatients.length === 0 && <p>No patients found</p>}
      </div>

      {selected && (
        <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selected.name}</h5>
                <button type="button" className="btn-close" onClick={() => setSelected(null)}></button>
              </div>
              <div className="modal-body">
                <p><strong>Age:</strong> {selected.age}</p>
                <p><strong>Contact:</strong> {selected.contact}</p>
              </div>
              <div className="modal-footer">
                <button className="btn btn-dark" onClick={() => setSelected(null)}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Patients;
