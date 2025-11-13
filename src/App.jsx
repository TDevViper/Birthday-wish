import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import NightSky from './components/NightSky';
import BirthdayImage from './components/BirthdayImage';
import NavigationButtons from './components/NavigationButtons';
import Gallery from './components/Gallery';
import Letter from './components/Letter';
import MusicPlayer from './components/MusicPlayer';
import BackgroundMusic from './components/BackgroundMusic';
import MiniQuiz from './components/MiniQuiz';
import SpinTheWheel from './components/SpinTheWheel';


import './styles/global.css';

function App() {
  const [activeSection, setActiveSection] = useState(null);

  return (
    <div className="app">

      {/* Background Music */}
      <BackgroundMusic />

      {/* Sky */}
      <NightSky />

      {/* Music Player (UI only) */}
      <MusicPlayer shouldPlay={false} />

      {/* Floating Quote */}
      <motion.div
        className="floating-quote"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 2, ease: "easeOut" }}
      >
        "The sky looked just like this when you were born." 🌙
      </motion.div>

      {/* Floating Hearts */}
      {[...Array(12)].map((_, i) => {
        const colors = ['#ff6b9d', '#fd79a8', '#ffa5d8', '#ff9ff3', '#ffc4e1'];
        const color = colors[i % colors.length];
        return (
          <motion.div
            key={`heart-${i}`}
            className="floating-heart"
            style={{
              left: `${10 + i * 7}%`,
              bottom: '-10%',
              color,
              filter: `drop-shadow(0 0 10px ${color})`
            }}
            animate={{
              y: [0, -window.innerHeight - 100],
              x: [0, (Math.random() - 0.5) * 80],
              rotate: [0, (Math.random() - 0.5) * 360],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              delay: i * 1.2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            💗
          </motion.div>
        );
      })}

      {/* Balloons */}
      {['🎈', '🎈', '🎈'].map((b, i) => (
        <motion.div
          key={`balloon-${i}`}
          className="floating-balloon"
          style={{
            left: `${25 + i * 20}%`,
            top: `${20 + i * 8}%`,
            color: ['#ff6b9d', '#ffd93d', '#a29bfe'][i]
          }}
          animate={{
            y: [0, -35, 0],
            x: [0, i % 2 === 0 ? 12 : -12, 0],
            rotate: [0, i % 2 === 0 ? 8 : -8, 0]
          }}
          transition={{
            duration: 5 + i * 0.8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {b}
        </motion.div>
      ))}

      {/* Confetti */}
      {[...Array(25)].map((_, i) => {
        const shapes = ['▲', '●', '■', '★', '◆'];
        const colors = ['#ff6b9d', '#ffd93d', '#6bcf7f', '#a29bfe', '#fd79a8', '#fdcb6e', '#74b9ff'];

        return (
          <motion.div
            key={`confetti-${i}`}
            className="confetti-piece"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              color: colors[Math.floor(Math.random() * colors.length)],
              fontSize: '1.8rem'
            }}
            animate={{
              y: [0, -120, 120, 0],
              x: [(Math.random() - 0.5) * 120],
              rotate: [0, 360, 720],
              opacity: [0, 0.9, 0.9, 0]
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              delay: i * 0.25,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {shapes[Math.floor(Math.random() * shapes.length)]}
          </motion.div>
        );
      })}

      {/* Main Birthday Image */}
      <BirthdayImage />

      {/* Navigation Buttons */}
      <NavigationButtons onNavigate={setActiveSection} />

      {/* ALL MODALS */}
      <AnimatePresence mode="wait">
        
        {activeSection === 'gallery' && (
          <Gallery onClose={() => setActiveSection(null)} />
        )}

        {activeSection === 'letter' && (
          <Letter onClose={() => setActiveSection(null)} />
        )}

        {activeSection === 'quiz' && (
          <MiniQuiz onClose={() => setActiveSection(null)} />
        )}

        {activeSection === 'wheel' && (
          <SpinTheWheel onClose={() => setActiveSection(null)} />
        )}

        {activeSection === 'fortune' && (
          <FortuneCrystal onClose={() => setActiveSection(null)} />
        )}

      </AnimatePresence>
    </div>
  );
}

export default App;
