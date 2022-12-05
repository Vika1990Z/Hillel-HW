import React from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../../store/todos/actions';
import { enterTodo } from '../../store/todo/actions';
import { selectTodos } from '../../store/todos/selectors';

import EmptyList from "./EmptyList";
import EnterTodo from "./EnterTodo";
import List from "./List";

import './styles.scss';

const Todos = ({todos}) => {
  
  const isTodosEmpty = todos.length === 0;

  return (
    <div className="todos">
    <h1 className="title">Todos</h1>
    <EnterTodo />
    {isTodosEmpty
      ? <EmptyList />
      : <List />
    }
  </div>
  )
  
}

const mapStateToProps = (state) => ({
  todos: selectTodos(state),
})

export default connect(mapStateToProps, null)(Todos);