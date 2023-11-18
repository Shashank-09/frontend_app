
import React, { useState } from "react";

const AvailabilityFilter = ({ handleAvailabilityChange }) => {
  const [selectedAvailabilities, setSelectedAvailabilities] = useState([]);

  const onAvailabilityChange = (event) => {
    const selectedAvailability = event.target.value;
    if (selectedAvailabilities.includes(selectedAvailability)) {
      setSelectedAvailabilities(selectedAvailabilities.filter((avail) => avail !== selectedAvailability));
    } else {
      setSelectedAvailabilities([...selectedAvailabilities, selectedAvailability]);
    }
    handleAvailabilityChange(selectedAvailabilities); 
  };

  return (
    <div className="availability-filter">
  <h3>Availability:</h3>
  <label>
    <input type="checkbox" value="true" onChange={onAvailabilityChange} />
    Available
  </label>
  <label>
    <input type="checkbox" value="false" onChange={onAvailabilityChange} />
    Not Available
  </label>
</div>
  );
};

export default AvailabilityFilter;
