import React, { Component } from "react";
// import axios from 'axios';

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      mode: ""
    };
    this.getResults = this.getResults.bind(this);
  }

  goToSearch() {
    this.setState({
      mode: "displayForm"
    });
  }
  getResults() {
    const main = this.props.dataSearch;
    const city = this.props.name;
    // const desc = this.props.desc;
    return (
      <div className="results">
        <p>{city}</p>
        <p>Temp: {main.temp}&deg;</p>
        <p>Max Temp: {main.temp_max}&deg;</p>
        <p>Min Temp: {main.temp_min}&deg;</p>
      </div>
    );
  }



  render() {
    return <div>{this.getResults()}</div>;
  }
}

export default Results;
