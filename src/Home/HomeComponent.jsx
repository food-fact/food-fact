import React, { Component, Fragment } from 'react';

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taco: null,
    };
  }

  componentDidMount() {
    fetch(`http://taco-randomizer.herokuapp.com/random/`)
      .then(results => {
        return results.json();
      }).then(data => this.setState({taco: data}));
  }

  render() {
    return (
      <div>
        {
          this.state.taco &&
          <Fragment>
            <h2>shell: {this.state.taco.shell.name}</h2>
            <h2>seasoning: {this.state.taco.seasoning.name}</h2>
            <h2>base layer: {this.state.taco.base_layer.name}</h2>
            <h2>mixin: {this.state.taco.mixin.name}</h2>
            <h2>condiment: {this.state.taco.condiment.name}</h2>
          </Fragment>
        }
      </div>
    )
  }
}

export default HomeContainer;