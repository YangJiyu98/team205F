import "./App.css";
import React, { useState, useEffect } from "react";

import { Paper, IconButton } from "@mui/material";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import CloseIcon from "@mui/icons-material/Close";

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
  measurementId: "G-BKSWQ58FRJ",
};

function UploadImages() {
  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);

  useEffect(() => {
    if (images.length < 1) return;
    const newImageURLs = [];
    images.forEach((image) => newImageURLs.push(URL.creatObjectIRL(image)));
    setImageURLs(newImageURLs);
  }, [images]);

  function onImageChange(e) {
    setImages([...e.target.files]);
  }
  return (
    <>
      <input type="file" multiple accept="image/*" onChange={onImageChange} />
      {imageURLs.map((imageSrc) => (
        <img src={imageSrc} />
      ))}
    </>
  );
}

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

function ImageFrame(props) {
  const { imgSrc } = props;

  return (
    // TODO: add size constraints
    <Paper variant="outlined">
      <img src={imgSrc} alt="this is a picture of course :)" />
    </Paper>
  );
}

function TickOrCrossButtons(props) {
  return (
    // TODO: styling
    // TODO: link up callback function passed in via props

    <div>
      <IconButton>
        <CheckBoxOutlinedIcon />
      </IconButton>
      <button>
        <CloseIcon />
      </button>
    </div>
  );
}

function ShowAnsButton(props) {
  return (
    <div>
      <button>Show me the answer plzzzzzz</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ImageFrame imgSrc="https://www.examsolutions.net/wp-content/uploads/2019/06/edx-al-maths-p1-june-2018-q6.jpg" />
        <TickOrCrossButtons />
        <ShowAnsButton />
      </header>
    </div>
  );
}

export default App;
