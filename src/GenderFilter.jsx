import React, { useState } from "react";

const GenderFilter = ({ handleGenderChange }) => {
  const [selectedGenders, setSelectedGenders] = useState([]);

  const onGenderChange = (event) => {
    const selectedGender = event.target.value;
    const updatedGenders = selectedGenders.includes(selectedGender)
      ? selectedGenders.filter((gender) => gender !== selectedGender)
      : [...selectedGenders, selectedGender];
    setSelectedGenders(updatedGenders);
    handleGenderChange(updatedGenders); // Pass the selected genders to parent component
  };

  return (
    <div>
      <h3>Gender:</h3>
      <label>
        <input type="checkbox" value="Male" onChange={onGenderChange} />
        Male
      </label>
      <h3>Female:</h3>
      <label>
        <input type="checkbox" value="Female" onChange={onGenderChange} />
        Female
      </label>
     
    </div>
  );
};

export default GenderFilter;