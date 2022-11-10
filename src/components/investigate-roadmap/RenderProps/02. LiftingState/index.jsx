import { Component } from "react";

const Amount = ({ amount, onIncrement, onDecrement }) => (
  <div>
    <span>US Dollar: {amount} </span>

    <button type="button" onClick={onIncrement}>
      +
    </button>
    <button type="button" onClick={onDecrement}>
      -
    </button>
  </div>
);

const Euro = ({ amount }) => <p>Euro: {amount} * 0.86</p>;
const Pound = ({ amount }) => <p>Pound: {amount} * 0.76</p>;

class RenderProps extends Component() {
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
        <Amount
          amount={this.state.amount}
          onIncrement={this.onIncrement}
          onDecrement={this.onDcrement}
        />
        <Pound amount={this.state.amount} />
        <Euro amount={this.state.amount} />
      </>
    );
  }
}

export default RenderProps;

// Tất state được quản lý bởi RenderProps component và các Currency component và Amount component chỉ nhận được props. Việc triển khai để quản lý state được giữ nguyên, nó chỉ được nâng lên RenderProps.
