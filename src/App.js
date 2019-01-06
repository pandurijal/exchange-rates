import React, { Component } from "react";
import Form from "./components/Form";
import Rate from "./components/Rate";
import "./App.css";

class App extends Component {
  state = {
    rate1: "USD",
    rate2: "IDR",
    nom: "1",
    rates: null
  };

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Form
          onExchange={this.handleExchange}
          onChange={this.handleChange}
          value={this.state}
        />
        <Rate state={this.state} />
      </div>
    );
  }

  componentDidMount() {
    this.fetchAPI();
  }

  fetchAPI = () => {
    const rate1 = this.state.rate1;
    const rate2 = this.state.rate2;
    fetch(
      `https://cors-anywhere.herokuapp.com/https://api.exchangeratesapi.io/latest?symbols=${rate2}&base=${rate1}`
    )
      .then(res => res.json())
      .then(data => this.setState({ rates: data.rates[rate2] }));
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleExchange = e => {
    e.preventDefault();
    const rate1 = e.target["rate1"].value;
    const rate2 = e.target["rate2"].value;
    const nom = e.target["nom"].value;
    this.setState({ rate1, rate2, nom });
    this.fetchAPI();
  };
}

export default App;
