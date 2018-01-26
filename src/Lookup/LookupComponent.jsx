import React, { Component, Fragment } from 'react';

//737628064502
//722252102607
class LookupContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      barcode: '',
      product: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchFacts = this.fetchFacts.bind(this);
  }

  fetchFacts() {
    fetch(`https://world.openfoodfacts.org/api/v0/product/${this.state.barcode}.json`)
      .then(results => {
        return results.json();
      }).then(data => {
      this.setState({product: data.product})
    })
  }

  handleChange(event) {
    this.setState({barcode: event.target.value});
    event.preventDefault();
  }

  handleSubmit(event) {
    event.preventDefault();
    this.fetchFacts();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Barcode:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>

        {
          this.state.product &&
          <Fragment>
            <h2>name: {this.state.product.product_name_en}</h2>
            <h2>energy: {this.state.product.nutriments.energy}</h2>
          </Fragment>
        }
      </div>
    )
  }
}

export default LookupContainer;