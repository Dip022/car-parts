import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.inti";
import Loading from "../../../sherd/Loading/Loading";

const Purchase = () => {
  const [part, setPart] = useState([]);
  const [quantity, setQuantity] = useState(0);

  const { id } = useParams();

  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    fetch(`http://localhost:5000/part/${id}`)
      .then((res) => res.json())
      .then((data) => setPart(data));
  }, [id]);

  if (loading) {
    return <Loading></Loading>;
  }

  const { name: productName, price, image, stock } = part;

  const handleOrderSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = user?.email;
    const address1 = event.target.address1.value;
    const address2 = event.target.address2.value;
    const city = event.target.city.value;
    const state = event.target.state.value;
    const postalCode = event.target.postal.value;
    const phoneNumber = event.target.phone.value;

    if (quantity < 1000) {
      return toast.error("Please minimum order 1000");
    }

    const newOrder = {
      name,
      email,
      quantity: quantity,
      productName: productName,
      productPrice: price,
      productImage: image,
      productStock: stock,
      address1,
      address2,
      city,
      state,
      postalCode,
      phoneNumber,
    };

    console.log(newOrder);

    fetch("http://localhost:5000/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newOrder),
    })
      .then((res) => res.json())
      .then((data) => data);
  };

  console.log(quantity);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-12 mb-12 px-8">
      <div className="flex justify-center items-center border-2 border-gray-400  rounded-md">
        <div class="card lg:w-lg bg-base-100 shadow-xl px-8 mt-8 mb-12">
          <figure>
            <img className="w-96" src={part.image} alt="part" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{part.name}</h2>
            <p>Price: {part.price}</p>
            <p>Available: {part.stock}</p>
            <label>Quantity: </label>
            <input
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              type="text"
              placeholder="Minimum quantity 1000"
              className="input input-bordered input-sm w-full max-w-[200px]"
              required
            />
          </div>
        </div>
      </div>
      <div className=" mt-8 md:px-5 lg:px-12">
        <h2 className="text-center text-2xl font-bold text-primary mb-10">
          Your Infomation
        </h2>
        <form onSubmit={handleOrderSubmit}>
          <div className="mb-6">
            <span className="mb-1 text-lg block">Name</span>
            <input
              name="name"
              type="text"
              placeholder="Name"
              className="input input-bordered w-full "
              required
            />
          </div>
          <div className="mb-6">
            <span className="mb-1 text-lg block">Email</span>
            <input
              name="email"
              type="email"
              defaultValue={user?.email}
              className="input input-bordered w-full"
              disabled
            />
          </div>
          <div className="mb-6">
            <span className="mb-1 text-lg block">Address Line 1</span>
            <input
              name="address1"
              type="text"
              placeholder="Address Line 1"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="mb-6">
            <span className="mb-1 text-lg block">Address Line 2</span>
            <input
              name="address2"
              type="text"
              placeholder="Address Line 2"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="mb-6">
            <span className="mb-1 text-lg block">City</span>
            <input
              name="city"
              type="text"
              placeholder="City"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="mb-2">
              <span className="mb-1 text-lg block">State</span>
              <input
                name="state"
                type="text"
                placeholder="State"
                className="input input-bordered w-full "
                required
              />
            </div>
            <div className="mb-6">
              <span className="mb-1 text-lg block">Postal Code</span>
              <input
                name="postal"
                type="text"
                placeholder="Postal Code"
                className="input input-bordered w-full  "
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <span className="mb-1 text-lg block">Phone Number</span>
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="mt-5">
            <input
              type="submit"
              value="Purchase"
              className="btn w-40 btn-primary text-white"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Purchase;
