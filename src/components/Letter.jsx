import { motion } from 'framer-motion';

const Letter = ({ onClose }) => {
  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="letter-modal"
        initial={{ scale: 0.8, opacity: 0, rotateY: -90 }}
        animate={{ scale: 1, opacity: 1, rotateY: 0 }}
        exit={{ scale: 0.8, opacity: 0, rotateY: 90 }}
        transition={{ duration: 0.8 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={onClose}>✕</button>
        <div className="letter-content">
          <h2 className="letter-title">Dear Billi, 💌</h2>
          <div className="letter-body">
            <p>Happy 19th Birthday! 🎉</p>
            <p>
              Today, the stars shine just like they did on November 14, 2006, when you entered this world.
              And honestly? The universe hasn't been the same since. You brought chaos, laughter, and 
              pure magic everywhere you went.
            </p>
            <p>
              From bunking classes to late-night talks, from stupid inside jokes to crying over 
              exam results together — every moment with you has been a treasure. You're not just 
              my best friend, you're my partner in crime, my 3 AM therapist, and the person who 
              knows all my secrets (and still chooses to stick around 😂).
            </p>
            <p>
              This website is my way of saying: You matter. Your friendship is priceless. 
              And I'm so grateful the stars aligned to bring us together.
            </p>
            <p>
              May this year bring you endless joy, countless adventures, and all the love you deserve.
              Keep shining, keep dreaming, and keep being the incredible person you are.
            </p>
            <p className="letter-signature">
              Forever your chaotic best friend,<br />
              <span className="signature-name">Arnav ✨</span>
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Letter;
