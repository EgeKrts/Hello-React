import React from "react";

const TodoItem = (props) => {
  return (
    <li id="deneme" className="list-group-item">
      {props.item}

      <button
        className="btn btn-danger btn-sm float-end"
        onClick={() => {
          props.deleteItem(props.item);
        }}
      >
        x
      </button>
    </li>
  );
};

export default TodoItem;
