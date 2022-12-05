import React from "react";
import { connect } from "react-redux";
import { selectTodos } from "../../../store/todos/selectors";

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

const mapStateToProps = state => ({
  todos: selectTodos(state),
})

export default connect(mapStateToProps, null)(List);