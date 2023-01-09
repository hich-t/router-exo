import React from "react";
import { useParams } from "react-router-dom";

const Student = ({ students }) => {
  let { studentID } = useParams();

  return (
    <div>
      <h1>{studentID}</h1>
      <h1>Hello dear </h1>
    </div>
  );
};

export default Student;
