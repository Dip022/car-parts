import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddProduct = () => {
  const { register, handleSubmit } = useForm();

  const imageKey = "b61f975ab7c49fb001eebda643166024";

  const onSubmit = (data, e) => {
    e.preventDefault();

    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=${imageKey}`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const newProduct = {
            name: data.productName,
            price: data.pricer,
            image: img,
            stock: data.stock,
            description: data.description,
          };
          console.log(newProduct);
          fetch(`https://quiet-dawn-51463.herokuapp.com/new-product`, {
            method: "POST",
            headers: {
              authorization: `Bearer ${localStorage.getItem("access_token")}`,
              "content-type": "application/json",
            },
            body: JSON.stringify(newProduct),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              toast.success("Product add success");
            });
        }
      });
  };
  return (
    <div>
      <div class="card w-full lg:w-[500px] bg-base-100 shadow-xl px-8 py-5">
        <div class="card-body">
          <h2 class="card-title">Add A New Product</h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex items-center">
            <input
              type="file"
              {...register("image", {
                required: {
                  value: true,
                  message: "Image is Required",
                },
              })}
            />
          </div>
          <div className="mt-6">
            <div className="mt-4">
              <div className="text-md md:text-xl mb-4 w-52 md:w-auto">
                <label htmlFor="">Product Name:</label>
                <input
                  className="input input-bordered w-full max-w-xs ml-2"
                  type="text"
                  placeholder="Product Name"
                  {...register("productName")}
                  required
                />
              </div>
              <div className="text-md md:text-xl mb-4 w-52 md:w-auto4">
                <label htmlFor="">Description:</label>
                <textarea
                  className="input input-bordered w-full max-w-xs ml-2"
                  type="text"
                  {...register("description")}
                  placeholder="Description"
                ></textarea>
              </div>
              <div className="text-md md:text-xl mb-4 w-52 md:w-auto">
                <label htmlFor="">Price:</label>
                <input
                  className="input input-bordered w-full max-w-xs ml-2"
                  type="text"
                  placeholder="Pricer"
                  {...register("pricer")}
                  required
                />
              </div>
              <div className="text-md md:text-xl mb-4 w-52 md:w-auto">
                <label htmlFor="">Stock:</label>
                <input
                  className="input input-bordered w-full max-w-xs ml-2"
                  type="text"
                  placeholder="Stock Product"
                  {...register("stock")}
                  required
                />
              </div>
            </div>
          </div>
          <input type="submit" value="ADD" className="btn btn-primary" />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
