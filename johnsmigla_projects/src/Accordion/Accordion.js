import { useState } from "react";
import "./Accordion.css";

import { AiFillMinusCircle } from "react-icons/ai";
import { IoAddCircle } from "react-icons/io5";
// import { questionList } from './questions'

const Accordion = ({ questionLists }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleDisplay = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };
  return (
    <div className="accordion-container">
      <div className="accordion">
        <header>Questions</header>

        {questionLists.map((questions, index) => {
          const { id, question, response } = questions;
          return (
            <div key={id} className="accordion-questions">
              <div className="accordion-qst">
                <h5>{question}</h5>
                <span>
                  {activeIndex === index ? (
                    <AiFillMinusCircle
                      className="icon"
                      onClick={() => handleDisplay(index)}
                    />
                  ) : (
                    <IoAddCircle
                      className="icon"
                      onClick={() => handleDisplay(index)}
                    />
                  )}
                </span>
              </div>
              {activeIndex === index && <p>{response}</p>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Accordion;
