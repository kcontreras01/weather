import React, { Component } from 'react';
import Results from './Results.js';
import axios from 'axios';

class Search extends Component {
  constructor(props){
    super(props);

    this.state = {
      mode: 'displayForm',
      current: false,
      value: '',
      results: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onClick = this.onClick.bind(this);
    this.changeMode = this.changeMode.bind(this);    

  }

  // componentDidMount(){
  //   axios.get(``)
  //     .then(res => {
  //       this.setState({
  //         results: res.data
  //       })
  //     })
  // }

  handleChange(event) {
    event.preventDefault();
    this.setState({
      value: event.target.value
    })
  }

  onClick(event) {
    event.preventDefault();
    this.setState({
      mode: 'displayForm',
      value: ""
    });
  }

  onSubmit(event) {
    event.preventDefault();
    // console.log('the state value is: ', this.state.value)
    this.setState({
      mode: 'displayResults'
    });

    axios.get(`http://api.openweathermap.org/data/2.5/weather?zip=${this.state.value}&APPID=1c742ce6920b65c49ad5268f6a32a0bf&units=imperial`)
      .then(res => {
      // console.log(this.state.value)
      // console.log("res.data", res.data.main);
      this.setState({
        results: res,
        value: ''
      })
    })
  };

  changeMode(mode, current = false){
    this.setState(prev => {
      prev.mode = mode;
      prev.current = current;
      return prev;
    });
  }
  render() {
    return (
      <div className="App">
        {this.state.mode === 'displayForm' && (
          <div>
            <form className="searchForm" onSubmit={this.onSubmit}>
              <input
                type="text"
                placeholder="ZIP CODE"
                value={this.state.value}
                onChange={this.handleChange}
                className="searchFormBar"
              />
              <br />
              <input className="searchButton" type="submit" value="SEARCH" />
            </form>
          </div>
        )}

        {this.state.mode === 'displayResults' && (
          <div>
            <Results dataSearch={this.state.results} />
          </div>
        )}
      </div>
    );
  }
}

export default Search;
