import React from "react";

import Amount from "./Amount";

const Euro = ({ amount }) => <p>Euro: {amount} * 0.86</p>;
const Pound = ({ amount }) => <p>Pound: {amount} * 0.76</p>;

class RenderProps extends React.Component {
  render() {
    return (
      <Amount
        renderAmountOne={(amount) => (
          <div>
            <h2>My Currency Converter</h2>
            <Pound amount={amount} />
            <Euro amount={amount} />
          </div>
        )}
        renderAmountTwo={(amount) => (
          <div>
            <h2>My Other Amount</h2>
            <Pound amount={amount} />
            <Euro amount={amount} />
          </div>
        )}
      />
    );
  }
}

export default RenderProps;
