import { Component } from "react";

class Amount extends Component {
  render() {
    return (
      <div>
        <span>US Dollar: {this.state.amount} </span>
        <button type="button" onClick={this.onIncrement}>
          +
        </button>
        <button type="button" onClick={this.onDecrement}>
          -
        </button>
        {this.props.children}
      </div>
    );
  }
}

export default Amount;
