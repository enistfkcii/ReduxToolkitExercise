import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './redux/features/counter/counterSlice';
import { getCountry } from './redux/features/country/countrySlice';
// reduxun amacı state yönetimi yani birden çok propsla ugrasmaktansa tek bir yerden yönetebilme konforu yaratmak
function App() {
const dispatch = useDispatch()
const {counter} = useSelector(state => state.counter)
const {country,loading} = useSelector(state => state.country)

useEffect(() => {
  dispatch(getCountry())
},[])


  return (
    <div className="App">
      <div>
      <span onClick={() => dispatch(decrement())}>AZALT</span>
      <span>{counter}</span>
      <span onClick={() => dispatch(increment())}>ARTIR</span>
      </div>
      <div>
        {country.map((_country,i) => (
          <div style={{textAlign:'left'}} key={i}>
            <span>
              {_country?.capital}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
