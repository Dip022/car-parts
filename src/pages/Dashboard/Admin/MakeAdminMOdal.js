import React from "react";
import { toast } from "react-toastify";

const MakeAdminMOdal = ({ setUserDelete, userDelete, refetch }) => {
  const { _id } = userDelete;

  const deleteUserHandler = (id) => {
    fetch(`https://quiet-dawn-51463.herokuapp.com/user/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          setUserDelete(null);
          refetch();
          toast.success("User Delete Success!");
        }
      });
  };

  return (
    <div>
      <input
        type="checkbox"
        id="make-admin-delete-modal"
        class="modal-toggle"
      />
      <div class="modal">
        <div class="modal-box">
          <h3 class="font-bold text-lg">
            Congratulations random Interner user!
          </h3>
          <p class="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div class="modal-action">
            <button
              onClick={() => deleteUserHandler(_id)}
              className="btn btn-sm"
            >
              YES
            </button>
            <label for="make-admin-delete-modal" class="btn btn-sm">
              No
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeAdminMOdal;
