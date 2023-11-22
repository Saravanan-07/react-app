import { useState } from "react";

const AddTask = (props) => {
  const [role, setRole] = useState("");
  const [salary, setSalary] = useState("");
  const [type, setType] = useState("");
  const [username, setUsername] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (role === "" || salary === "") {
      alert("Please enter a applicant detail");
    } else {
      props.addTask({role, salary, type, username, reminder});
      setRole("");
      setSalary("");
      setType("");
      setUsername("");
      setReminder(false);
    }
  };
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Job Role</label>
        <input
          type="text"
          placeholder="Add job role..."
          value={role}
          onChange={(e) => setRole(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Expected Salary</label>
        <input
          type="text"
          placeholder="Add expected salary..."
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Type</label>
        <input
          type="text"
          placeholder="Add job type..."
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Username</label>
        <input
          type="text"
          placeholder="Add candidate username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Referral Applicant</label>
        <input
          type="checkbox"
          name=""
          id=""
          value={reminder}
          checked={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input className="btn btn-block" type="submit" value="Save Detail" />
    </form>
  );
};

export default AddTask;
