

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import './App.css';

// class QuizApp extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       Array_OF_questions: [
//                  {
//                       "question": "What temperature does water boil at?",
//                       "optionA": "50 degrees Celcius",
//                       "optionB": "25 degrees Celcius",
//                       "optionC": "100 degrees Celcius",
//                       "optionD": "150 degrees Celcius",
//                       "answer": "100 degrees Celcius"
//                     },
          
//                     {
//                       "question": "Who wrote Julius Caesar, Macbeth and Hamlet?",
//                       "optionA": "Wole Soyinka",
//                       "optionB": "William Shakespeare",
//                       "optionC": "Ngozi Chimamanda Adichie",
//                       "optionD": "Dan Brown",
//                       "answer": "William Shakespeare"
//                     },
          
//                     {
//                       "question": "What did the crocodile swallow in Peter Pan?",
//                       "optionA": "A Book",
//                       "optionB": "A Computer",
//                       "optionC": "A pair of shoes",
//                       "optionD": "Alarm Clock",
//                       "answer": "Alarm Clock"
//                     },
          
//                     {
//                       "question": "Which is the only mammal that can’t jump?",
//                       "optionA": "Dog",
//                       "optionB": "Elephant",
//                       "optionC": "Goat",
//                       "optionD": "Lion",
//                       "answer": "Elephant"
//                     },
          
//                     {
//                       "question": "Who lived at 221B, Baker Street, London?",
//                       "optionA": "Tony Stark",
//                       "optionB": "Morgan Freeman",
//                       "optionC": "Sherlock Holmes",
//                       "optionD": "Samuel L. Jackson",
//                       "answer": "Sherlock Holmes"
//                     },
          
//                     {
//                       "question": "What colour is a panda?",
//                       "optionA": "Green and Yellow",
//                       "optionB": "Blue and Red",
//                       "optionC": "Green and White",
//                       "optionD": "Black and White",
//                       "answer": "Black and White"
//                     },
          
//                     {
//                       "question": "Where is the smallest bone in the human body?",
//                       "optionA": "The Chest",
//                       "optionB": "The Ear",
//                       "optionC": "The Legs",
//                       "optionD": "The Hands",
//                       "answer": "The Ear"
//                     },
          
//                     {
//                       "question": "What does the roman numeral C represent?",
//                       "optionA": "100",
//                       "optionB": "10",
//                       "optionC": "10,000",
//                       "optionD": "1,000,000",
//                       "answer": "100"
//                     },
          
//                     {
//                       "question": "What takes place in Hong Kong's Happy Valley?",
//                       "optionA": "Chicken Wrestling",
//                       "optionB": "Horse racing",
//                       "optionC": "Street Racing",
//                       "optionD": "Arm Wrestling",
//                       "answer": "Horse racing"
//                     },
          
//                     {
//                       "question": "Who painted the Mona Lisa?",
//                       "optionA": "Alexander Graham Bell",
//                       "optionB": "Sir Isaac Newton",
//                       "optionC": "Leonardo Da Vinci",
//                       "optionD": "Albert Einstein",
//                       "answer": "Leonardo Da Vinci"
//                     },
          
//                     {
//                       "question": "What’s the most important book in the Moslem religion?",
//                       "optionA": "The Koran",
//                       "optionB": "The Dictionary",
//                       "optionC": "The Bible",
//                       "optionD": "The Chemistry text Book",
//                       "answer": "The Koran"
//                     },
          
//                     {
//                       "question": "What’s the capital of Ethiopia?",
//                       "optionA": "Cape Town",
//                       "optionB": "San Francisco",
//                       "optionC": "Abuja",
//                       "optionD": "Syndey",
//                       "answer": "Addis Ababa"
//                     },
          
//                     {
//                       "question": "How many squares are there on a chess board?",
//                       "optionA": "128",
//                       "optionB": "64",
//                       "optionC": "32",
//                       "optionD": "256",
//                       "answer": "64"
//                     },
          
//                     {
//                       "question": "Who invented the electric light bulb?",
//                       "optionA": "Tom Cruise",
//                       "optionB": "Barack Obama",
//                       "optionC": "Wole Soyinka",
//                       "optionD": "Thomas Edison",
//                       "answer": "Thomas Edison"
//                     },
          
//                     {
//                       "question": "What are the first three words of the bible?",
//                       "optionA": "be with everyone",
//                       "optionB": "Again Jesus asked",
//                       "optionC": "In the beginning",
//                       "optionD": "At that time",
//                       "answer": "In the beginning"
//                     }
//       ],
//       Index_Of_Question: 0,
//       score: 0,
//       attemptedQuestions: 0,
//       correctAnswers: 0,
//       wrongAnswers: 0
//     }
//   }

//   handleAnswer = (selectedAnswer) => {
//     const currentQuestion = this.state.Array_OF_questions[this.state.Index_Of_Question];
//     if (currentQuestion.answer === selectedAnswer) {
//       // Increment score and correct answer count if the answer is correct
//       this.setState(prevState => ({
//         score: prevState.score + 1,
//         correctAnswers: prevState.correctAnswers + 1
//       }));
//       // Show alert for correct answer
//       alert('Correct answer!');
//     } else {
//       // Increment attempted and wrong answer count if the answer is wrong
//       this.setState(prevState => ({
//         wrongAnswers: prevState.wrongAnswers + 1
//       }));
//       // Show alert for wrong answer
//       alert('Wrong answer! The correct answer is: ' + currentQuestion.answer);
//     }
//     // Increment attempted questions
//     this.setState(prevState => ({
//       attemptedQuestions: prevState.attemptedQuestions + 1
//     }));
//   }

//   Previous_Question = () => {
//     this.setState(previousState => ({
//       Index_Of_Question: Math.max(0, previousState.Index_Of_Question - 1)
//     }));
//   }

//   Next_Question = () => {
//     this.setState(previousState => ({
//       Index_Of_Question: Math.min(previousState.Array_OF_questions.length - 1, previousState.Index_Of_Question + 1)
//     }));
//   }

//   Quit_Quiz = () => {
//     const Quiting = window.confirm("Are you sure you want to quit?");
//     if (Quiting) {
//       // Redirect to home page
//       window.location.href = '/';
//     }
//   }

//   Finish_Quiz = () => {
//     const Finishing = window.confirm("Are you sure you want to finish?");
//     if (Finishing) {
//       // Redirect to results page
//       window.location.href = '/Results';
//     }
//   }

//   render() {
//     const currentQuestion = this.state.Array_OF_questions[this.state.Index_Of_Question];

//     return (
//       <>
//         <div className="body">
//           <h1>Questions</h1>
//           <p className="que">{this.state.Index_Of_Question + 1} of {this.state.Array_OF_questions.length}</p>
//           <h5>{currentQuestion.question}</h5>
//           <div className="opt-body">
//             {Object.keys(currentQuestion).filter(key => key.startsWith('option')).map((key, index) => (
//               <div key={index} className="option" onClick={() => this.handleAnswer(currentQuestion[key])}>{currentQuestion[key]}</div>
//             ))}
//           </div>
//           <div className="buttons">
//             <button className="Previous" onClick={this.Previous_Question}>Previous</button>
//             <button className="Next" onClick={this.Next_Question}>Next</button>
//             <button className="Quit" onClick={this.Quit_Quiz}>Quit</button>
//             <button className="Finish" onClick={this.Finish_Quiz}>Finish</button>
//           </div>
//         </div>
//       </>
//     )
//   }
// }

// // Starting component
// const Starting = () => {
//   return (
//     <div className="starting-container">
//       <h1 className="starting-title">Quiz</h1>
//       <br />
//       <br />
//       <Link to="/Quiz" className="start-link">Start</Link>
//     </div>
//   );
// }

// // Results component
// const Results = ({ score, attemptedQuestions, correctAnswers, wrongAnswers }) => {
//   const totalQuestions = attemptedQuestions;
//   return (
//     <div className="results-container">
//       <h2 className="results-title">Results</h2>
//       <p className="results-info">Your score is: {score}</p>
//       <p className="results-info">Total questions: {totalQuestions}</p>
//       <p className="results-info">Attempted questions: {attemptedQuestions}</p>
//       <p className="results-info">Correct answers: {correctAnswers}</p>
//       <p className="results-info">Wrong answers: {wrongAnswers}</p>
//       <br />
//       <Link to="/" className="results-link">Back to Home</Link>
//       <Link to="/Quiz" className="results-link">Play Again</Link>
//     </div>
//   );
// };

// // App component
// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route path="/" element={<Starting />} />
//           <Route path="/Quiz" element={<QuizApp />} />
//           <Route path="/Results" element={<Results score={4} attemptedQuestions={15} correctAnswers={4} wrongAnswers={11} />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

class QuizApp extends React.Component {
  constructor() {
    super();
    this.state = {
      Array_OF_questions: [
                   {
                      "question": "What temperature does water boil at?",
                      "optionA": "50 degrees Celcius",
                      "optionB": "25 degrees Celcius",
                      "optionC": "100 degrees Celcius",
                      "optionD": "150 degrees Celcius",
                      "answer": "100 degrees Celcius"
                    },
          
                    {
                      "question": "Who wrote Julius Caesar, Macbeth and Hamlet?",
                      "optionA": "Wole Soyinka",
                      "optionB": "William Shakespeare",
                      "optionC": "Ngozi Chimamanda Adichie",
                      "optionD": "Dan Brown",
                      "answer": "William Shakespeare"
                    },
          
                    {
                      "question": "What did the crocodile swallow in Peter Pan?",
                      "optionA": "A Book",
                      "optionB": "A Computer",
                      "optionC": "A pair of shoes",
                      "optionD": "Alarm Clock",
                      "answer": "Alarm Clock"
                    },
          
                    {
                      "question": "Which is the only mammal that can’t jump?",
                      "optionA": "Dog",
                      "optionB": "Elephant",
                      "optionC": "Goat",
                      "optionD": "Lion",
                      "answer": "Elephant"
                    },
          
                    {
                      "question": "Who lived at 221B, Baker Street, London?",
                      "optionA": "Tony Stark",
                      "optionB": "Morgan Freeman",
                      "optionC": "Sherlock Holmes",
                      "optionD": "Samuel L. Jackson",
                      "answer": "Sherlock Holmes"
                    },
          
                    {
                      "question": "What colour is a panda?",
                      "optionA": "Green and Yellow",
                      "optionB": "Blue and Red",
                      "optionC": "Green and White",
                      "optionD": "Black and White",
                      "answer": "Black and White"
                    },
          
                    {
                      "question": "Where is the smallest bone in the human body?",
                      "optionA": "The Chest",
                      "optionB": "The Ear",
                      "optionC": "The Legs",
                      "optionD": "The Hands",
                      "answer": "The Ear"
                    },
          
                    {
                      "question": "What does the roman numeral C represent?",
                      "optionA": "100",
                      "optionB": "10",
                      "optionC": "10,000",
                      "optionD": "1,000,000",
                      "answer": "100"
                    },
          
                    {
                      "question": "What takes place in Hong Kong's Happy Valley?",
                      "optionA": "Chicken Wrestling",
                      "optionB": "Horse racing",
                      "optionC": "Street Racing",
                      "optionD": "Arm Wrestling",
                      "answer": "Horse racing"
                    },
          
                    {
                      "question": "Who painted the Mona Lisa?",
                      "optionA": "Alexander Graham Bell",
                      "optionB": "Sir Isaac Newton",
                      "optionC": "Leonardo Da Vinci",
                      "optionD": "Albert Einstein",
                      "answer": "Leonardo Da Vinci"
                    },
          
                    {
                      "question": "What’s the most important book in the Moslem religion?",
                      "optionA": "The Koran",
                      "optionB": "The Dictionary",
                      "optionC": "The Bible",
                      "optionD": "The Chemistry text Book",
                      "answer": "The Koran"
                    },
          
                    {
                      "question": "What’s the capital of Ethiopia?",
                      "optionA": "Cape Town",
                      "optionB": "San Francisco",
                      "optionC": "Abuja",
                      "optionD": "Syndey",
                      "answer": "Addis Ababa"
                    },
          
                    {
                      "question": "How many squares are there on a chess board?",
                      "optionA": "128",
                      "optionB": "64",
                      "optionC": "32",
                      "optionD": "256",
                      "answer": "64"
                    },
          
                    {
                      "question": "Who invented the electric light bulb?",
                      "optionA": "Tom Cruise",
                      "optionB": "Barack Obama",
                      "optionC": "Wole Soyinka",
                      "optionD": "Thomas Edison",
                      "answer": "Thomas Edison"
                    },
          
                    {
                      "question": "What are the first three words of the bible?",
                      "optionA": "be with everyone",
                      "optionB": "Again Jesus asked",
                      "optionC": "In the beginning",
                      "optionD": "At that time",
                      "answer": "In the beginning"
                    }
      ],
      Index_Of_Question: 0,
      score: 0,
      attemptedQuestions: 0,
      correctAnswers: 0,
      wrongAnswers: 0
    };
  }

  handleAnswer = (selectedAnswer) => {
    const currentQuestion = this.state.Array_OF_questions[this.state.Index_Of_Question];
    if (currentQuestion.answer === selectedAnswer) {
      this.setState(prevState => ({
        score: prevState.score + 1,
        correctAnswers: prevState.correctAnswers + 1
      }));
      alert('Correct answer!');
    } else {
      this.setState(prevState => ({
        wrongAnswers: prevState.wrongAnswers + 1
      }));
      alert('Wrong answer! The correct answer is: ' + currentQuestion.answer);
    }
    this.setState(prevState => ({
      attemptedQuestions: prevState.attemptedQuestions + 1
    }));
  };

  Previous_Question = () => {
    this.setState(previousState => ({
      Index_Of_Question: Math.max(0, previousState.Index_Of_Question - 1)
    }));
  }

  Next_Question = () => {
    this.setState(previousState => ({
      Index_Of_Question: Math.min(previousState.Array_OF_questions.length - 1, previousState.Index_Of_Question + 1)
    }));
  }

  Quit_Quiz = () => {
    const Quiting = window.confirm("Are you sure you want to quit?");
    if (Quiting) {
      window.location.href = '/';
    }
  }

  Finish_Quiz = () => {
    const Finishing = window.confirm("Are you sure you want to finish?");
    if (Finishing) {
      window.location.href = '/Results';
    }
  }

  render() {
    const currentQuestion = this.state.Array_OF_questions[this.state.Index_Of_Question];

    return (
      <>
        <div className="body">
          <h1>Questions</h1>
          <p className="que">{this.state.Index_Of_Question + 1} of {this.state.Array_OF_questions.length}</p>
          <h5>{currentQuestion.question}</h5>
          <div className="opt-body">
            {Object.keys(currentQuestion).filter(key => key.startsWith('option')).map((key, index) => (
              <div key={index} className="option" onClick={() => this.handleAnswer(currentQuestion[key])}>{currentQuestion[key]}</div>
            ))}
          </div>
          <div className="buttons">
            <button className="Previous" onClick={this.Previous_Question}>Previous</button>
            <button className="Next" onClick={this.Next_Question}>Next</button>
            <button className="Quit" onClick={this.Quit_Quiz}>Quit</button>
            <button className="Finish" onClick={this.Finish_Quiz}>Finish</button>
          </div>
        </div>
      </>
    )
  }
}

const Starting = () => {
  return (
    <div className="starting-container">
      <h1 className="starting-title">Quiz</h1>
      <br />
      <br />
      <Link to="/Quiz" className="start-link">Start</Link>
    </div>
  );
}

const Results = ({ score, attemptedQuestions, correctAnswers, wrongAnswers }) => {
  const totalQuestions = attemptedQuestions;
  return (
    <div className="results-container">
      <h2 className="results-title">Results</h2>
      <p className="results-info">Your score is: {score}</p>
      <p className="results-info">Total questions: {15}</p>
      <p className="results-info">Attempted questions: {attemptedQuestions}</p>
      <p className="results-info">Correct answers: {correctAnswers}</p>
      <p className="results-info">Wrong answers: {wrongAnswers}</p>
      <br />
      <Link to="/" className="results-link">Back to Home</Link>
      <Link to="/Quiz" className="results-link">Play Again</Link>
    </div>
  );
};



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Starting />} />
          <Route path="/Quiz" element={<QuizApp />} />
          <Route path="/Results" element={<Results  score={7} attemptedQuestions={15} correctAnswers={7} wrongAnswers={8}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;






