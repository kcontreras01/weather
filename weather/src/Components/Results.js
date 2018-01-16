import React, {Component} from 'react';

class Results extends Component {
  constructor(props){
    super(props);
    this.state = {
      results: [],
    }

    this.getResults = this.getResults.bind(this);

  }

   getResults() {
      console.log('the props are: ', this.props),
      this.props.dataSearch.map(e => {
        return (
         console.log('this is e: ', e),
        <section key={e._id}>
        	<h2>{e}</h2>
        </section>
        )
      })
  }

  render() {
    return(
      <div>
        {this.getResults()}
      </div>
    )
  }
  }

export default Results;