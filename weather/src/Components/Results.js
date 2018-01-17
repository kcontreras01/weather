import React, { Component } from 'react';
// import axios from 'axios';

class Results extends Component {
  constructor(props){
    super(props);
    this.state = {
      results: [],
      mode: ''
    }

    this.getResults = this.getResults.bind(this);
    // this.handleChange = this.handleChange.bind(this);

  }

// CANT MAP OVER OBJECT. ONLY ONE RESPONSE RECEIVED

	goToSearch(){
		this.setState({
			mode: 'displayForm'
		})
	}
   getResults() {
   	return(
   		console.log(this.props.dataSearch),
   		<div>
   		<p>The temperature is: {this.props.dataSearch.temp}</p>
   		<p>The temperature max is: {this.props.dataSearch.temp_max}</p>
   		<p>The temperature min is: {this.props.dataSearch.temp_min}</p>
   		</div>
   		)
   		}
   //    console.log('the props are: ', this.props.dataSearch.weather),
   //    // this.props.dataSearch.map(e => {
			// console.log("the props in getResults are: ", this.props.dataSearch),
   //      // return (
   //      //  console.log('this is e: ', e)
   //      // )
   //    <div>{this.props.dataSearch.weather}</div>

  render() {
    return(
    	<div>{this.getResults()}
    	</div>
    )
  }
  }

export default Results;