import React, { useState } from "react";

const DomainFilter = ({ handleDomainChange }) => {
  const [selectedDomains, setSelectedDomains] = useState([]);

  const onDomainChange = (event) => {
    const selectedDomain = event.target.value;
    const updatedDomains = selectedDomains.includes(selectedDomain)
      ? selectedDomains.filter((domain) => domain !== selectedDomain)
      : [...selectedDomains, selectedDomain];
    setSelectedDomains(updatedDomains);
    handleDomainChange(updatedDomains); 
  };

  return (
    <div className="filter-container">
    <div className="filter">
      <h3>Domain:</h3>
      <div className="checkbox">
      <label>
        <input type="checkbox" value="Sales" onChange={onDomainChange} />
        Sales
      </label>
      <label>
        <input type="checkbox" value="Finance" onChange={onDomainChange} />
        Finance
      </label>
      <label>
        <input type="checkbox" value="Marketing" onChange={onDomainChange} />
        Marketing
      </label>
      <label>
        <input type="checkbox" value="UI Designing" onChange={onDomainChange} />
        UI Designing
      </label>
      <label>
        <input type="checkbox" value="Marketing" onChange={onDomainChange} />
        Marketing
      </label>
      <label>
        <input type="checkbox" value="IT" onChange={onDomainChange} />
        IT
      </label>
      <label>
        <input type="checkbox" value="Business Development" onChange={onDomainChange} />
        Business Development
      </label>
      </div>
      
    </div>
    </div>
  );
};

export default DomainFilter;
