import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import ApperIcon from '@/components/ApperIcon'
import NavItem from '@/components/molecules/NavItem'

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation()
  
  const navigationItems = [
    { to: '/', icon: 'BarChart3', label: 'Dashboard' },
    { to: '/reports', icon: 'FileText', label: 'Reports', badge: '3' },
    { to: '/benchmarks', icon: 'Target', label: 'Benchmarks' },
    { to: '/settings', icon: 'Settings', label: 'Settings' }
  ]
  
  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
        />
      )}
      
      {/* Sidebar */}
      <motion.div
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        className={`
          fixed md:static inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 flex flex-col
          sidebar-nav ${isOpen ? 'open' : ''}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl flex items-center justify-center">
              <ApperIcon name="Zap" className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold gradient-text">AuditPro</h1>
              <p className="text-xs text-gray-500">UX Analytics</p>
            </div>
          </div>
          
          <button
            onClick={onClose}
            className="md:hidden p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-50"
          >
            <ApperIcon name="X" className="w-5 h-5" />
          </button>
        </div>
        
        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {navigationItems.map((item) => (
            <NavItem
              key={item.to}
              to={item.to}
              icon={item.icon}
              badge={item.badge}
            >
              {item.label}
            </NavItem>
          ))}
          
          <div className="pt-4 mt-4 border-t border-gray-200">
            <p className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">
              Quick Actions
            </p>
            <div className="space-y-2">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center px-4 py-3 text-sm font-medium text-white gradient-button rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <ApperIcon name="Plus" className="w-4 h-4 mr-3" />
                New Audit
              </motion.button>
              
              <button className="w-full flex items-center px-4 py-3 text-sm font-medium text-navy-700 hover:bg-navy-50 rounded-lg transition-colors">
                <ApperIcon name="Download" className="w-4 h-4 mr-3" />
                Export Reports
              </button>
            </div>
          </div>
        </nav>
        
        {/* Footer */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <div className="w-8 h-8 bg-gradient-to-r from-navy-500 to-navy-600 rounded-full flex items-center justify-center">
              <ApperIcon name="User" className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">CRO Consultant</p>
              <p className="text-xs text-gray-500 truncate">Professional Plan</p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default Sidebar