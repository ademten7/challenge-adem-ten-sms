import React, { useContext, useEffect } from "react";
import { MyContext } from "../context/Context";
import axios from "axios";
import { Link } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { GrEdit } from "react-icons/gr";
import { BiSortAlt2 } from "react-icons/bi";
import arraySort from "array-sort";
import "./userList.css";

const UserList = () => {
  const { users, setUsers } = useContext(MyContext);

  useEffect(() => {
    axios
      .get("http://localhost:4500/users")
      .then((res) => {
        console.log(res.data);
        setUsers(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(users);
  const deleteUser = (id) => {
    axios
      .delete(`http://localhost:4500/users/${id}`)
      .then((res) => setUsers(res.data.data))
      .catch((err) => console.log(err.message));
  };

  const sortId = () => {
    users.sort((a, b) => a.id - b.id);
    setUsers([...users]);
  };

  const sortCity = () => {
    users.sort((a, b) => a.city.localeCompare(b.city));
    setUsers([...users]);
  };

  const sortStartDate = () => {
    users.sort((a, b) => new Date(a.start_date) - new Date(b.start_date));
    setUsers([...users]);
  };

  const sortEndDate = () => {
    users.sort((a, b) => new Date(b.start_date) - new Date(a.start_date));
    setUsers([...users]);
  };

  const sortPrice = () => {
    users.sort((a, b) => a.price - b.price);
    setUsers([...users]);
  };

  const sortStatus = () => {
    users.sort((a, b) => a.status.localeCompare(b.status));
    setUsers([...users]);
  };

  return (
    <div>
      <h1>User List</h1>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th className="table-id">
              Id{" "}
              <span onClick={sortId} className="sort">
                <BiSortAlt2 />
              </span>
            </th>
            <th>
              City{" "}
              <span onClick={sortCity} className="sort">
                <BiSortAlt2 />
              </span>
            </th>
            <th>
              Start Date{" "}
              <span onClick={sortStartDate} className="sort">
                <BiSortAlt2 />
              </span>
            </th>
            <th>
              End Date{" "}
              <span onClick={sortEndDate} className="sort">
                <BiSortAlt2 />
              </span>
            </th>
            <th>
              Price{" "}
              <span onClick={sortPrice} className="sort">
                <BiSortAlt2 />
              </span>
            </th>
            <th>
              Status{" "}
              <span onClick={sortStatus} className="sort">
                <BiSortAlt2 />
              </span>
            </th>
            <th>Color</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.city}</td>
                  <td>{user.start_date}</td>
                  <td>{user.end_date}</td>
                  <td>{user.price}</td>
                  <td>{user.status}</td>
                  <td>{user.color}</td>
                  <td className="edit">
                    <Link to={"/edit/" + user.id}>
                      <GrEdit />
                    </Link>{" "}
                    |{" "}
                    <a
                      className="delete"
                      style={{ color: "red", fontSize: "20px" }}
                      href="/"
                      onClick={() => {
                        deleteUser(user.id);
                      }}
                    >
                      <MdDeleteForever />
                    </a>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
