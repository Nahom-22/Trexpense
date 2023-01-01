import React, { useState } from "react";


import Button from "../../UI/button/Button";

import './newform.css'

function NewForm(props) {
  const [nameValue, setNameValue] = useState();
  const [dateValue, setDateValue] = useState();
  const [priceValue, setPriceValue] = useState();

  const handleChangeName = (e) => {
    setNameValue(e.target.value);
  };
  const handleChangeDate = (e) => {
    setDateValue(e.target.value);
  };
  const handleChangePrice = (e) => {
    setPriceValue(e.target.value);
  };
  const priceNumber = parseInt(priceValue);
  const newItem = {
    name: nameValue,
    date: dateValue,
    price: priceNumber,
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onGetItem(newItem);
  };
  return (
    <form className="new-expense-form" onSubmit={handleSubmit}>
      <div className="form-input">
        <label>Expense Name</label>
        <input type="text" onChange={handleChangeName} />
      </div>
      <div className="form-input">
        <label>Expense Date</label>
        <input type="date" onChange={handleChangeDate} />
      </div>
      <div className="form-input">
        <label>Expense Price</label>
        <input type="text" onChange={handleChangePrice} />
      </div>
      <div className="buttons">
        <Button className="submit-btn" name="Add Expense" />
        <Button className="cancel-btn" name="Cancel" onClick={props.onHandleClick.bind(null)} />
      </div>
    </form>
  );
}

export default NewForm;
