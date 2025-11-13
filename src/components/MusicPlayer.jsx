import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

const MusicPlayer = ({ shouldPlay, isModal, onClose }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (shouldPlay && audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.play().catch(err => {
        console.log("Autoplay prevented:", err);
      });
    }
  }, [shouldPlay]);

  if (isModal) {
    return (
      <motion.div
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="music-modal"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="close-btn" onClick={onClose}>✕</button>
          <h2 className="music-title">🎶 Maan Meri Jaan</h2>
          <p className="music-subtitle">Your Song — by King</p>
          
          <div className="youtube-container">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/Gl6ekgobG2k?autoplay=1"
              title="Maan Meri Jaan"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          
          <p className="music-description">
            Because every best friend deserves a theme song 💕
          </p>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <audio 
      ref={audioRef} 
      loop 
      src="/maan-meri-jaan.mp3"
      style={{ display: 'none' }}
    />
  );
};

export default MusicPlayer;
