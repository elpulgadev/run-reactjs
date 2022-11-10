import { Component } from "react";

const Euro = ({ amount }) => <p>Euro: {amount} * 0.86</p>;
const Pound = ({ amount }) => <p>Pound: {amount} * 0.76</p>;

class Amount extends Component {
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
      <div>
        <span>US Dollar: {this.state.amount} </span>
        <button type="button" onClick={this.onIncrement}>
          +
        </button>
        <button type="button" onClick={this.onDecrement}>
          -
        </button>
        <Euro amount={this.state.amount} />
        <Pound amount={this.state.amount} />
      </div>
    );
  }
}

export default Amount;

// Tuy nhiên, nhược điểm là Amount component phải biết về các Currency component ngay bây giờ. Mỗi khi bạn muốn thay đổi kết quả hiển thị, bạn sẽ phải chạm vào Amount component. Vì vậy, điều gì sẽ xảy ra nếu bạn có thể để nguyên Amount component như trước đây và lấy các currency component bên ngoài nó?
