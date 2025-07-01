import { motion } from 'framer-motion'

const ScoreRing = ({ score, size = 'md', label, className = '' }) => {
  const sizes = {
    sm: { width: 60, height: 60, strokeWidth: 4, fontSize: 'text-sm' },
    md: { width: 80, height: 80, strokeWidth: 6, fontSize: 'text-lg' },
    lg: { width: 120, height: 120, strokeWidth: 8, fontSize: 'text-2xl' },
    xl: { width: 160, height: 160, strokeWidth: 10, fontSize: 'text-3xl' }
  }
  
  const { width, height, strokeWidth, fontSize } = sizes[size]
  const radius = (width - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const strokeDasharray = circumference
  const strokeDashoffset = circumference - (score / 100) * circumference
  
  const getScoreColor = (score) => {
    if (score >= 80) return '#10b981'
    if (score >= 60) return '#f59e0b'
    return '#ef4444'
  }
  
  return (
    <div className={`relative ${className}`}>
      <svg width={width} height={height} className="transform -rotate-90">
        {/* Background circle */}
        <circle
          cx={width / 2}
          cy={height / 2}
          r={radius}
          stroke="#e5e7eb"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        
        {/* Progress circle */}
        <motion.circle
          cx={width / 2}
          cy={height / 2}
          r={radius}
          stroke={getScoreColor(score)}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeLinecap="round"
          strokeDasharray={strokeDasharray}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="score-ring"
        />
      </svg>
      
      {/* Score text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className={`font-bold ${fontSize} gradient-text`}
        >
          {score}
        </motion.span>
        {label && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-xs text-gray-600 mt-1"
          >
            {label}
          </motion.span>
        )}
      </div>
    </div>
  )
}

export default ScoreRing