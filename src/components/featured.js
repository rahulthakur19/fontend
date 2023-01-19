import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    const response = await axios.get("http://localhost:5000/product");
    const data=response.data;
    setProduct(data.filter(data => data.featured));
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/product/${id}`);
      getProduct();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5">
      <div className="column is-half">
      <Link to="/" className="button is-success">
          Home
        </Link>
        <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th>pid</th>
              <th>Name</th>
              <th>price</th>
              <th>rating</th>
              <th>company</th>
              <th>Date</th>
              <th>Modify</th>
            </tr>
          </thead>
          <tbody>
            {product.map((product) => (
              <tr key={product._id}>
                <td>{product.pid}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.rating}</td>
                <td>{product.company}</td>
                <td>{product.create}</td>
                <td>
                  <Link
                    to={`edit/${product._id}`}
                    className="button is-info is-small mr-1"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteProduct(product._id)}
                    className="button is-danger is-small"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
