import React from "react";
import { toast } from "react-toastify";

const MyOrdersCancleModal = ({ cancleOrder, refetch, setCancleOrder }) => {
  const { _id } = cancleOrder;

  const cancleOrderHandler = (id) => {
    fetch(`https://quiet-dawn-51463.herokuapp.com/order/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Your Order Cancle success");
          refetch();
          setCancleOrder(null);
        }
      });
  };

  return (
    <div>
      <input type="checkbox" id="order-cancle-order" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Congratulations random Interner user!
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div className="modal-action">
            <button
              onClick={() => cancleOrderHandler(_id)}
              className="btn btn-sm btn-warning"
            >
              Cancle
            </button>
            <label htmlFor="order-cancle-order" className="btn btn-sm">
              No
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrdersCancleModal;
