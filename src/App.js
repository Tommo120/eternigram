import React, {useState, useEffect} from 'react';
import './App.css';
import {NavigationBottom} from './components/NavigationBottom';
import {NavigationTop} from './components/NavigationTop';
import {UserPost} from './components/UserPost';

function App() {

  const [pics, setPics] = useState([]);

  const picAPI = async () => {
    try {
      const response = await fetch("https://picsum.photos/v2/list?limit=9");
      console.log(response);
      if (response.status !== 200) {
        throw new Error("SOMETHING GONE DONE BROKE, DAYUM!");
      }
      const picData = await response.json([]);
      console.log("API info all", picData);
      //console.log("API info array 0", picData[0]);
      setPics(picData);
      console.log(pics);
      return(picData);
    } catch (error) {
        console.log(error);
    }
  };

  useEffect(() => {
    picAPI()
  }, []);

  return (
    <div className="App">
      <NavigationTop/>
      <div className="contentArea">
        {pics.map((item, index) => {
          return <UserPost key={index} postContent={item}/>
        })}
      </div>
      <NavigationBottom/>
    </div>
  );
}

export default App;
