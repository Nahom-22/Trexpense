import React, { useEffect, useState } from "react";
import './filter.css'

function Filter(props) {
  const [val, setVal] = useState(2);
  const handleChange = (e) => {
    setVal(e.target.value);
  };
  const {onGetYear: getYear}=props
  
  useEffect(()=>{
    getYear(val)
  },[getYear,val])
  return (
    <div className="filter-container">
      <label id="filter-label">Filter Year</label>
      <select value={val} onChange={handleChange}>
        <option value={2} defaultValue>All</option>
        <option value={2022}>2022</option>
        <option value={2021}>2021</option>
        <option value={2020}>2020</option>
      </select>
    </div>
  );
}

export default Filter;
