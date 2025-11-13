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
            <p>Happy 19th Birthday! 🐱 🎉</p>
            <p>
              Hii Billi 🐱, sorry for the delay in your gift… but issme teri bhi galti hai 😤🤣  
              Tu ne kabhi bataya hi nahi ki tujhe kya chahiye, aur address bhi deny mode ON 🙄.  
              So jo cheez mere control me thi — ek website — woh bana di 😌✨  
              Sorry agar thodi kami reh gayi ho, time kam tha (papers bhi chal rahe the 😭).  
              Anyway… Happy Birthday, Iron Mahi 🤣⚡
            </p>
            <p>
              Hmm… honestly samajh nahi aa raha kya likhu, but chalo try karta hu.  
              Officially 2 saal ho gaye school chhode hue, aur hum mile bhi nahi.  
              Par sach bolu? Mujhe lagta hi nahi ki kuch change hua.  
              We still talk exactly the same… same dumb fights, same teasing,  
              same Billi vibes 😭💗  
              Aur haan, ek baat tu bilkul sahi bolti hai —  
              “dosti ko time se koi farak nahi padta” — iss baat se 100% agree hu.  
              (Baaki baaton se kabhi nahi 🤣)

            </p>
            <p>
              Aur haan sun… thodi ZID kar liya kar 😤  
              Teri saari baat maan lene ki aadat cute hai,  
              but bhass karne me zyada maza aata hai 😭🔥  
              Aur apne birthday ke liye thoda excited raha kar yaar…  
              ek hi chair pe poora din mat padi rehna 🪑😑  
              Thoda ghoom liya kar, thoda life enjoy kar.  
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
