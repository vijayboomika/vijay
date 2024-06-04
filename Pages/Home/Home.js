import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Home() {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async() => {
    const result = await axios.get("http://localhost/vijay/details.php");
    setUser(result.data.reverse());
  };

  const deleteUser = (userid) => {
    axios
    .get("http://localhost/vijay/delete.php?id=" + userid)
    .then((result) => {
      toast.success("User deleted successfully");
      loadUsers();
    })
    .catch(() => {
      toast.error("User coul'd deleted");
    });
  };

  return ( 
  <div className="container">
    <div className="py-4">
      <h3 className="mb-3 text-center">User Details</h3>
      <table className="table border shadow">
        <thead className="thead-primary">
          <tr>
            <th scope="col">User Id</th>
            <th scope="col">Name</th>
            <th scope="col">Mobile</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr>
            <th scope="row">{user.id}</th>
            <td>{user.name}</td>
            <td>{user.mobile}</td>
            <td>{user.email}</td>
            <td>{user.password}</td>
            <td>
              <Link className="ms-2" to={`/edit/${user.id}`}>
                <i className="fa fa-edit" aria-hidden="true"></i>
              </Link>
              <Link className="" onClick={() => deleteUser(user.id)}>
              <i className="fa fa-trash" aria-hidden="true"></i>
              </Link>
            </td>
            </tr>
          )
        )}
        </tbody>
      </table>
    </div>
    <ToastContainer position="top-center"/>
  </div>
  );
}

export default Home;