import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

export const BookSection = ({ data }) => {
  const { id } = useParams();
  console.log("id: " + id);
  const history = useNavigate();

  console.log(data);
  const Delete = async (id) => {
    console.log("delete id", id);
    const isDelete = window.confirm("Are you sure you want to delete?");
    if (isDelete) {
      await axios
        .delete(`http://Localhost:1000/api/v1/deleteBook/${id}`)
        .then((res) => {
          console.log("Backend response", res);
          // if (res.data.status === "201") {
          //   setTimeout(() => {

          //     alert("book deleted successfully");
          //   }, 2000)
          // }
          // else {
          //   alert("book not deleted!");
          // }
        })
        .catch((error) => {
          console.log("Backend error:" + error);
        });
    }
  };

  const handleDelete = (id) => {
    // e.preventDefault();
    Delete(id).then(() => history("/books"));
  };

  return (
    <div className="d-flex justify-content-around align-items-center flex-wrap ">
      {data &&
        data.map((item, index) => (
          <div
            className="m-3"
            style={{
              width: "200px",
              height: "350px",
              border: "1px solid white",
              borderRadius: "20px",
            }}
          >
            <div>
              <img
                style={{
                  width: "200px",
                  height: "210px",
                  borderTopLeftRadius: "20px",
                  borderTopRightRadius: "20px",
                }}
                className="img-fluid"
                src={item.image}
                alt="/"
              />
            </div>
            <h6 style={{ fontSize: "15px" }} className=" px-2 my-1 text-white">
              {item.bookname.slice(0, 20)}...
            </h6>
            <b
              style={{ fontSize: "30px", color: "red" }}
              className="mb-2 px-2 "
            >
              Rs.{item.price}
              {console.log("item.id", item._id, item.bookname, item.price)}
            </b>
            <div className="d-flex justify-content-around align-items-center my-2">
              <Link to={`/bookDetails/${item._id}`}>
                <button className="btn btn-primary">UPDATE</button>
              </Link>
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(item._id)}
              >
                DELETE
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};
