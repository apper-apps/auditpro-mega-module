import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'
import Badge from '@/components/atoms/Badge'

const RecommendationCard = ({ recommendation, index = 0 }) => {
  const priorityConfig = {
    1: { color: 'critical', label: 'Critical' },
    2: { color: 'high', label: 'High' },
    3: { color: 'medium', label: 'Medium' },
    4: { color: 'low', label: 'Low' }
  }
  
  const config = priorityConfig[recommendation.priority] || priorityConfig[3]
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-card shadow-card hover:shadow-card-hover p-6 transition-all duration-200"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-teal-100 to-teal-200 rounded-lg flex items-center justify-center">
            <ApperIcon name="Lightbulb" className="w-4 h-4 text-teal-600" />
          </div>
          <h3 className="font-semibold text-gray-900">Recommendation #{index + 1}</h3>
        </div>
        <Badge variant={config.color} size="sm">
          {config.label}
        </Badge>
      </div>
      
      <div className="space-y-4">
        <div>
          <h4 className="font-medium text-gray-900 mb-2 flex items-center">
            <ApperIcon name="AlertTriangle" className="w-4 h-4 mr-2 text-orange-500" />
            Problem Statement
          </h4>
          <ul className="space-y-1">
            {recommendation.problem.map((item, i) => (
              <li key={i} className="text-sm text-gray-700 flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-medium text-gray-900 mb-2 flex items-center">
            <ApperIcon name="Settings" className="w-4 h-4 mr-2 text-blue-500" />
            Solutions
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h5 className="text-sm font-medium text-gray-800 mb-1">Copywriting</h5>
              <ul className="space-y-1">
                {recommendation.solutions.copywriting?.map((item, i) => (
                  <li key={i} className="text-sm text-gray-700 flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="text-sm font-medium text-gray-800 mb-1">UI/UX Layout</h5>
              <ul className="space-y-1">
                {recommendation.solutions.uiux?.map((item, i) => (
                  <li key={i} className="text-sm text-gray-700 flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="font-medium text-gray-900 mb-2 flex items-center">
            <ApperIcon name="TrendingUp" className="w-4 h-4 mr-2 text-green-500" />
            Estimated Impact
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(recommendation.estimatedImpact).map(([key, value]) => (
              <div key={key} className="text-center p-3 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                <p className="font-semibold text-green-600">{value}</p>
              </div>
            ))}
          </div>
        </div>
        
        {recommendation.resources && recommendation.resources.length > 0 && (
          <div>
            <h4 className="font-medium text-gray-900 mb-2 flex items-center">
              <ApperIcon name="BookOpen" className="w-4 h-4 mr-2 text-purple-500" />
              Resources
            </h4>
            <div className="flex flex-wrap gap-2">
              {recommendation.resources.map((resource, i) => (
                <motion.a
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  href="#"
                  className="inline-flex items-center px-3 py-1 text-sm text-purple-600 bg-purple-50 rounded-full hover:bg-purple-100 transition-colors"
                >
                  <ApperIcon name="ExternalLink" className="w-3 h-3 mr-1" />
                  {resource}
                </motion.a>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default RecommendationCard