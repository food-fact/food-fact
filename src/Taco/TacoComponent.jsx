import React, {Component, Fragment} from 'react';
import Button from '../common/Button';
import './TacoStyles.css';

class TacoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taco: null,
    };

    this.fetchData = this.fetchData.bind(this);
  }

  fetchData() {
    fetch(`https://taco-randomizer.herokuapp.com/random/`)
      .then(results => {
        return results.json();
      }).then(data => this.setState({taco: data}));
  }

  render() {
    return (
      <div>
        <Button name="Generate New Taco Recipe" onClick={this.fetchData} />
        <div className="taco">
        {
          this.state.taco
            ? <Fragment>
                <h2>Shell: {this.state.taco.shell.name}</h2>
                <h2>Seasoning: {this.state.taco.seasoning.name}</h2>
                <h2>Base Layer: {this.state.taco.base_layer.name}</h2>
                <h2>Mixin: {this.state.taco.mixin.name}</h2>
                <h2>Condiment: {this.state.taco.condiment.name}</h2>
              </Fragment>
            : <h4>No Taco :(</h4>
        }
        </div>
      </div>
    )
  }
}

export default TacoComponent;