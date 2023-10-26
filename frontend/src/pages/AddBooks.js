import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const AddBooks = () => {
  
  const [Data, setData] = useState({
    bookname: "",
    author: "",
    description: "",
    price: "",
    image: "",
  });
  
  const change = (e) => {
    const { name, value } = e.target;
    setData({ ...Data, [name]: value });
  };
  const submit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:1000/api/v1/add", Data)
      .then((res) => {console.log(res);
      alert(res.data.message)});
      // alert("Book added successfully");
      setData({ bookname: "",
      author: "",
      description: "",
      price: "",
      image: "",})
  };
  console.log(Data);

 
  
  return (
    <div
      className="bg-dark d-flex justify-content-center align-item-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="container p-3">
        <div className="mb-3 ">
          <label
            for="exampleFormControlInput1"
            className="form-label text-white"
          >
            Book Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Book Name"
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
            placeholder="Enter The Name of Author"
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
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Description of The Book"
            name="description"
            onChange={change}
            value={Data.description}
          />
        </div>
        <div className="mb-3 ">
          <label
            for="exampleFormControlInput1"
            className="form-label text-white"
          >
            Image
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter The URL of The Book"
            name="image"
            onChange={change}
            value={Data.image}
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
        <button className="btn btn-success" onClick={submit}>Submit</button>
      </div>
    </div>
  );
};
