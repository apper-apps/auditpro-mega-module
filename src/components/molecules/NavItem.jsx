import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import ApperIcon from '@/components/ApperIcon'

const NavItem = ({ to, icon, children, badge }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 group ${
          isActive
            ? 'bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-lg'
            : 'text-navy-700 hover:bg-navy-50 hover:text-navy-900'
        }`
      }
    >
      {({ isActive }) => (
        <motion.div
          whileHover={{ x: 2 }}
          className="flex items-center w-full"
        >
          <ApperIcon 
            name={icon} 
            className={`w-5 h-5 mr-3 transition-colors ${
              isActive ? 'text-white' : 'text-navy-500 group-hover:text-navy-700'
            }`} 
          />
          <span className="flex-1">{children}</span>
          {badge && (
            <span className={`ml-2 px-2 py-1 text-xs font-medium rounded-full ${
              isActive 
                ? 'bg-white bg-opacity-20 text-white' 
                : 'bg-teal-100 text-teal-800'
            }`}>
              {badge}
            </span>
          )}
        </motion.div>
      )}
    </NavLink>
  )
}

export default NavItem