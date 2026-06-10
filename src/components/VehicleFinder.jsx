import React, { useState } from 'react';
import '../styles/VehicleFinder.css';

const VehicleFinder = () => {
  const [year, setYear] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');

  return (
    <section className="vehicle-finder">
      <div className="container">
        <div className="finder-box">
          <h2>Find Parts for Your Vehicle</h2>
          <div className="finder-grid">
            <select value={year} onChange={(e) => setYear(e.target.value)}>
              <option value="">Year</option>
              <option value="2025">2025</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
            </select>

            <select value={make} onChange={(e) => setMake(e.target.value)}>
              <option value="">Make</option>
              <option value="Toyota">Toyota</option>
              <option value="Honda">Honda</option>
              <option value="Hyundai">Hyundai</option>
              <option value="BMW">BMW</option>
            </select>

            <select value={model} onChange={(e) => setModel(e.target.value)}>
              <option value="">Model</option>
              <option value="Innova">Innova</option>
              <option value="City">City</option>
              <option value="Creta">Creta</option>
              <option value="X1">X1</option>
            </select>

            <button className="btn btn-primary">Search</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VehicleFinder;