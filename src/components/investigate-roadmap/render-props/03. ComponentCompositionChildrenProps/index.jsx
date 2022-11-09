import React from "react";

import Amount from "./Amount";

const Euro = ({ amount }) => <p>Euro: {amount} * 0.86</p>;
const Pound = ({ amount }) => <p>Pound: {amount} * 0.76</p>;

class RenderProps extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: 0,
    };
  }

  onIncrement = () => {
    this.setState((state) => ({ amount: state.amount + 1 }));
  };

  onDecrement = () => {
    this.setState((state) => ({ amount: state.amount - 1 }));
  };

  render() {
    return (
      <>
        <Amount>
          <Pound amount={this.state.amount} />
          <Euro amount={this.state.amount} />
        </Amount>
      </>
    );
  }
}

export default RenderProps;
