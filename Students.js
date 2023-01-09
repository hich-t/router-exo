import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Students = (props) => {
  //const [data, setData]  = useState([])

  // useEffect( () => {
  // fetchData()
  // }, [])

  // const fetchData = async () => {
  //  await axios
  // .get("https://randomuser.me/api/?results=30")
  //  .then((response) => setData(response.data.results))
  // .catch((err) => (console.log(err)))
  // }

  return (
    <div className="students">
      <h1>Hello Students !</h1>

      {props.students.map((e, i) => {
        return (
          <div key={e.id.value}>
            <Link className="studentname" to={`/student/${e.id.value}`}>
              <h2>
                {e.name.first} {e.name.last}
              </h2>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Students;
