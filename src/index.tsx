import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


type Todo = Readonly<{
    id: number
    text: string
    done: boolean
}>

// intersection type
// & is a type operator 
type CompletedTodo = Todo & {
   readonly done: true 
}

const myTodo: Todo = {
    id: 1,
    text: '...',
    done: true
}



function toggleTodo(todo: Todo) : Todo {
    return  {
        id: todo.id,
        text: todo.text,
        done: !todo.done
    }
}

function completeAll(todos: readonly Todo[]): CompletedTodo[] {
    return todos.map(todo => ({
        ...todo,
        done: true
    }))
}

console.log(myTodo.text)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
