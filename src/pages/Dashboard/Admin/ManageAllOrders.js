import React from "react";
import { useQuery } from "react-query";
import Loading from "../../../sherd/Loading/Loading";
import ManageAllOrdersRow from "./ManageAllOrdersRow";

const ManageAllOrders = () => {
  const { data: orders, isLoading } = useQuery("allOrders", () =>
    fetch("https://quiet-dawn-51463.herokuapp.com/all-order").then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h1>Total Ordered: {orders.length}</h1>
      <div>
        <div class="overflow-x-auto">
          <table class="table w-full">
            <thead>
              <tr>
                <th>No</th>
                <th>Image</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <ManageAllOrdersRow
                  order={order}
                  key={order._id}
                  index={index}
                ></ManageAllOrdersRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageAllOrders;
