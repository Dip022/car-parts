import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.inti";
import Loading from "../../sherd/Loading/Loading";
import MyOrdersCancleModal from "./MyOrdersCancleModal";
import MyOrdersRow from "./MyOrdersRow";
import { useQuery } from "react-query";

const MyOrders = () => {
  const [user, loading] = useAuthState(auth);

  const [cancleOrder, setCancleOrder] = useState(null);

  const email = user?.email;

  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("cancleOrder", () =>
    fetch(
      `https://quiet-dawn-51463.herokuapp.com/orderes-product/${email}`
    ).then((res) => res.json())
  );

  if (loading || isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h2>Your Orders</h2>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>No</th>
                <th>Image</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>quantity </th>
                <th>Amount</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <MyOrdersRow
                  order={order}
                  key={order._id}
                  index={index}
                  setCancleOrder={setCancleOrder}
                ></MyOrdersRow>
              ))}
            </tbody>
          </table>
        </div>
        {cancleOrder && (
          <MyOrdersCancleModal
            refetch={refetch}
            cancleOrder={cancleOrder}
            setCancleOrder={setCancleOrder}
          ></MyOrdersCancleModal>
        )}
      </div>
    </div>
  );
};

export default MyOrders;
