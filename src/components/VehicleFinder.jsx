import { useState } from 'react';
import '../styles/VehicleFinder.css';

const VehicleFinder = () => {
  const [vehicle, setVehicle] = useState({ year: '', make: '', model: '' });

  const handleFind = () => {
    if (!vehicle.year || !vehicle.make || !vehicle.model) {
      alert('Please select all fields to find parts.');
    } else {
      alert(`Searching parts for: ${vehicle.year} ${vehicle.make} ${vehicle.model}`);
    }
  };

  return (
    <section className="vehicle-finder" id="shop">
      <div className="container finder-container">
        <h3>Find Parts for Your Vehicle</h3>
        <div className="finder-inputs">
          <select onChange={(e) => setVehicle({ ...vehicle, year: e.target.value })}>
            <option value="">Year</option>
            <option>2024</option>
            <option>2023</option>
            <option>2022</option>
            <option>2021</option>
          </select>

          <select onChange={(e) => setVehicle({ ...vehicle, make: e.target.value })}>
            <option value="">Make</option>
            <option>Toyota</option>
            <option>Honda</option>
            <option>Ford</option>
            <option>BMW</option>
          </select>

          <select onChange={(e) => setVehicle({ ...vehicle, model: e.target.value })}>
            <option value="">Model</option>
            <option>Civic</option>
            <option>Mustang</option>
            <option>Supra</option>
            <option>M4</option>
          </select>

          <button className="btn btn-primary" onClick={handleFind}>
            Find Parts
          </button>
        </div>
      </div>
    </section>
  );
};

export default VehicleFinder;