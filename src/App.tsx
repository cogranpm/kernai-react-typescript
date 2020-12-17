import React from 'react';
import logo from './logo.svg';
import './App.css';
import Generics from './Generics';


// all this stuff from the tutorial at https://ts.chibicode.com/todo/
// it's a typescript tutorial
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



type AppProps = {
    title: string
}

function App(props: AppProps) {
  return (
    <div>
      <header>
          Header
      </header>
      <p>some stuff here</p>
      <Generics/>
    </div>
  );
}

export default App;
