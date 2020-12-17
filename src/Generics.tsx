import React from 'react';


// this is a generic function
// the = number means make number the default type allowed
// so the caller does not need to specify the type when callign function 
function makeState<S extends number | string = number>() {
    let state: S

    function getState(){
        return state
    }

    function setState(x: S){
        state = x
    }

    return { getState, setState}
}

// note the extends string | F
function makePair<F extends number, S extends string | F>() {
    let pair: { first: F; second: S }

    function getPair() {
        return pair
    }

    function setPair(x: F, y: S) {
        pair = {
            first: x,
            second: y
        }
    }

    return { getPair, setPair }
}

function Generics(){

    // equivalent to makeState<number>()
    const myState = makeState()
    myState.setState(4)

    const myStringState = makeState<string>()
    myStringState.setState("Harry")

    const myPair = makePair<number, string>()
    myPair.setPair(1, "hello")

    // or with destructuring
    const { getPair, setPair } = makePair<number, string>()
    const otherPair = setPair(2, "hello")


    return (
        <div>
            <h1>Generics</h1>
            <p>The number is {myState.getState()}</p>
            <p>The string is {myStringState.getState()}</p>
            <p>The pair is {myPair.getPair().first}: {myPair.getPair().second}</p>
        </div>
    );
}

export default Generics;
