import React from "react";

import { toast } from "react-toastify";

import avatar from "../../../image/avatar/avatar.png";

const MakeAdminRow = ({ user, index, refetch, setUserDelete }) => {
  const { image, email, role } = user;

  const makeAdminHandler = () => {
    fetch(`https://quiet-dawn-51463.herokuapp.com/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Faild to make an admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success("Successfully made an admin");
        }
      });
  };

  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div class="avatar">
          <div class="w-24 rounded-full">
            <img src={image || avatar} alt="" />
          </div>
        </div>
      </td>
      <td>{email}</td>
      <td>
        {role ? role : "User"}
        {role === "admin" || (
          <button
            onClick={makeAdminHandler}
            className="btn btn-accent w-28 ml-2"
          >
            Make Admin
          </button>
        )}
      </td>
      <td>
        <label
          onClick={() => setUserDelete(user)}
          htmlFor="make-admin-delete-modal"
          className="btn btn-warning"
        >
          Delete
        </label>
      </td>
    </tr>
  );
};

export default MakeAdminRow;
