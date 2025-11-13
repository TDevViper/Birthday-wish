import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const WelcomeAnimation = ({ onComplete }) => {
  const [show, setShow] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current
        .play()
        .catch((err) => console.log("Audio autoplay blocked:", err));
    }

    const timer = setTimeout(() => {
      setShow(false);

      // AUDIO FADE OUT
      if (audioRef.current) {
        const fadeOut = setInterval(() => {
          if (audioRef.current.volume > 0.1) {
            audioRef.current.volume -= 0.1;
          } else {
            clearInterval(fadeOut);
            audioRef.current.pause();
          }
        }, 100);
      }

      onComplete();
    }, 4000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="welcome-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* BACKGROUND MUSIC */}
          <audio ref={audioRef} loop>
            <source src="/maan-meri-jaan.mp3" type="audio/mpeg" />
          </audio>

          {/* CONFETTI */}
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={`burst-${i}`}
              className="confetti-burst"
              style={{
                left: "50%",
                top: "50%",
                background: [
                  "#ff6b9d",
                  "#ffd93d",
                  "#6bcf7f",
                  "#a29bfe",
                  "#fd79a8",
                ][i % 5],
              }}
              initial={{ scale: 0, x: 0, y: 0 }}
              animate={{
                scale: [0, 1, 0.8],
                x: (Math.random() - 0.5) * 800,
                y: (Math.random() - 0.5) * 600,
                rotate: Math.random() * 720,
              }}
              transition={{ duration: 2, delay: 0.5 }}
            />
          ))}

          {/* MAIN BIRTHDAY TEXT */}
          <motion.div
            className="welcome-content"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.h1
              className="welcome-title"
              animate={{
                scale: [1, 1.1, 1],
                textShadow: [
                  "0 0 20px rgba(255, 107, 157, 0.8)",
                  "0 0 40px rgba(255, 107, 157, 1)",
                  "0 0 20px rgba(255, 107, 157, 0.8)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Happy Birthday
            </motion.h1>

            <motion.h2
              className="welcome-name"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Billi 🎂
            </motion.h2>

            <motion.p
              className="welcome-subtitle"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              19 Years of Awesomeness ✨
            </motion.p>

            {/* MUSIC NOTES FLOATING */}
            <motion.div
              className="music-notes"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              {["🎵", "🎶", "🎵"].map((note, i) => (
                <motion.span
                  key={i}
                  className="floating-note"
                  style={{ left: `${30 + i * 20}%` }}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.3,
                    repeat: Infinity,
                  }}
                >
                  {note}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeAnimation;
