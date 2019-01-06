import React from "react";

const Form = ({ onExchange, onChange, value }) => {
  return (
    <div>
      <form onSubmit={onExchange}>
        <div>
          <label>From :</label>
          <input
            type="text"
            name="rate1"
            onChange={onChange}
            value={value.rate1}
          />
        </div>
        <div>
          <label>To :</label>
          <input
            type="text"
            name="rate2"
            onChange={onChange}
            value={value.rate2}
          />
        </div>
        <div>
          <label>Nominal</label>
          <input
            type="number"
            placeholder="1"
            name="nom"
            onChange={onChange}
            value={value.nom}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
