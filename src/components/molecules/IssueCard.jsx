import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { toast } from 'react-toastify'
import ApperIcon from '@/components/ApperIcon'
import Badge from '@/components/atoms/Badge'
const IssueCard = ({ issue, index = 0 }) => {
const [isExpanded, setIsExpanded] = useState(false)
  const [showDetailModal, setShowDetailModal] = useState(false)
  
  const severityConfig = {
    critical: { color: 'critical', icon: 'AlertTriangle' },
    high: { color: 'high', icon: 'AlertCircle' },
    medium: { color: 'medium', icon: 'Info' },
    low: { color: 'low', icon: 'CheckCircle' }
  }
  
  const config = severityConfig[issue.severity] || severityConfig.medium
  
  const handleViewDetails = (issueData) => {
    setShowDetailModal(true)
    toast.info(`Viewing detailed information for: ${issueData.title}`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    })
  }
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
                    onClick={() => handleViewDetails(issue)}
                    className="text-sm text-teal-600 hover:text-teal-700 font-medium flex items-center space-x-1 transition-colors"
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
      
      {/* Issue Detail Modal */}
      <AnimatePresence>
        {showDetailModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setShowDetailModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-card shadow-modal max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                {/* Modal Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      issue.severity === 'critical' ? 'bg-red-100' :
                      issue.severity === 'high' ? 'bg-orange-100' :
                      issue.severity === 'medium' ? 'bg-yellow-100' :
                      'bg-green-100'
                    }`}>
                      <ApperIcon 
                        name={config.icon} 
                        className={`w-5 h-5 ${
                          issue.severity === 'critical' ? 'text-red-600' :
                          issue.severity === 'high' ? 'text-orange-600' :
                          issue.severity === 'medium' ? 'text-yellow-600' :
                          'text-green-600'
                        }`} 
                      />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900">{issue.title}</h2>
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge variant={config.color} size="sm">
                          {issue.severity}
                        </Badge>
                        <span className="text-sm text-gray-500">{issue.category}</span>
                      </div>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowDetailModal(false)}
                    className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <ApperIcon name="X" className="w-5 h-5" />
                  </motion.button>
                </div>
                
                {/* Modal Content */}
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Issue Description</h3>
                    <p className="text-gray-700 leading-relaxed">{issue.description}</p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-medium text-gray-900 mb-2">Location Details</h3>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-sm text-gray-600 font-mono">
                          {issue.location?.selector || 'General page issue'}
                        </p>
                        {issue.location?.x !== undefined && issue.location?.y !== undefined && (
                          <p className="text-xs text-gray-500 mt-1">
                            Position: {issue.location.x}%, {issue.location.y}%
                          </p>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-medium text-gray-900 mb-2">Guideline Reference</h3>
                      <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-sm text-gray-600">{issue.guidelineRef}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-gray-900 mb-2">Impact Assessment</h3>
                    <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg p-4">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-teal-600">
                            {issue.severity === 'critical' ? 'High' : 
                             issue.severity === 'high' ? 'Medium' : 
                             issue.severity === 'medium' ? 'Low' : 'Minimal'}
                          </div>
                          <div className="text-sm text-gray-600">User Impact</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-blue-600">
                            {issue.severity === 'critical' ? '1-2' : 
                             issue.severity === 'high' ? '3-5' : 
                             issue.severity === 'medium' ? '5-10' : '10+'}
                          </div>
                          <div className="text-sm text-gray-600">Days to Fix</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-purple-600">
                            {issue.severity === 'critical' ? 'High' : 
                             issue.severity === 'high' ? 'Medium' : 
                             issue.severity === 'medium' ? 'Low' : 'Low'}
                          </div>
                          <div className="text-sm text-gray-600">Priority</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <ApperIcon name="Clock" className="w-4 h-4" />
                      <span>Found {new Date(issue.timestamp).toLocaleDateString()}</span>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                          toast.success('Issue details copied to clipboard')
                          navigator.clipboard.writeText(`${issue.title}\n\n${issue.description}\n\nLocation: ${issue.location?.selector}\nSeverity: ${issue.severity}\nGuideline: ${issue.guidelineRef}`)
                        }}
                        className="text-sm text-gray-600 hover:text-gray-800 font-medium flex items-center space-x-1 transition-colors"
                      >
                        <ApperIcon name="Copy" className="w-4 h-4" />
                        <span>Copy Details</span>
                      </motion.button>
                      
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setShowDetailModal(false)}
                        className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 font-medium transition-colors"
                      >
                        Close
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default IssueCard