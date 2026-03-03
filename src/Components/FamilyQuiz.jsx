import { useState } from "react";
import quizData from "../data/quizData";
import "../styles/FamilyQuiz.css";

function FamilyQuiz({ player }) {
  const tamilQuotes = [
    "“என்னை விட என்னை நன்றாக அறிந்தவர்கள் – என் பெற்றோர் ❤️”",
    "“என் வெற்றியின் பின்னால் நிற்கும் இரண்டு தேவதைகள் ✨”",
    "“நான் எவ்வளவு உயர்ந்தாலும், என் அடிப்படை நீங்கள் தான்.”",
    "“உங்கள் ஆசீர்வாதம் இருந்தால் எந்த கனவும் தூரமில்லை.”",
    "“உங்களை பெருமைப்படுத்துவது தான் என் வாழ்க்கை இலக்கு ❤️”"
  ];

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (index) => {
    setSelected(index);
    setShowAnswer(true);

    if (index === quizData[current].correctAnswer) {
      setScore((prev) => prev + 1);
    }
  };

  const nextQuestion = () => {
    setSelected(null);
    setShowAnswer(false);

    if (current + 1 < quizData.length) {
      setCurrent((prev) => prev + 1);
    } else {
      setFinished(true);
    }
  };

  if (finished) {
    const randomQuote =
      tamilQuotes[Math.floor(Math.random() * tamilQuotes.length)];

    return (
      <div className="container">
        <div className="card result-card">
          <h2>🎉 {player} Final Score: {score}</h2>
          <p className="quote-box">{randomQuote}</p>

          <button
            className="next-btn"
            onClick={() => window.location.reload()}
          >
            🔄 Restart
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="card">
        <h2>{player} Turn 👑</h2>
        <h3>{quizData[current].question}</h3>

        {quizData[current].options.map((option, index) => {
          let className = "option-btn";

          if (showAnswer) {
            if (index === quizData[current].correctAnswer) {
              className = "option-btn correct";
            } else if (index === selected) {
              className = "option-btn wrong";
            }
          }

          return (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              className={className}
              disabled={showAnswer}
            >
              {option}
            </button>
          );
        })}

        {showAnswer && (
          <>
            <p className="answer-text">
              ✅ சரியான பதில்:{" "}
              {quizData[current].options[
                quizData[current].correctAnswer
              ]}
            </p>

            <button className="next-btn" onClick={nextQuestion}>
              Next ➡
            </button>
          </>
        )}

        <p className="progress">
          Question {current + 1} / {quizData.length}
        </p>
      </div>
    </div>
  );
}

export default FamilyQuiz;