import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'

const StatCard = ({ 
  title, 
  value, 
  change, 
  changeType = 'positive', 
  icon, 
  trend,
  className = '',
  index = 0 
}) => {
  const changeColors = {
    positive: 'text-green-600 bg-green-50',
    negative: 'text-red-600 bg-red-50',
    neutral: 'text-gray-600 bg-gray-50'
  }
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -2, scale: 1.02 }}
      className={`bg-white rounded-card shadow-card hover:shadow-card-hover p-6 transition-all duration-200 ${className}`}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          {icon && (
            <div className="w-10 h-10 bg-gradient-to-r from-teal-100 to-teal-200 rounded-lg flex items-center justify-center">
              <ApperIcon name={icon} className="w-5 h-5 text-teal-600" />
            </div>
          )}
          <h3 className="text-sm font-medium text-gray-600">{title}</h3>
        </div>
        
        {trend && (
          <div className="w-16 h-8">
            <svg viewBox="0 0 64 32" className="w-full h-full">
              <polyline
                points={trend.map((point, i) => `${(i / (trend.length - 1)) * 64},${32 - (point / Math.max(...trend)) * 32}`).join(' ')}
                className="sparkline"
              />
            </svg>
          </div>
        )}
      </div>
      
      <div className="flex items-end justify-between">
        <div>
          <motion.p
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 + 0.2 }}
            className="text-3xl font-bold gradient-text"
          >
            {value}
          </motion.p>
          
          {change && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium mt-2 ${changeColors[changeType]}`}
            >
              <ApperIcon 
                name={changeType === 'positive' ? 'TrendingUp' : changeType === 'negative' ? 'TrendingDown' : 'Minus'} 
                className="w-3 h-3 mr-1" 
              />
              {change}
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default StatCard