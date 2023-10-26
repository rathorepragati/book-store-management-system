import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export const BookDetails = () => {
  const { id } = useParams();
const history= useNavigate();
  console.log(id);

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

  useEffect(() => {
    
    const fetchHandler = async () => {
      await axios
        .put(`http://localhost:1000/api/v1/updateBook/${id}`)
        .then((res) => res.data ).then((data) =>setData(data.book))
    };
    fetchHandler()
  }, [id]);

  const handleSubmit = (e) => {
     e.preventDefault();
    update().then(()=>history("/books"))
  }

  const update = async (e) => {
    // e.preventDefault();
    await axios
      .put(`http://localhost:1000/api/v1/updateBook/${id}`, Data)
      .then((res) => { 
        console.log(res);
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
     {Data && <div className="container p-3">
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
            // onChange={(e)=> setAuthor(e.target.value)}
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
            // onChange={(e)=> setAuthor(e.target.value)}
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
            // onChange={(e)=> setDescription(e.target.value)}
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
            // onChange={(e)=> setImage(e.target.value)}
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
            // onChange={(e)=> setPrice(e.target.value)}
            value={Data.price}
          />
        </div>
        <button className="btn btn-success" onClick={handleSubmit}>update</button>
      </div>
      }
    </div>
  );
};
