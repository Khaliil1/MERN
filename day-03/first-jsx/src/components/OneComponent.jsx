import React, { Component } from "react";

class OneComponent extends Component {
  render() {
    return (
      <div>
        <h3>Things I need to do :</h3>
        {this.props.animals.map((animal, idx) => <h4 key={idx}> {animal}</h4>)}
      </div>
    )
  }
}
export default OneComponent;