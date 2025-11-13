import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const MiniQuiz = ({ onClose }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const questions = [
    {
      question: "Tu saari baat seedha maan leti hai… main kya sochta hu?",
      options: [
        "Bhai itni seedhi?? 😭",
        "Thoda fight back kar yaar.",
        "Cute ho but thodi stubborn hoti to maza aata.",
        "Ye mujhe maar degi ek din, bas mann me 😭🔥"
      ],
      correct: 1,
      emoji: "😼"
    },
    {
      question: "Jab main bolta hu 'chup hoja' aur tu aur bolti hai… kya lagta mujhe?",
      options: [
        "Perfect. Exactly yehi chahiye tha.",
        "Cute attitude 10/10.",
        "Isko chup karana impossible.",
        "Bas iske bolne ka tareeka hi pyara hai 😭💗"
      ],
      correct: 0,
      emoji: "🔊"
    },
    {
      question: "Teri sabse dangerous quality kya lagti hai mujhe?",
      options: [
        "Cute gussa",
        "Baccha wali aada (weakness level 100)",
        "Fight-back mode",
        "Silent treatment"
      ],
      correct: 1,
      emoji: "🎀"
    },
    {
      question: "Jab tu fight back karti hai, main kya feel karta hu?",
      options: [
        "Chal finally challenge mila.",
        "Yeh ladki mast attitude rakhti.",
        "Ye scene toh flirty ban raha.",
        "Gussa bhi hoti hai toh bachi jaisi lagti 😭❤️"
      ],
      correct: 3,
      emoji: "😤"
    },
    {
      question: "Teri baccha wali aadat mujhe kyun pasand hai?",
      options: [
        "Cute hoti hai",
        "Innocent lagti ho",
        "Mujhe smile aata hai",
        "Kyu pasand na aayegi?? 😭🔥"
      ],
      correct: 3,
      emoji: "🧸"
    },
    {
      question: "Jab tu irritate karti hai, mera actual reaction?",
      options: [
        "Pagal hai ye.",
        "Itni cute irritate kaun karta?",
        "Chal roothi ho? aur bol.",
        "Bas kar, nahi to aur pasand aayegi 😭🔥"
      ],
      correct: 3,
      emoji: "😩🔥"
    },
    {
      question: "Main tumhe tease kyu karta hoon?",
      options: [
        "Tumhara reaction OP hota",
        "Tum gussa ho ke aur cute lagti ho",
        "Tumari awaaz funny ho jati gussa me 😭",
        "ALWAYS — Maza aata hai tujhe irritate karne me 😭🔥"
      ],
      correct: 3,
      emoji: "😈"
    },
    {
      question: "Main flirt kab karta hoon?",
      options: [
        "Jab tum cute lagti ho",
        "Jab tum fight-back karti ho",
        "Jab tum gussa hoti ho",
        "ALWAYS — Main flirt karna band kab karta hu? 😭🔥"
      ],
      correct: 3,
      emoji: "😎"
    },
    {
      question: "Jab tu 'ja yaar jaa' bolti hai, mera brain:",
      options: [
        "Cute lag rahi, ignore nahi kar sakta.",
        "Okay okay chill.",
        "Aur bol yaar.",
        "Iska gussa = mera serotonin boost."
      ],
      correct: 3,
      emoji: "🤣"
    },
    {
      question: "Sach bolu… tu mere liye kya lagti hai?",
      options: [
        "Ek cute fighter",
        "Best irritator",
        "Daily dose of fun",
        "Secret favorite (bas mat maan 😳🔥)"
      ],
      correct: 3,
      emoji: "❤️"
    }
  ];

  const handleAnswer = (index) => {
    setSelectedAnswer(index);
    const correct = index === questions[currentQuestion].correct;
    setIsCorrect(correct);

    if (correct) setScore(score + 1);

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setIsCorrect(null);
      } else {
        setShowResult(true);
      }
    }, 1500);
  };

  const getResultMessage = () => {
    const percentage = (score / questions.length) * 100;

    if (percentage === 100) {
      return "PERFECT SCORE! Tu literally mera brain read kar sakti hai 😭🔥 Tu sach me mere feelings samajhti hai 💗";
    } else if (percentage >= 70) {
      return "DAMNNN! Tu mujhe acche se samajhti hai 😳🔥 Teri understanding level 💯";
    } else if (percentage >= 50) {
      return "Not bad! Tu thodi bahut samajhti hai… but still learning 😼💗";
    } else {
      return "Aree yaar 😭 Abhi toh main tumhe confuse karta hu lagta hai 😂 No worries, hum dono figure out karenge 💕";
    }
  };

  const getResultEmoji = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage === 100) return "🏆";
    if (percentage >= 70) return "🔥";
    if (percentage >= 50) return "💖";
    return "😊";
  };

  const getResultTitle = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage === 100) return "Mind Reader! 🧠✨";
    if (percentage >= 70) return "You Know Me! 😳";
    if (percentage >= 50) return "Getting There! 💗";
    return "Cute Try! 😊";
  };

  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="mini-quiz-modal"
        initial={{ scale: 0.5, rotateY: -90 }}
        animate={{ scale: 1, rotateY: 0 }}
        exit={{ scale: 0.5, rotateY: 90 }}
        transition={{ duration: 0.5, type: "spring" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={onClose}>✕</button>

        {!showResult ? (
          <div className="mini-quiz-content">
            <div className="mini-quiz-header">
              <h2 className="mini-quiz-title">How Well Do You Know Me? 😳🔥</h2>
              <p className="quiz-subtitle">Let's see how much you understand 💗</p>
              <div className="question-counter">
                Question {currentQuestion + 1}/{questions.length}
              </div>
            </div>

            <motion.div
              className="mini-question-card"
              key={currentQuestion}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
            >
              <div className="mini-question-emoji">
                {questions[currentQuestion].emoji}
              </div>

              <h3 className="mini-question-text">
                {questions[currentQuestion].question}
              </h3>

              <div className="mini-options">
                {questions[currentQuestion].options.map((option, index) => (
                  <motion.button
                    key={index}
                    className={`mini-option ${
                      selectedAnswer === index
                        ? isCorrect
                          ? "correct"
                          : "wrong"
                        : ""
                    }`}
                    onClick={() => handleAnswer(index)}
                    disabled={selectedAnswer !== null}
                    whileHover={{ scale: selectedAnswer === null ? 1.03 : 1 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <span className="option-text">{option}</span>

                    {selectedAnswer === index && (
                      <motion.span
                        className="check-icon"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                      >
                        {isCorrect ? "✓" : "✗"}
                      </motion.span>
                    )}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            <div className="score-tracker">
              Score: {score}/{questions.length}
            </div>
          </div>
        ) : (
          <motion.div
            className="mini-quiz-result"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <motion.div
              className="result-emoji-big"
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity
              }}
            >
              {getResultEmoji()}
            </motion.div>

            <h2 className="result-title-mini">{getResultTitle()}</h2>

            <div className="score-big">
              {score}/{questions.length}
            </div>

            <p className="result-text-mini">{getResultMessage()}</p>

            <div className="result-buttons">
              <motion.button
                className="retry-btn-mini"
                onClick={() => {
                  setCurrentQuestion(0);
                  setScore(0);
                  setShowResult(false);
                  setSelectedAnswer(null);
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Try Again 🔄
              </motion.button>

              <motion.button
                className="close-btn-mini"
                onClick={onClose}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Close
              </motion.button>
            </div>
          </motion.div>
        )}

      </motion.div>
    </motion.div>
  );
};

export default MiniQuiz;
