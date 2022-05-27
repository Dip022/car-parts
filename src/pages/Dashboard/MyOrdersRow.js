import React from "react";

const MyOrdersRow = ({ order, index, setCancleOrder }) => {
  const { productImage, productPrice, productName, quantity } = order;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <img className="w-12" src={productImage} alt="" />
      </td>
      <td>{productName}</td>
      <td>${productPrice}</td>
      <td>{quantity}</td>
      <td>${quantity * productPrice}</td>
      <td>
        <span className="text-sm italic">Unpaid</span>
      </td>
      <td>
        <label
          onClick={() => setCancleOrder(order)}
          htmlFor="order-cancle-order"
          className="btn btn-sm btn-warning"
        >
          Cancle
        </label>
      </td>
    </tr>
  );
};

export default MyOrdersRow;
