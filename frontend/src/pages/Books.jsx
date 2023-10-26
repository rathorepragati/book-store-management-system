import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { BookSection } from "../components/BookSection";

export const Books = () => {
  const [Data, setData] = useState();
  useEffect(() => {
    const fetch = async () => {
      await axios
        .get("http://localhost:1000/api/v1/getBooks")
        .then((res) => setData(res.data.books));
    };
    fetch();
  });

  return (
    <div className="bg-dark" style={{ minHeight: "91.5vh" }}>
       <h4 className="text-white d-flex justify-content-center align-items-center">Books Section</h4>
      <div className="d-flex justify-content-center align-items-center py-3">
       
        {Data ? (
         <BookSection data={Data}/>
        ) : (
          <div className="text-white">...loading</div>
        )}
      </div>
    </div>
  );
};
