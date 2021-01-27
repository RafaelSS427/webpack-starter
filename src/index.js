import './styles.css';

import { Todo, TodoList } from './classes'
import { crearTodoHTML } from './js/componentes'

export const todoList = new TodoList();
const tarea = new Todo('Primer tarea199');

todoList.nuevoTodo( tarea );

crearTodoHTML( tarea );

console.log(todoList)