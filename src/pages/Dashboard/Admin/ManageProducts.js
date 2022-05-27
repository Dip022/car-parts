import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../../sherd/Loading/Loading";

import ManageProductsDeleteModal from "./ManageProductsDeleteModal";
import ManageProductsRow from "./ManageProductsRow";

const ManageProducts = () => {
  const [deletePart, setDeletePart] = useState(null);

  const {
    data: parts,
    isLoading,
    refetch,
  } = useQuery("allParts", () =>
    fetch("http://localhost:5000/parts").then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h2>Manage Parts</h2>
      <div>
        <div class="overflow-x-auto">
          <table class="table w-full">
            <thead>
              <tr>
                <th>No</th>
                <th>Image</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {parts.map((part, index) => (
                <ManageProductsRow
                  part={part}
                  key={part._id}
                  index={index}
                  setDeletePart={setDeletePart}
                ></ManageProductsRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {deletePart && (
        <ManageProductsDeleteModal
          deletePart={deletePart}
          setDeletePart={setDeletePart}
          refetch={refetch}
        ></ManageProductsDeleteModal>
      )}
    </div>
  );
};

export default ManageProducts;
