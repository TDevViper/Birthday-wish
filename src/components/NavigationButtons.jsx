import { motion } from 'framer-motion';

const NavigationButtons = ({ onNavigate }) => {

  const buttons = [
    {
      id: 'gallery',
      icon: '🎓',
      text: 'School Memories',
      gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #ffecd2 100%)',
      glowColor: 'rgba(255, 154, 158, 0.6)',
    },
    { 
      id: 'wheel',      
      icon: '🎡',       
      text: 'Spin Wheel',  
      gradient: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 50%, #ff9a9e 100%)',
      glowColor: 'rgba(255, 236, 210, 0.6)',
    },
    {
      id: 'letter',
      icon: '💌',
      text: 'Letter from Arnav',
      gradient: 'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 50%, #ffecd2 100%)',
      glowColor: 'rgba(251, 194, 235, 0.6)',
    },
    {
      id: 'quiz',
      icon: '🎮',
      text: 'Quick Quiz',
      gradient: 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 50%, #ffecd2 100%)',
      glowColor: 'rgba(161, 196, 253, 0.6)',
    },
  ];

  return (
    <motion.div
      className="navigation-section"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 1, ease: "easeOut" }}
    >
      <motion.p
        className="bloom-text"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.5, duration: 0.8 }}
      >
        Your friendship tree has bloomed 🌸  
        Where do you want to go next?
      </motion.p>

      <div className="nav-buttons">
        {buttons.map((btn, index) => (
          <motion.button
            key={btn.id}
            className="nav-button-cool"
            style={{
              background: btn.gradient,
              '--glow-color': btn.glowColor
            }}
            initial={{ opacity: 0, scale: 0, rotateY: -90 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{
              delay: 3 + index * 0.15,
              duration: 0.6,
              type: "spring",
              stiffness: 200
            }}
            whileHover={{
              scale: 1.08,
              y: -8,
              rotateZ: index % 2 === 0 ? 2 : -2
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onNavigate(btn.id)}
          >

            <motion.div
              className="button-glow"
              animate={{
                opacity: [0.4, 1, 0.4],
                scale: [1, 1.12, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.3
              }}
            />

            <motion.span
              className="nav-icon-cool"
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: index * 0.5
              }}
            >
              {btn.icon}
            </motion.span>

            <span className="nav-text-cool">{btn.text}</span>

            {[...Array(3)].map((_, i) => (
              <motion.div
                key={`sparkle-${i}`}
                className="button-sparkle"
                style={{
                  top: `${20 + i * 30}%`,
                  right: `${5 + i * 10}px`
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0.5, 1.6, 0.5],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.5,
                  repeat: Infinity,
                  repeatDelay: 1.2
                }}
              >
                ✨
              </motion.div>
            ))}

            <motion.div
              className="button-ripple"
              initial={{ scale: 0, opacity: 0.6 }}
            />

          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default NavigationButtons;
