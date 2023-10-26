import React, { useState, useEffect } from "react";
import axios from "axios";

export const AllUsers = () => {
  const [usersData, setUsersData] = useState([]);
  console.log("usersdata", usersData);

  useEffect(() => {
    axios
      .get("http://localhost:1000/api/v2/getusers")
      .then((res) => {
        console.log(res);
        setUsersData(res.data.users);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <table>
        <tr>
          <th>Sr no.</th>
          <th>Name</th>
          <th>Mobile</th>
          <th>Address</th>
          <th>Book Name</th>
          <th>Author</th>
          <th>Price</th>
          <th>Date</th>
          {/* <th colSpan={2} align="center">Action</th> */}
        </tr>

        {usersData.map((data, i) => {
          return (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{data.name}</td>
              <td>{data.mobile}</td>
              <td>{data.address}</td>
              <td>{data.bookname}</td>
              <td>{data.author}</td>
              <td>{data.price}</td>
              <td>{data.date}</td>

              {/* <td><button>Update</button></td>
              <td><button>Delete</button></td> */}
            </tr>
          );
        })}
      </table>
    </div>
  );
};
