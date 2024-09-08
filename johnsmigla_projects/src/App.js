import Accordion from "./Accordion/Accordion";
import { useState } from "react";
import "./App.css";
import { questionList } from "./Accordion/questions";

function App() {
  // const [showResponse, setShowResponse] = useState(false)
  const [questionLists, setQuestionLists] = useState(questionList);
  // const [showResponse, setShowResponse] = useState(true)

  return (
    <div className="App">
      <Accordion questionLists={questionLists} />
    </div>
  );
}

export default App;
