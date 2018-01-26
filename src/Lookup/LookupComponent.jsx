import React, { Component, Fragment } from 'react';
import './LookupStyles.css';
import ButtonComponent from "../common/Button/ButtonComponent";

//737628064502
//722252102607
class LookupContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      barcode: null,
      response: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({barcode: event.target.value});
    event.preventDefault();
  }

  handleSubmit(event) {
    fetch(`https://world.openfoodfacts.org/api/v0/product/${this.state.barcode}.json`)
      .then(results => {
        return results.json();
      }).then(data => {
      this.setState({response: data})
    });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="form">
          <label className="label">
            Barcode: (try 737628064502)
            <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="barcode here"/>
          </label>
          <ButtonComponent name="submit" value="Submit" className="button" />
        </form>

        <div  className="lookup">
          {
            this.state.response.status ?
            <Fragment>
              <h2>Product Name: {this.state.response.product.product_name}</h2>
              <h2>Calories: {this.state.response.product.nutriments.energy} </h2>
            </Fragment>
              : <h4>No results</h4>
          }
        </div>
      </div>
    )
  }
}

export default LookupContainer;