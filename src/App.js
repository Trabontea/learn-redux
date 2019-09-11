import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from './actions';

//nu functioneaza cu componenta
function App() {
    //take the state
    const counter = useSelector(state => state.counter);
    const isLogged =  useSelector(state =>state.isLogged);
    const dispatch = useDispatch();

    return (
      <div className="App">
          <h1>Counter {counter} </h1>
          {isLogged ? <h3>Valuable Information I shouldn't see</h3> : ''}

          <div>
            <button onClick={()=> dispatch(increment())}>Increment +</button>
            <button onClick={()=> dispatch(decrement())}>Decrement -</button>
          </div>

      </div>;
    );
  }

export default App;



