import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Gallery = ({ onClose }) => {
  const [revealedPhotos, setRevealedPhotos] = useState([]);

  const photos = [
  {
    id: 1,
    src: "https://zht60kf2uzgrjhve.public.blob.vercel-storage.com/1364.JPG",
    title: "Gym de shocken 💗",
    caption: "Strongest but cutest 😭🔥",
    year: "2024",
  },
  {
  id: 2,
  src: "https://zht60kf2uzgrjhve.public.blob.vercel-storage.com/photo2.jpg",
  title: "The triplet madness 😂",
  caption: "Chaos but fun always",
  year: "2023",
  },
  {
    id: 3,
    src: "https://zht60kf2uzgrjhve.public.blob.vercel-storage.com/JPEG%20image-4E4B-BDCC-CF-2.jpeg",
    title: "My Personal Fav ❤️",
    caption: "This pic >>> everything",
    year: "2024",
  },
];


  const togglePhoto = (photoId) => {
    if (revealedPhotos.includes(photoId)) {
      setRevealedPhotos(revealedPhotos.filter((id) => id !== photoId));
    } else {
      setRevealedPhotos([...revealedPhotos, photoId]);
    }
  };

  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="gallery-modal-reveal"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.5 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>

        <motion.h2
          className="gallery-title-fancy"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Our Memories 🎓💗
        </motion.h2>

        <p className="gallery-instruction">Tap to reveal each memory ✨</p>

        <div className="memories-list">
          {photos.map((photo, index) => {
            const isRevealed = revealedPhotos.includes(photo.id);

            return (
              <motion.div
                key={photo.id}
                className="memory-item"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                {/* Title Card */}
                <motion.div
                  className="memory-title-card"
                  onClick={() => togglePhoto(photo.id)}
                  whileHover={{ scale: 1.03, x: 10 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="title-content">
                    <span className="memory-number">{index + 1}</span>

                    <div className="title-text">
                      <h3>{photo.title}</h3>
                      <span className="memory-year">{photo.year}</span>
                    </div>

                    <motion.span
                      className="reveal-icon"
                      animate={{ rotate: isRevealed ? 180 : 0 }}
                    >
                      {isRevealed ? "▲" : "▼"}
                    </motion.span>
                  </div>
                </motion.div>

                {/* Reveal Section */}
                <AnimatePresence>
                  {isRevealed && (
                    <motion.div
                      className="revealed-photo"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <motion.div
                        className="photo-container"
                        initial={{ scale: 0.8, y: -20 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.8, y: -20 }}
                      >
                        <img
                          src={photo.src}
                          alt={photo.title}
                          onError={(e) => {
                            e.target.src =
                              "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23ffd4e5' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='40'%3E📸%3C/text%3E%3C/svg%3E";
                          }}
                        />

                        <p className="photo-caption">{photo.caption}</p>

                        {/* Sparkles */}
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="sparkle"
                            style={{
                              top: `${20 + i * 30}%`,
                              left: `${10 + i * 35}%`,
                            }}
                            animate={{
                              opacity: [0, 1, 0],
                              scale: [0, 1.5, 0],
                              rotate: [0, 180, 360],
                            }}
                            transition={{
                              duration: 2,
                              delay: i * 0.3,
                              repeat: Infinity,
                              repeatDelay: 1,
                            }}
                          >
                            ✨
                          </motion.div>
                        ))}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Gallery;
