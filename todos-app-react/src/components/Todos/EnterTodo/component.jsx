import React from "react";
import { connect } from "react-redux";

import { addTodo } from "../../../store/todos/actions";
import { enterTodo } from "../../../store/todo/actions";

import './styles.scss';

const EnterTodo = ({ todo, addTodo, enterTodo }) => {

  const handleAddTodo = () => {
    const newTodo = {
      id: Math.round(Math.random() * 100),
      value: todo,
      checked: false,
    } 
    enterTodo('');
    addTodo(newTodo);
  }

  return (
    <div className="enter-wrap">
      <input
        type="text"
        placeholder="Write your todo here"
        value={todo}
        onChange={(e) => enterTodo(e.target.value)}
        className="enter"
      />
      <button
        disabled = {todo === "" ? true : false}
        className="add"
        onClick={handleAddTodo}
      >
        Add Todo
      </button>
    </div>
      )
}

const mapStateToProps = state => ({
  todo: state.todo,
});

const mapDispatchToProps = {
  addTodo,
  enterTodo
}


export default connect(mapStateToProps, mapDispatchToProps)(EnterTodo);