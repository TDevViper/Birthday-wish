import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const NightSky = () => {
  const [stars, setStars] = useState([]);
  const [shootingStars, setShootingStars] = useState([]);

  useEffect(() => {
    // Generate MORE colorful stars
    const generateStars = () => {
      const newStars = [];
      const starColors = ['#ffffff', '#ffd93d', '#a29bfe', '#fd79a8', '#74b9ff', '#6bcf7f', '#feca57'];
      
      for (let i = 0; i < 400; i++) { // EVEN MORE STARS!
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3.5 + 0.5,
          delay: Math.random() * 4,
          duration: Math.random() * 4 + 1.5,
          color: starColors[Math.floor(Math.random() * starColors.length)]
        });
      }
      setStars(newStars);
    };

    const createShootingStar = () => {
      const newStar = {
        id: Date.now(),
        x: Math.random() * 100,
        y: Math.random() * 30
      };
      setShootingStars(prev => [...prev, newStar]);
      setTimeout(() => {
        setShootingStars(prev => prev.filter(s => s.id !== newStar.id));
      }, 2000);
    };

    generateStars();
    const interval = setInterval(createShootingStar, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="night-sky">
      {/* Enhanced Milky Way */}
      <div className="milky-way-enhanced">
        <div className="milky-core"></div>
        <div className="milky-layer layer-1"></div>
        <div className="milky-layer layer-2"></div>
        <div className="milky-layer layer-3"></div>
      </div>

      {/* Aurora Borealis Effect */}
      <div className="aurora-container">
        <div className="aurora aurora-1"></div>
        <div className="aurora aurora-2"></div>
        <div className="aurora aurora-3"></div>
      </div>

      {/* Sakura Petals */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`petal-${i}`}
          className="sakura-petal"
          style={{
            left: `${Math.random() * 100}%`,
            top: '-5%'
          }}
          animate={{
            y: ['0vh', '110vh'],
            x: [0, (Math.random() - 0.5) * 100, (Math.random() - 0.5) * -50, 0],
            rotate: [0, 360, 720],
            opacity: [0, 1, 1, 0]
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            delay: i * 0.8,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          🌸
        </motion.div>
      ))}

      {/* Colorful Stars */}
      {stars.map(star => (
        <motion.div
          key={star.id}
          className="star colorful-star"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            background: star.color,
            boxShadow: `0 0 ${star.size * 4}px ${star.color}`
          }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay
          }}
        />
      ))}

      {/* Shooting Stars */}
      {shootingStars.map(star => (
        <motion.div
          key={star.id}
          className="shooting-star rainbow-trail"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`
          }}
          initial={{ x: 0, y: 0, opacity: 1 }}
          animate={{ 
            x: 400, 
            y: 400, 
            opacity: 0 
          }}
          transition={{ duration: 1.8, ease: "easeOut" }}
        />
      ))}

      {/* Moon with Enhanced Glow */}
      <motion.div
        className="moon enhanced"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 3, delay: 0.5 }}
      >
        <div className="moon-glow-enhanced"></div>
        <div className="moon-surface">
          <div className="moon-crater"></div>
          <div className="moon-crater small"></div>
          <div className="moon-crater tiny"></div>
        </div>
      </motion.div>

      {/* Balloon */}
      <motion.div
        className="moon-balloon-container"
        animate={{
          y: [-15, 15, -15],
          x: [-8, 8, -8]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="moon-balloon">🎈</div>
        <div className="balloon-string"></div>
      </motion.div>

      {/* Fireflies */}
      {[...Array(20)].map((_, i) => {
        const colors = ['#ffeb3b', '#ff6b9d', '#a29bfe', '#6bcf7f', '#fd79a8', '#feca57'];
        const color = colors[i % colors.length];
        
        return (
          <motion.div
            key={`firefly-${i}`}
            className="firefly enhanced"
            style={{
              left: `${5 + i * 4.5}%`,
              bottom: `${Math.random() * 25 + 5}%`,
              background: color,
              boxShadow: `0 0 25px ${color}, 0 0 40px ${color}`
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 2.5, 1],
              y: [0, -35, 0]
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.25
            }}
          />
        );
      })}

      {/* Big Twinkling Stars */}
      {[...Array(18)].map((_, i) => {
        const colors = ['#ffd93d', '#ff6b9d', '#a29bfe', '#6bcf7f', '#fd79a8', '#74b9ff'];
        const color = colors[i % colors.length];
        
        return (
          <motion.div
            key={`twinkle-${i}`}
            className="twinkle-star-big"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              color: color,
              textShadow: `0 0 20px ${color}, 0 0 40px ${color}`
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 2, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 3.5,
              delay: i * 0.35,
              repeat: Infinity,
              repeatDelay: 2
            }}
          >
            ✨
          </motion.div>
        );
      })}

      {/* Stardust Particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={`dust-${i}`}
          className="stardust-particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
          animate={{
            opacity: [0, 0.6, 0],
            x: [0, (Math.random() - 0.5) * 100],
            y: [0, (Math.random() - 0.5) * 100]
          }}
          transition={{
            duration: 8,
            delay: i * 0.3,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
};

export default NightSky;
