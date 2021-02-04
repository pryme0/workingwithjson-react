import logo from './logo.svg';
import './App.css';
import { useState,useEffect, useContext } from 'react';
import {BrowserRouter as Router,Switch,Route } from  'react-router-dom';
import Axios from 'axios';
import axios from 'axios';
import Search from './components/search.jsx';
import Display from './components/Display.jsx';
import Spinner from './components/loader';


function App() {
  const [userData ,setUserData ] = useState([]);

  const  fetchUserData = async ()=>{
      const {data } = await Axios.get('https://api.enye.tech/v1/challenge/records');
      setUserData(data.records.profiles);
  }

  useEffect(()=>{
    fetchUserData();
  },[])


console.log(userData);


  return (
    <div className="App">
      <header className="App-header">
      </header>
      
      <Router>
        <Route exact path="/" render={() => <Display data={userData} />}/>
      <Route exact path="/search"  render={() => <Search data={userData}/>}/>
      <Route exact path="/Spinner"  render={() => <Spinner/>}/>

      </Router>
     
    </div>
  );
}

export default App;
