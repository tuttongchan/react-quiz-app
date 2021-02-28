import React, { useState } from 'react';

export default function App() {
  const questions = [
    {
      questionText: "What is Digital's favorite brand?",
      answerOptions: [
        { answerText: 'Dries Van Noten', isCorrect: false },
        { answerText: 'Maison Margiela', isCorrect: false },
        { answerText: 'Cactus Jack', isCorrect: true },
        { answerText: 'Jean Paul Gaultier', isCorrect: false },
      ],
    },
    {
      questionText: 'Do we love these hoes?',
      answerOptions: [
        { answerText: 'No', isCorrect: false },
        { answerText: 'Yes', isCorrect: false },
        { answerText: 'Maybe', isCorrect: false },
        { answerText: 'Never', isCorrect: true },
      ],
    },
    {
      questionText: 'Do you really feel fly in True Religon?',
      answerOptions: [
        { answerText: 'No', isCorrect: false },
        { answerText: 'Yes', isCorrect: true },
        { answerText: 'Maybe', isCorrect: false },
        { answerText: 'Never', isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [showScore, setShowScore] = useState(false)

  const [score, setScore] = useState(0)

  const handleAnswerButtonClick = (isCorrect) => {
    if(isCorrect === true) {
      // alert('this answer is correct!')
      setScore(score + 1)
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true)
    }
  };

  return (
    <div className="app">
      {/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
