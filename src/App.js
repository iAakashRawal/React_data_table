import logo from './logo.svg';
import './App.css';
import Countires from './components/countires';
import { useEffect, useState } from 'react';

function App() {
  
  return (
    <div className="App">
      <Countires /> 
      {/* <table class="table">
            <thead>
              <tr>
                <th scope="col">Sn</th>
                <th scope="col">Name</th>
                <th scope="col">Capital</th>
                <th scope="col">Population</th>
                <th scope="col">Region</th>
              </tr>
            </thead>
            <tbody>
            {users.map((elem)=>(           
                <tr>
                  <th scope="row">{elem.numericCode}</th>
                  <td>{elem.name}</td>
                  <td>{elem.capital}</td>
                  <td>{elem.population}</td>
                  <td>{elem.region}</td>
                </tr>
              ))}
        </tbody>
      </table> */}
    </div>
  );
}

export default App;
