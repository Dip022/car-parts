import React from "react";

const ManageProductsDeleteModal = ({ deletePart, setDeletePart, refetch }) => {
  const { _id } = deletePart;

  const handlePartDelete = (id) => {
    fetch(`http://localhost:5000/part/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          setDeletePart(null);
          refetch();
        }
        console.log(data);
      });
  };

  return (
    <div>
      <input type="checkbox" id="product-delete-modal" class="modal-toggle" />
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
              onClick={() => handlePartDelete(_id)}
              className="btn btn-sm"
            >
              Yes
            </button>
            <label for="product-delete-modal" class="btn btn-sm">
              No
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageProductsDeleteModal;
