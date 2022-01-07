import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

// import firebase from "firebase/app";
import "firebase/firestore";

import { initializeApp } from "firebase/app";

// TODO: Replace the following with your app's Firebase project configuration

  const firebaseConfig = {
    apiKey: "AIzaSyDrVLph7V_PCIzIMoAUwJeH8wZ3LXamdoQ",
    authDomain: "hack-and-roll-d76d6.firebaseapp.com",
    projectId: "hack-and-roll-d76d6",
    storageBucket: "hack-and-roll-d76d6.appspot.com",
    messagingSenderId: "438380290770",
    appId: "1:438380290770:web:d60fe6a1d091e3969cc30b",
    measurementId: "G-BKSWQ58FRJ"
  };

  function UploadImages() {
    const [images, setImages] = useState([]);
    const [imageURLs, setImageURLs] = useState([]);
  
    useEffect(() => {
      if (images.length < 1) return;
      const newImageURLs = [];
      images.forEach(image => newImageURLs.push(URL.creatObjectIRL(image)));
      setImageURLs(newImageURLs);
    }, [images]);
  
    function onImageChange(e) {
      setImages([...e.target.files]);
    }
    return (
      <>
      <input type="file" multiple accept="image/*" onChange={onImageChange} />
      { imageURLs.map(imageSrc => <img src={imageSrc} />)}
      </>
    )
  };

const app = initializeApp(firebaseConfig);

function MyComponent() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      count: {count}
    </>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <MyComponent />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
