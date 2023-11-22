import Button from "./Button";
import { useLocation } from "react-router-dom";
const Header = (props) => {
    let location = useLocation()
  return (
    <header className="header">
      <h2>Application Tracker</h2>
      {location.pathname ==="/" && <Button
        color={props.showAddTask ? "red" : "green"}
        text={props.showAddTask ? "Close" : "Add"}
        onClick={props.onAdd}
      />}
    </header>
  );
};

export default Header;
















/*
Header.defaultProps = {
  title: "Task Tracker",
};*/

