import React, { useRef, useContext } from "react";
import axios from "axios";
import { MyContext } from "../context/Context";
import { useNavigate } from "react-router-dom";

const CreateNewUser = () => {
  const navigate = useNavigate();
  const inputRef = useRef();
  const { users, setUsers } = useContext(MyContext);

  const onSubmit = (e) => {
    e.preventDefault();
    const user = {
      id: Number(e.target.id.value),
      city: e.target.city.value,
      start_date: e.target.start_date.value,
      end_date: e.target.end_date.value,
      price: e.target.price.value,
      status: e.target.status.value,
      color: e.target.color.value,
    };
    console.log(user);
    axios
      .post("http://localhost:4500/users", user)
      .then((res) => setUsers([...users, res.data]));
    navigate("/");
  };

  return (
    <div>
      <h1>Create New User</h1>
      <form onSubmit={onSubmit} ref={inputRef}>
        <div className="mb-3">
          <label className="form-label"> User Id</label>
          <input
            name="id"
            type="number"
            className="form-control"
            aria-describedby="idHelp"
            required
          />
          <div id="idHelp" className="form-text">
            {" "}
            User id should be unique
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">City</label>
          <input name="city" type="text" className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Start Date</label>
          <input
            name="start_date"
            type="text"
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">End Date</label>
          <input
            name="end_date"
            type="text"
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            name="price"
            type="number"
            step="any"
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Status</label>
          <input name="status" type="text" className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Color</label>
          <input name="color" type="text" className="form-control" required />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateNewUser;
