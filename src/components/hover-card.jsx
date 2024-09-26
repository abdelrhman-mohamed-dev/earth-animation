import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Maximize2 } from 'lucide-react'

const HoverCard = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const cardRef = useRef(null)

  useEffect(() => {
    const updateMousePosition = (e) => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }
    }

    window.addEventListener('mousemove', updateMousePosition)
    return () => window.removeEventListener('mousemove', updateMousePosition)
  }, [])

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <motion.div
        ref={cardRef}
        className="relative w-80 h-96 rounded-lg overflow-hidden cursor-none bg-gray-500 border border-gray-300"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {/* No background image, only the hover circle animation */}
        <motion.div
          className="absolute inset-0"
          initial={{ clipPath: 'circle(0% at 50% 50%)' }}
          animate={{
            clipPath: isHovered ? `circle(70% at ${mousePosition.x}px ${mousePosition.y}px)` : 'circle(0% at 50% 50%)',
          }}
          transition={{ type: 'spring', stiffness: 100, damping: 30 }}
        />
        <motion.div
          className="absolute p-10 w-16 h-16 rounded-full bg-white flex items-center justify-center pointer-events-none"
          style={{
            x: mousePosition.x - 32,
            y: mousePosition.y - 32,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ type: 'spring', stiffness: 500, damping: 28 }}
        >
          <Maximize2 className="w-8 h-8 text-black" />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default HoverCard
