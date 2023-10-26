import React, { useState } from "react";
import axios from "axios";

export const Register = () => {
  const [Data, setData] = useState({
    name: "",
    mobile: "",
    address: "",
    bookname: "",
    author: "",
    description: "",
    price: "",
    date: "",
  });

  const change = (e) => {
    const { name, value } = e.target;
    setData({ ...Data, [name]: value });
  };
  const submit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:1000/api/v2/register", Data)
      .then((res) => {
        console.log("res");
        alert(res.data.message);
        setData({
          name: "",
          mobile: "",
          address: "",
          bookname: "",
          author: "",
          description: "",
          price: "",
          date: "",
        });
      });
  };

  return (
    <div>
      <h4 className="bg-dark d-flex mb-0 justify-content-center align-item-center text-white">
        Register Customer
      </h4>
      <div
        className="bg-dark  d-flex justify-content-center align-item-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="container p-3">
          <div className="mb-3 ">
            <label
              for="exampleFormControlInput1"
              className="form-label text-white"
            >
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter Customer Name"
              name="name"
              onChange={change}
              value={Data.name}
            />
          </div>
          <div className="mb-3 ">
            <label
              for="exampleFormControlInput1"
              className="form-label text-white"
            >
              Mobile
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter the mobile number"
              name="mobile"
              onChange={change}
              value={Data.mobile}
            />
          </div>
          <div className="mb-3 ">
            <label
              for="exampleFormControlInput1"
              className="form-label text-white"
            >
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter the address of customer"
              name="address"
              onChange={change}
              value={Data.address}
            />
          </div>
          <div className="mb-3 ">
            <label
              for="exampleFormControlInput1"
              className="form-label text-white"
            >
              Bookname
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter the book name"
              name="bookname"
              onChange={change}
              value={Data.bookname}
            />
          </div>
          <div className="mb-3 ">
            <label
              for="exampleFormControlInput1"
              className="form-label text-white"
            >
              Author
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter the Author name"
              name="author"
              onChange={change}
              value={Data.author}
            />
          </div>
          <div className="mb-3 ">
            <label
              for="exampleFormControlInput1"
              className="form-label text-white"
            >
              Price
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter The Price of The Book"
              name="price"
              onChange={change}
              value={Data.price}
            />
          </div>
          <div className="mb-3 ">
            <label
              for="exampleFormControlInput1"
              className="form-label text-white"
            >
              Purchase-Date
            </label>
            <input
              type="date"
              className="form-control"
              id="exampleFormControlInput1"
              // placeholder="Enter the book purchase date"
              name="date"
              onChange={change}
              value={Data.date}
            />
          </div>
          <button className="btn btn-success" onClick={submit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
