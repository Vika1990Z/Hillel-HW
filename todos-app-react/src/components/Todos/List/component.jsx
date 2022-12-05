import React from "react";

import Item from "./Item";

import './styles.scss';

const List = ({ todos }) => (
  <ul className="list">
    {todos.map(({ id, value, checked}) => (
      
      <Item
        key={id}
        id={id}
        checked={checked}
        value={value}
      />
    ))}
  </ul>
)

export default List;