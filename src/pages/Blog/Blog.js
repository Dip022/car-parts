import React from "react";

const Blog = () => {
  return (
    <div className="px-8 md:px-12">
      <h1 className="text-center mt-16 mb-12 text-3xl font-bold text-primary">
        Blog
      </h1>
      <div className="shadow-2xl shadow-gray mb-12 py-12 px-8">
        <h1 className="text-2xl mb-2">
          1. How will you improve the performance of a React Application?
        </h1>
        <p>
          <span className="font-bold">Ans: </span>
          If you want your website to get good performance. Then you can react
          to your website. Your code will be very simple and will save you from
          re-rendering.
        </p>
      </div>

      <div className="shadow-2xl shadow-gray mb-12 py-12 px-8">
        <h1 className="text-2xl mb-2">
          2. How does prototypical inheritance work?
        </h1>
        <p>
          <span className="font-bold">Ans: </span>
          Each object has an intrinsic property that is a prototype. Prototype
          Inheritance is a feature of JavaScript used to add methods and
          features to objects.
        </p>
      </div>
      <div className="shadow-2xl shadow-gray mb-12 py-12 px-8">
        <h1 className="text-2xl mb-2">
          3. What are the different ways to manage a state in a React
          application?
        </h1>
        <p>
          <span className="font-bold">Ans: </span>
          In response, there are four main methods of governing a state:- 1.
          Local state, 2. Global state, 3. Server state, 4. URL state.
        </p>
      </div>
      <div className="shadow-2xl shadow-gray mb-12 py-12 px-8">
        <h1 className="text-2xl mb-2">
          4. Why you do not set the state directly in React. For example, if you
          have const [products, setProducts] = useState([]). Why you do not set
          products = [...] instead, you use the setProducts?
        </h1>
        <p>
          <span className="font-bold">Ans: </span>
          We can see the information of the products by inserting the products
          that we have into the new [... newProduct] array.
        </p>
      </div>
    </div>
  );
};

export default Blog;
