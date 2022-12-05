import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../../store/todos/actions';

import TodosComponent from "./component";

import './styles.scss';

const Todos = ({todos, addTodo}) => {

  const [enterTodo, setEnterTodo] = useState('');


  const handleEnterTodo = e => {
    setEnterTodo(e.target.value);
  }

  const handleAddTodo = () => {
    const newTodo = {
      id: Math.round(Math.random() * 100),
      value: enterTodo,
      checked: false,
    } 
    setEnterTodo('');
    addTodo(newTodo);
  }


  const isTodosEmpty = todos.length === 0;

  return (
    <TodosComponent
      enterTodo={enterTodo}
      todos={todos}
      isTodosEmpty={isTodosEmpty}
      onEnterTodo={handleEnterTodo}
      onAddTodo={handleAddTodo}
    />
  )
  
}

const mapStateToProps = (state) => ({
  todos: state.todos
})

const mapDispatchToProps = {
  addTodo,
}
export default connect(mapStateToProps, mapDispatchToProps)(Todos);