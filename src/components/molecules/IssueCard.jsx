import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'
import Badge from '@/components/atoms/Badge'

const IssueCard = ({ issue, index = 0 }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  
  const severityConfig = {
    critical: { color: 'critical', icon: 'AlertTriangle' },
    high: { color: 'high', icon: 'AlertCircle' },
    medium: { color: 'medium', icon: 'Info' },
    low: { color: 'low', icon: 'CheckCircle' }
  }
  
  const config = severityConfig[issue.severity] || severityConfig.medium
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-card shadow-card hover:shadow-card-hover issue-card"
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3 flex-1">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
              issue.severity === 'critical' ? 'bg-red-100' :
              issue.severity === 'high' ? 'bg-orange-100' :
              issue.severity === 'medium' ? 'bg-yellow-100' :
              'bg-green-100'
            }`}>
              <ApperIcon 
                name={config.icon} 
                className={`w-4 h-4 ${
                  issue.severity === 'critical' ? 'text-red-600' :
                  issue.severity === 'high' ? 'text-orange-600' :
                  issue.severity === 'medium' ? 'text-yellow-600' :
                  'text-green-600'
                }`} 
              />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-1">{issue.title}</h3>
              <p className="text-sm text-gray-600">{issue.category}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Badge variant={config.color} size="sm">
              {issue.severity}
            </Badge>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <ApperIcon 
                name={isExpanded ? 'ChevronUp' : 'ChevronDown'} 
                className="w-4 h-4" 
              />
            </motion.button>
          </div>
        </div>
        
        <p className="text-gray-700 mb-4">{issue.description}</p>
        
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="border-t pt-4 mt-4"
            >
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Location</h4>
                  <p className="text-sm text-gray-600">
                    {issue.location?.selector || 'General page issue'}
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Guideline Reference</h4>
                  <p className="text-sm text-gray-600">{issue.guidelineRef}</p>
                </div>
                
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <ApperIcon name="Clock" className="w-4 h-4" />
                    <span>Found {new Date(issue.timestamp).toLocaleDateString()}</span>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-sm text-teal-600 hover:text-teal-700 font-medium flex items-center space-x-1"
                  >
                    <ApperIcon name="ExternalLink" className="w-3 h-3" />
                    <span>View Details</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default IssueCard