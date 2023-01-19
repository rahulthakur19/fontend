import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const [pid,setPid] = useState("");
  const [name, setName] = useState("");
  const [price,setPrice] = useState("");
  const [featured,setFeatured]=useState(false);
  const [rating, setRating] = useState("");
  const [company, setCompany] = useState("");
  const [create,setCreate]= useState(new Date().toISOString().slice(0, 10));
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getProductById();
  }, []);

  const getProductById = async () => {
    const response = await axios.get(`http://localhost:5000/product/${id}`);
    setPid(response.data.pid);
    setName(response.data.name);
    setPrice(response.data.price);
    setFeatured(response.data.featured);
    setRating(response.data.rating);
    setCompany(response.data.company);
    setCreate(response.data.create);
  };

  const updateProduct = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/product/${id}`, {
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
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5">
      <div className="column is-half">
        <form onSubmit={updateProduct}>
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

export default EditUser;
