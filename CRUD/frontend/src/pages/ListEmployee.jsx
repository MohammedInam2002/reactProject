import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function ListEmployee() {
  const [userForm, setUserForm] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/employees/")
      .then((res) => {
        setUserForm(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userForm]);
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Emp no</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {userForm.map((user, index) => {
            return (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.empno}</td>
                <td>
                  <Link
                    className="btn btn-primary btn-sm me-2"
                    to={"/edit-employee/" + user._id}
                  >
                    Edit
                  </Link>
                  <button className="btn btn-danger btn-sm">Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default ListEmployee;
