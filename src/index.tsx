import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


type Todo = Readonly<{
    id: number
    text: string
    done: boolean
    place?: Place
}>

// intersection type
// & is a type operator 
type CompletedTodo = Todo & {
   readonly done: true 
}

// union type
type Place = 'home' | 'work' | { custom: string}

const myTodo: Todo = {
    id: 1,
    text: '...',
    done: true
}

function placeToString(place: Place): string {
    if (place === 'home') {
        return "home"
    } else if (place === 'work'){
        return ":smile work"
    } else {
        return place.custom
    }
}

function toggleTodo(todo: Todo) : Todo {
    return  {
        id: todo.id,
        text: todo.text,
        done: !todo.done,
        place: todo.place
    }
}

function completeAll(todos: readonly Todo[]): CompletedTodo[] {
    return todos.map(todo => ({
        ...todo,
        done: true
    }))
}

const listOfTodo: Todo[] = [
    {id: 1, text: '...', done: false, place: 'work'},
    {id: 2, text: 'soem stuff', done: true, place: 'home'}]

console.log(completeAll(listOfTodo))


ReactDOM.render(
  <React.StrictMode>
    <App title = "fred" />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
