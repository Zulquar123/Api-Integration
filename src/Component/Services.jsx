import React, { useEffect, useState } from "react";
import axios from "./axios";

export default function Services() {
  const [first, setFirst] = useState("This is normal Data");
  const [second, setSecond] = useState("This is normal Data");
  const [users, setUsers] = useState([]);

  const getUser = () => {
    const api = "/users";
    axios
      .get(api)
      .then((users) => {
        setUsers(users.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getUser();
    console.log("Service component is created");
    return () => {
      console.log("Service component is deleted");
    };
  }, []);
  return (
    <div className="m-10 flex flex-col gap-3">
      <div className="flex gap-3">
        <h1>{first}</h1>
        <button
          className="border-2 border-black px-5 rounded"
          onClick={() => setFirst("First Data is Changed")}
        >
          Change First Data
        </button>
        <h1>{second}</h1>
        <button
          className="border-2 border-black px-5 rounded"
          onClick={() => setSecond("Second Data is Changed")}
        >
          Change Second Data
        </button>
        <hr className="mt-1 font-bold" />
        <br />
      </div>
      <div>
        <ul>
          {users.length > 0 ? (
            users.map((item, index) => (
              <li key={index}>Users Name : {item.name.firstname}</li>
            ))
          ) : (
            <h1>Loading ......</h1>
          )}
        </ul>
      </div>
    </div>
  );
}
