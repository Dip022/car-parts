import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../../sherd/Loading/Loading";
import MakeAdminMOdal from "./MakeAdminMOdal";
import MakeAdminRow from "./MakeAdminRow";

const MakeAdmin = () => {
  const [userDelete, setUserDelete] = useState(null);

  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("allUsers", () =>
    fetch("http://localhost:5000/user").then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h2>use {users.length}</h2>

      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>No</th>
              <th>Photo</th>
              <th>Email</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <MakeAdminRow
                user={user}
                key={user._id}
                index={index}
                refetch={refetch}
                setUserDelete={setUserDelete}
              ></MakeAdminRow>
            ))}
          </tbody>
        </table>
      </div>
      {userDelete && (
        <MakeAdminMOdal
          refetch={refetch}
          userDelete={userDelete}
          setUserDelete={setUserDelete}
        ></MakeAdminMOdal>
      )}
    </div>
  );
};

export default MakeAdmin;
