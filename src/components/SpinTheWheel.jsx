
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const SpinTheWheel = ({ onClose }) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [currentDare, setCurrentDare] = useState(null);
  const [rotation, setRotation] = useState(0);
  const [showDare, setShowDare] = useState(false);

  const dares = [
    {
      text: "Send your cutest selfie 😳",
      emoji: "📸",
      color: "#ff6b9d"
    },
    {
      text: "Say one nice thing about me 😼🔥",
      emoji: "💗",
      color: "#a29bfe"
    },
    {
      text: "Show your angry face right now 😂",
      emoji: "😠",
      color: "#ffd93d"
    },
    {
      text: "Text me 'I win' 😭💗",
      emoji: "🏆",
      color: "#6bcf7f"
    },
    {
      text: "Do a cute pose and send pic 🥺",
      emoji: "🌟",
      color: "#74b9ff"
    },
    {
      text: "How do you feel🥰",
      emoji: "💌",
      color: "#fdcb6e"
    },
    {
      text: "Tell me a scicert 😏",
      emoji: "💖",
      color: "#e17055"
    }
  ];

  const spinWheel = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    setShowDare(false);
    
    // Random spins between 5-10 full rotations + random position
    const randomSpins = 5 + Math.floor(Math.random() * 5);
    const randomDegree = Math.floor(Math.random() * 360);
    const totalRotation = rotation + (randomSpins * 360) + randomDegree;
    
    setRotation(totalRotation);

    // Calculate which dare was selected
    setTimeout(() => {
      const normalizedRotation = totalRotation % 360;
      const segmentAngle = 360 / dares.length;
      const selectedIndex = Math.floor((360 - normalizedRotation) / segmentAngle) % dares.length;
      
      setCurrentDare(dares[selectedIndex]);
      setIsSpinning(false);
      setShowDare(true);
    }, 4000);
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
        className="spin-wheel-modal"
        initial={{ scale: 0.5, rotateY: -90 }}
        animate={{ scale: 1, rotateY: 0 }}
        exit={{ scale: 0.5, rotateY: 90 }}
        transition={{ duration: 0.5, type: "spring" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={onClose}>✕</button>

        <motion.h2
          className="wheel-title"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Spin The Wheel 🎡
        </motion.h2>
        
        <p className="wheel-subtitle">Cute Dare Game 😳💗</p>

        <div className="wheel-container">
          {/* POINTER */}
          <motion.div
            className="wheel-pointer"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            ▼
          </motion.div>

          {/* WHEEL */}
          <motion.div
            className="wheel"
            animate={{ rotate: rotation }}
            transition={{
              duration: 4,
              ease: "easeOut"
            }}
          >
            {dares.map((dare, index) => {
              const segmentAngle = 360 / dares.length;
              const rotation = index * segmentAngle;
              
              return (
                <div
                  key={index}
                  className="wheel-segment"
                  style={{
                    transform: `rotate(${rotation}deg)`,
                    background: dare.color
                  }}
                >
                  <div
                    className="segment-content"
                    style={{ transform: `rotate(${segmentAngle / 2}deg)` }}
                  >
                    <span className="segment-emoji">{dare.emoji}</span>
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* CENTER BUTTON */}
          <motion.button
            className="spin-button"
            onClick={spinWheel}
            disabled={isSpinning}
            whileHover={{ scale: isSpinning ? 1 : 1.1 }}
            whileTap={{ scale: isSpinning ? 1 : 0.9 }}
          >
            {isSpinning ? (
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              >
                🎡
              </motion.span>
            ) : (
              "SPIN!"
            )}
          </motion.button>
        </div>

        {/* DARE RESULT */}
        <AnimatePresence>
          {showDare && currentDare && (
            <motion.div
              className="dare-result"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <motion.div
                className="dare-emoji"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {currentDare.emoji}
              </motion.div>
              <h3 className="dare-title">Your Dare:</h3>
              <p className="dare-text">{currentDare.text}</p>
              
              <motion.button
                className="spin-again-btn"
                onClick={() => {
                  setShowDare(false);
                  setCurrentDare(null);
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Spin Again 🔄
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {!showDare && !isSpinning && (
          <motion.p
            className="instruction-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Click the center button to spin! 🎯
          </motion.p>
        )}
      </motion.div>
    </motion.div>
  );
};

export default SpinTheWheel;