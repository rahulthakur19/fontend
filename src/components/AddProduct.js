import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [pid,setPid] = useState("");
  const [name, setName] = useState("");
  const [price,setPrice] = useState("");
  const [featured,setFeatured]=useState(false);
  const [rating, setRating] = useState("");
  const [company, setCompany] = useState("");
  const [create,setCreate]= useState(new Date().toISOString().slice(0, 10));
  const navigate = useNavigate();

  const saveProduct = async (e) => {
    e.preventDefault();
    console.log(e.target.create);
    try {
      await axios.post("http://localhost:5000/product", {
        pid,
        name,
        price,
        featured,
        rating,
        company,
        create
      });
      
      navigate("/");
    } catch (error) {
      alert("Fill complete Form");
    }
  };

  return (
    <div className="columns mt-5">
      <div className="column is-half">
        <form onSubmit={saveProduct}>
          <div className="field">
            <label className="label">pid</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={pid}
                onChange={(e) => setPid(e.target.value)}
                placeholder="pid"
                required
              />
            </div>
          </div>

          <div className="field">
            <label className="label">name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="name"
                required
              />
            </div>
          </div>

          <div className="field">
            <label className="label">price</label>
            <div className="control">
              <input
                type="number"
                className="input"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="price"
                required
              />
            </div>
          </div>



          <div className="field">
            <label className="label">rating</label>
            <div className="control">
              <input
                type="number"
                className="input"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                placeholder="Rating"
                required
              />
            </div>
          </div>


          <div className="field">
            <label className="label">feature</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select
                  value={featured}
                  onChange={(e) => setFeatured(e.target.value)}
                >
                  <option value="true">true</option>
                  <option value="false">False</option>
                </select>
              </div>
            </div>
          </div>
          
          <div className="field">
            <label className="label">company</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Company"
                required
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Date</label>
            <div className="control">
              <input
                type="date"
                className="input"
                value={create}
                onChange={(e) => setCreate(e.target.value)}
                placeholder="Date"
              />
            </div>
          </div>



          <div className="field">
            <div className="control">
              <button type="submit" className="button is-success">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
