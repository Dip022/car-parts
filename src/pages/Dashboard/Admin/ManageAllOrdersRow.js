import React from "react";

const ManageAllOrdersRow = ({ order, index }) => {
  const { productImage, productName, productPrice, quantity } = order;

  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <div class="avatar">
          <div class="w-24 rounded-full">
            <img src={productImage} alt="" />
          </div>
        </div>
      </td>
      <td>{productName}</td>
      <td>${productPrice}</td>
      <td>{quantity}</td>
      <td>${productPrice * quantity}</td>
      <td>unpaid</td>
      <td>
        <button className="btn btn-sm">UnShipping</button>
      </td>
    </tr>
  );
};

export default ManageAllOrdersRow;
