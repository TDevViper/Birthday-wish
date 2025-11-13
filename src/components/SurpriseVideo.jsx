import { motion } from 'framer-motion';
import { useState } from 'react';

const SurpriseVideo = ({ onClose }) => {
  const [showOutro, setShowOutro] = useState(false);

  return (
    <motion.div
      className="modal-overlay surprise-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="surprise-modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {!showOutro ? (
          <>
            <button className="close-btn" onClick={onClose}>✕</button>
            
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={`glow-${i}`}
                className="glow-particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0]
                }}
                transition={{
                  duration: 3,
                  delay: i * 0.2,
                  repeat: Infinity
                }}
              />
            ))}

            <motion.div
              className="video-container"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <video
                width="100%"
                controls
                autoPlay
                onEnded={() => setShowOutro(true)}
              >
                <source src="/surprise-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </>
        ) : (
          <motion.div
            className="outro-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <motion.h1
              className="outro-text"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1.5 }}
            >
              Happy Birthday, Billi 💖
            </motion.h1>
            <motion.p
              className="outro-subtext"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.5, duration: 1.5 }}
            >
              May your stars always shine brighter.
            </motion.p>
            <motion.p
              className="outro-signature"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3, duration: 2 }}
            >
              — Arnav ✨
            </motion.p>
            
            <motion.button
              className="close-outro-btn"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4 }}
              onClick={onClose}
              whileHover={{ scale: 1.1 }}
            >
              Close
            </motion.button>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default SurpriseVideo;
