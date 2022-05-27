import React from "react";

const ManageProductsRow = ({ part, index, setDeletePart }) => {
  const { name, price, image, stock } = part;

  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <div class="avatar">
          <div class="w-24 rounded-full">
            <img src={image} alt="" />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>${price}</td>
      <td>{stock}</td>
      <td>
        <label
          onClick={() => setDeletePart(part)}
          htmlFor="product-delete-modal"
          className="btn btn-warning"
        >
          Delete
        </label>
      </td>
    </tr>
  );
};

export default ManageProductsRow;
