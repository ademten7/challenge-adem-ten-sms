import React, { useContext } from "react";
import { MyContext } from "../context/Context";
import { Link } from "react-router-dom";

const User = ({ user, deleteUser }) => {
  // const { users } = useContext(MyContext);
  return (
    <>
      <tr>
        <td>{user.id}</td>
        <td>{user.city}</td>
        <td>{user.start_date}</td>
        <td>{user.end_date}</td>
        <td>{user.price}</td>
        <td>{user.status}</td>
        <td>{user.color}</td>
        <td>
          <Link to={"/" + user.id}>Edit</Link> |{" "}
          <a
            href="/"
            onClick={() => {
              deleteUser(user.id);
            }}
          >
            Delete
          </a>
        </td>
      </tr>
    </>
  );
};

export default User;
