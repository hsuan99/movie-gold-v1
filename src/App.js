// import logo from './logo.svg';
import './App.css';
import api from './api/axiosConfig';
import {useState, useEffect} from 'react';
import Layout from './components/Layout';
import {Routes, Route} from 'react-router-dom';

function App() {

  const[movies, setMovies]= useState();

  const getMovies = async() => {

    try {

      const response = await api.get("/api/v1/movies");
      console.log(response.data);
      setMovies(response.data);

    } catch(err) {
      console.log(err)   
    }
    
  }

  useEffect(() => {
    getMovies();
  },[])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={Layout}>
            
        </Route>
      </Routes>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
