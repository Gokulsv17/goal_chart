import React from 'react';

import './CourseGoalItem.css';

const CourseGoalItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li className="goal-item" >
      {props.children}
      <button onClick={deleteHandler}>x</button>
    </li>
  );
};

export default CourseGoalItem;
