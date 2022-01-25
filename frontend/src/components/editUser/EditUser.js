import React, { useContext, useEffect, useRef } from "react";
import { MyContext } from "../context/Context";
import axios from "axios";
import { useParams } from "react-router";
import { useNavigate } from "react-router";

const EditUser = () => {
  const navigate = useNavigate();
  const {
    users,
    setUsers,
    city,
    setCity,
    start_date,
    setStartDate,
    end_date,
    setEndDate,
    price,
    setPrice,
    setColor,
    color,
    status,
    setStatus,
  } = useContext(MyContext);
  const { id } = useParams();
  const inputRef = useRef();

  useEffect(() => {
    axios
      .get(`http://localhost:4500/users/${id}`)
      .then((res) => {
        console.log(res.data);
        setCity(res.data.data.city);
        setStartDate(res.data.data.start_date);
        setEndDate(res.data.data.end_date);
        setPrice(res.data.data.price);
        setStatus(res.data.data.status);
        setColor(res.data.data.color);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    const user = {
      city: e.target.city.value === "" ? city : e.target.city.value,
      start_date:
        e.target.start_date.value === ""
          ? start_date
          : e.target.start_date.value,
      end_date:
        e.target.end_date.value === "" ? end_date : e.target.end_date.value,
      price: e.target.price.value === "" ? price : e.target.price.value,
      status: e.target.status.value === "" ? status : e.target.status.value,
      color: e.target.color.value === "" ? color : e.target.color.value,
    };
    axios.put(`http://localhost:4500/users/${id}`, user).then((res) => {
      console.log(res);
      setUsers([...users, res.data.data]);
    });
    navigate("/");
  };
  return (
    <div>
      <h1>Edit User</h1>
      <form onSubmit={onSubmit} ref={inputRef}>
        <div className="mb-3">
          <label className="form-label">City</label>
          <input name="city" type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Start Date</label>
          <input name="start_date" type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">End Date</label>
          <input name="end_date" type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            name="price"
            type="number"
            step="any"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Status</label>
          <input name="status" type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Color</label>
          <input name="color" type="text" className="form-control" />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditUser;
