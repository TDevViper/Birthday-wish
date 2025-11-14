import { motion } from 'framer-motion';

const BirthdayImage = () => {
  return (
    <motion.div
      className="birthday-image-container"
      initial={{ opacity: 0, x: -100, scale: 0.8 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
    >
      <div className="image-frame">
        <motion.div
          className="birthday-photo"
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ duration: 0.3 }}
        >
          <img 
            src="https://zht60kf2uzgrjhve.public.blob.vercel-storage.com/JPEG%20image-4E4B-BDCC-CF-2.jpeg" 
            alt="https://zht60kf2uzgrjhve.public.blob.vercel-storage.com/JPEG%20image-4E4B-BDCC-CF-2.jpeg"  
          />
          
          {/* Floating Emojis around Image - NO HEARTS */}
          {['🎉', '🎂', '🎈', '🌟','❤️', '🎊', '✨'].map((emoji, i) => (
            <motion.div
              key={`img-emoji-${i}`}
              className="image-emoji"
              style={{
                top: `${15 + i * 15}%`,
                left: i % 2 === 0 ? '-12px' : 'auto',
                right: i % 2 === 0 ? 'auto' : '-12px'
              }}
              animate={{
                y: [0, -12, 0],
                opacity: [0.7, 1, 0.7],
                scale: [1, 1.3, 1],
                rotate: [0, 10, 0]
              }}
              transition={{
                duration: 2.5 + Math.random() * 1,
                delay: i * 0.4,
                repeat: Infinity
              }}
            >
              {emoji}
            </motion.div>
          ))}
        </motion.div>

        {/* Birthday Badge */}
        <motion.div
          className="birthday-badge"
          initial={{ scale: 0, }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 1.5, type: "spring", bounce: 0.6 }}
        >
          <span className="badge-emoji">🎂</span>
          <span className="badge-text">19th Birthday!</span>
        </motion.div>

        {/* Name Label */}
        <motion.div
          className="name-label"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          Happy Birthday, Billi! 🎉
        </motion.div>

        {/* Corner Sparkles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`corner-sparkle-${i}`}
            className="frame-sparkle"
            style={{
              top: i < 4 ? '10px' : 'auto',
              bottom: i >= 4 ? '10px' : 'auto',
              left: i % 2 === 0 ? '10px' : 'auto',
              right: i % 2 === 0 ? 'auto' : '10px'
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.8, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 2,
              delay: i * 0.25,
              repeat: Infinity,
              repeatDelay: 1
            }}
          >
            ⭐
          </motion.div>
        ))}
      </div>

      {/* Rainbow Glow Effect */}
      <motion.div
        className="image-glow rainbow-glow"
        animate={{
          opacity: [0.4, 0.7, 0.4],
          scale: [1, 1.15, 1]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );
};

export default BirthdayImage;
