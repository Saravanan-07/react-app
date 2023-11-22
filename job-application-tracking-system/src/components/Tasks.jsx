import Task from "./Task";

const Tasks = (props) => {
  return (
    <div>
      {props.tasks.map((task) => {
        return (
          <Task
            key={task.id}
            id={task.id}
            role={task.role}
            salary={task.salary}
            type={task.type}
            username={task.username}
            reminder={task.reminder}
            onDelete={props.onDelete}
            onToggle={props.onToggle}
          />
        );
      })}
      
    </div>
  );
};

export default Tasks;
