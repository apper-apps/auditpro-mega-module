import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import StatCard from '@/components/molecules/StatCard'
import ScoreRing from '@/components/atoms/ScoreRing'
import Button from '@/components/atoms/Button'
import ApperIcon from '@/components/ApperIcon'
import Loading from '@/components/ui/Loading'
import Error from '@/components/ui/Error'
import Empty from '@/components/ui/Empty'
import { auditService } from '@/services/api/auditService'

const Dashboard = () => {
  const [audits, setAudits] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const navigate = useNavigate()
  
const loadAudits = async () => {
    try {
      setLoading(true)
      setError('')
      const data = await auditService.getAll()
      setAudits(data)
    } catch (err) {
      console.error('Error loading audits:', err)
      
      // Enhanced error handling
      let errorMessage
      if (err.message?.includes('Network')) {
        errorMessage = 'Connection error. Please check your internet connection.'
      } else if (err.message?.includes('timeout')) {
        errorMessage = 'Request timed out. Please try again.'
      } else {
        errorMessage = 'Failed to load audits. Please try again.'
      }
      
      setError(errorMessage)
    } finally {
      setLoading(false)
    }
  }
  
  useEffect(() => {
    loadAudits()
  }, [])
  
const handleCreateAudit = () => {
    navigate('/audit/new')
  }
  
  const handleViewAudit = (auditId) => {
    navigate(`/audit/${auditId}`)
  }
  
  if (loading) return <Loading type="dashboard" />
  if (error) return <Error message={error} onRetry={loadAudits} />
  
  const recentAudits = audits.slice(0, 5)
  const averageScore = audits.length > 0 
    ? Math.round(audits.reduce((sum, audit) => sum + audit.overallScore, 0) / audits.length)
    : 0
  
  const totalIssues = audits.reduce((sum, audit) => sum + audit.issues.length, 0)
  const criticalIssues = audits.reduce((sum, audit) => 
    sum + audit.issues.filter(issue => issue.severity === 'critical').length, 0
  )
  
  const pageTypeDistribution = audits.reduce((acc, audit) => {
    acc[audit.pageType] = (acc[audit.pageType] || 0) + 1
    return acc
  }, {})
  
  const stats = [
    {
      title: 'Total Audits',
      value: audits.length.toString(),
      change: '+12%',
      changeType: 'positive',
      icon: 'FileText',
      trend: [65, 70, 68, 75, 72, 80, 85]
    },
    {
      title: 'Average Score',
      value: `${averageScore}/100`,
      change: '+5.2%',
      changeType: 'positive',
      icon: 'Target',
      trend: [60, 65, 63, 70, 68, 75, averageScore]
    },
    {
      title: 'Issues Found',
      value: totalIssues.toString(),
      change: '-8%',
      changeType: 'positive',
      icon: 'AlertTriangle',
      trend: [120, 115, 110, 105, 100, 95, totalIssues]
    },
    {
      title: 'Critical Issues',
      value: criticalIssues.toString(),
      change: '-15%',
      changeType: 'positive',
      icon: 'AlertCircle',
      trend: [25, 22, 20, 18, 15, 12, criticalIssues]
    }
  ]
  
  return (
    <div className="p-6 space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={stat.title} {...stat} index={index} />
        ))}
      </div>
      
      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Audits */}
        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-card shadow-card p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Recent Audits</h2>
              <Button 
                variant="secondary" 
                size="sm" 
                icon="Plus"
                onClick={handleCreateAudit}
              >
                New Audit
              </Button>
            </div>
            
            {recentAudits.length === 0 ? (
              <Empty 
                title="No audits yet"
                description="Create your first audit to get started with UX analysis"
                actionText="Create Audit"
                onAction={handleCreateAudit}
                icon="FileText"
              />
            ) : (
              <div className="space-y-4">
                {recentAudits.map((audit, index) => (
                  <motion.div
                    key={audit.Id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                    onClick={() => handleViewAudit(audit.Id)}
                  >
                    <div className="flex-shrink-0">
                      <ScoreRing score={audit.overallScore} size="sm" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-gray-900 truncate">
                        {audit.storeUrl}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {audit.pageType} • {audit.issues.length} issues found
                      </p>
                      <p className="text-xs text-gray-500">
                        {new Date(audit.timestamp).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        audit.overallScore >= 80 ? 'bg-green-100 text-green-800' :
                        audit.overallScore >= 60 ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {audit.overallScore >= 80 ? 'Good' :
                         audit.overallScore >= 60 ? 'Fair' : 'Poor'}
                      </span>
                      <ApperIcon name="ChevronRight" className="w-4 h-4 text-gray-400" />
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
        
        {/* Score Summary & Quick Actions */}
        <div className="space-y-6">
          {/* Overall Score */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-card shadow-card p-6 text-center"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Overall Score</h3>
            <ScoreRing score={averageScore} size="xl" label="average" />
            <p className="text-sm text-gray-600 mt-4">
              Based on {audits.length} audit{audits.length !== 1 ? 's' : ''}
            </p>
          </motion.div>
          
          {/* Page Type Distribution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-card shadow-card p-6"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Page Types</h3>
            <div className="space-y-3">
              {Object.entries(pageTypeDistribution).map(([type, count]) => (
                <div key={type} className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700 capitalize">{type}</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-24 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-teal-500 to-teal-600 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${(count / audits.length) * 100}%` }}
                      />
                    </div>
                    <span className="text-sm text-gray-600 w-8 text-right">{count}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-white rounded-card shadow-card p-6"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <Button 
                className="w-full justify-start" 
                variant="ghost" 
                icon="Plus"
                onClick={handleCreateAudit}
              >
                Create New Audit
              </Button>
              <Button 
                className="w-full justify-start" 
                variant="ghost" 
                icon="Download"
                onClick={() => navigate('/reports')}
              >
                Export Reports
              </Button>
              <Button 
                className="w-full justify-start" 
                variant="ghost" 
                icon="Target"
                onClick={() => navigate('/benchmarks')}
              >
                View Benchmarks
              </Button>
              <Button 
                className="w-full justify-start" 
                variant="ghost" 
                icon="Settings"
                onClick={() => navigate('/settings')}
              >
                Settings
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard