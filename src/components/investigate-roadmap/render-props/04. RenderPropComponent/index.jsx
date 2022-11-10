import React from "react";

import Amount from "./Amount";

const Euro = ({ amount }) => <p>Euro: {amount} * 0.86</p>;
const Pound = ({ amount }) => <p>Pound: {amount} * 0.76</p>;

class RenderProps extends React.Component {
  render() {
    return (
      <Amount
        // Render prop pattern nâng cao
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

// React's slot pattern
// Điều đó đặc biệt hữu ích khi kết hợp nó với mẫu vị trí của React, được sử dụng để chuyển nhiều thành phần đã cấu tạo đến những vị trí khác nhau trong một thành phần (render prop), nhưng sau đó nâng cấp nó với một hàm render prop để chuyển trạng thái từ thành phần render prop đến thành phần cấu tạo.
// Trong trường hợp này, slot pattern của React được mở rộng với chức năng làm cho dữ liệu từ bên trong thành phần render prop có thể truy cập lại vào các thành phần có rãnh. Như bạn có thể thấy, việc kết hợp tất cả các mẫu (nâng cao) trong React sẽ mang lại cho bạn khả năng kiểm soát chi tiết đối với thành phần thành phần của bạn.
