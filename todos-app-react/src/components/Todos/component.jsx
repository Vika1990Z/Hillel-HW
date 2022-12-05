import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../../store/todos/actions';
import { selectTodos } from '../../store/todos/selectors';

import EmptyList from "./EmptyList";
import EnterTodo from "./EnterTodo";
import List from "./List";

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
    <div className="todos">
    <h1 className="title">Todos</h1>
    <EnterTodo
      value={enterTodo}
      onChange={handleEnterTodo}
      onClick={handleAddTodo}
    />
    {isTodosEmpty
      ? <EmptyList/>
      : <List/>
    }
  </div>
  )
  
}

const mapStateToProps = (state) => ({
  todos: selectTodos(state),
})

const mapDispatchToProps = {
  addTodo,
}
export default connect(mapStateToProps, mapDispatchToProps)(Todos);