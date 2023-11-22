import React from "react";
import { FaTimes } from "react-icons/fa";

const Task = (props) => {
  return (
    <div className={`task ${props.reminder && 'reminder'}`}onDoubleClick={()=>props.onToggle(props.id)}>
      <h3>
        Job Role : {props.role}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => props.onDelete(props.id)}
        />
      </h3>
      <h4>Expected Salary : {props.salary}</h4>
      <p>Job Type : {props.type}</p>
      <p style={{fontSize:'14px'}}>Candidate Username : {props.username}</p>
    </div>
  );
};

export default Task;
