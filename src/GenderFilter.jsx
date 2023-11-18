import React, { useState } from "react";

const GenderFilter = ({ handleGenderChange }) => {
  const [selectedGenders, setSelectedGenders] = useState([]);

  const onGenderChange = (event) => {
    const selectedGender = event.target.value;
    const updatedGenders = selectedGenders.includes(selectedGender)
      ? selectedGenders.filter((gender) => gender !== selectedGender)
      : [...selectedGenders, selectedGender];
    setSelectedGenders(updatedGenders);
    handleGenderChange(updatedGenders); 
  };

  return (
    <div className="genderContainer">
  <h3>Gender:</h3>
  <div className="genderCheckboxes">
    <label>
      <input type="checkbox" value="Male" onChange={onGenderChange} />
      Male
    </label>
    <label>
      <input type="checkbox" value="Female" onChange={onGenderChange} />
      Female
    </label>
  </div>
</div>
  );
};

export default GenderFilter;