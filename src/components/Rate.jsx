import React from "react";

const Rate = ({ state }) => {
  const rates = state.rates;
  const nom = state.nom;
  const exchangeRates = rates * nom;
  return (
    <div>
      <h2>{exchangeRates}</h2>
    </div>
  );
};

export default Rate;
