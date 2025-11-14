import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPrompt, setShowPrompt] = useState(true);
  const audioRef = useRef(null);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((err) => {
          console.log("Audio play failed:", err);
        });
      }
      setIsPlaying(!isPlaying);
    }
    setShowPrompt(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => setShowPrompt(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* AUDIO ELEMENT */}
      <audio ref={audioRef} loop>
        <source
          src="https://zht60kf2uzgrjhve.public.blob.vercel-storage.com/Pehli%20Nazar%20Mein%20Race%20320%20Kbps.mp3"
          type="audio/mpeg"
        />
      </audio>

      {/* BUTTON */}
      <motion.button
        className="music-toggle-btn"
        onClick={toggleMusic}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          animate={{ rotate: isPlaying ? 360 : 0 }}
          transition={{
            duration: 2,
            repeat: isPlaying ? Infinity : 0,
            ease: "linear",
          }}
        >
          {isPlaying ? "🎵" : "🔇"}
        </motion.div>
      </motion.button>

      {/* PROMPT */}
      <AnimatePresence>
        {showPrompt && (
          <motion.div
            className="music-prompt"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <p>Click the music icon to play background music 🎶</p>
            <motion.div
              className="prompt-arrow"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              ↗️
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WAVES */}
      {isPlaying && (
        <div className="music-waves">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="wave-bar"
              animate={{
                scaleY: [1, 2, 0.5, 1.5, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default BackgroundMusic;
