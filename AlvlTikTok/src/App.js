import "./App.css";
import React, { useState, useEffect } from "react";
import db from './Firebase/firebase';
import { doc, onSnapshot, collection, query, getDocs } from "firebase/firestore";
import { Paper, IconButton } from "@mui/material";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import { pink } from '@mui/material/colors';
import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from '@mui/icons-material/Done';

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
        <DoneIcon color="success" fontSize="large" bac onClick={() => {
          props.setIndex(props.index + 1);
          props.setShowAnswer(false)
        }
        } />
      </IconButton>
      <button>
        <CloseIcon sx={{ color: pink[500] }} fontSize="large" onClick={() => {
          props.setIndex(props.index + 1);
          props.setShowAnswer(false)
        }
        } />
      </button>
    </div>
  );
}

function ShowAnsButton(props) {
  const onClick = () => props.setShowAnswer(true);

  return (
    <div>
      {props.showAnswer ? <ImageFrame imgSrc={props.answer} /> : null}
      <button onClick={onClick}>Show me the answer plzzzzzz </button>
    </div>
  );
}


function App() {
  const [questions, setQuestions] = useState([])
  const [answers, setAnswers] = useState([])
  const [categories, setCategories] = useState([])
  const [index, setIndex] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    const q = query(collection(db, "test"));
    getDocs(q)
      .then((docs) => {
        docs.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          const qnObj = doc.data();
          console.log(doc.id, " => ", qnObj.category);
          setQuestions(questions => [...questions, qnObj.question])
          setAnswers(answers => [...answers, qnObj.answer])
          setCategories(categories => [...categories, qnObj.category])
          console.log(questions);
        });
      })
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        {/* <ImageFrame imgSrc="https://www.examsolutions.net/wp-content/uploads/2019/06/edx-al-maths-p1-june-2018-q6.jpg" /> */}
        <p>{index + 1}) {categories[index]} </p>
        <ImageFrame imgSrc={questions[index]} />
        <ShowAnsButton showAnswer={showAnswer} setShowAnswer={setShowAnswer} answer={answers[index]} />

        <TickOrCrossButtons setShowAnswer={setShowAnswer} index={index} setIndex={setIndex} />

      </header>
    </div>

  );
}

export default App;
