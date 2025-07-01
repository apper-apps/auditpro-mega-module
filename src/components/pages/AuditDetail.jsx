import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { toast } from 'react-toastify'
import ScoreRing from '@/components/atoms/ScoreRing'
import Badge from '@/components/atoms/Badge'
import Button from '@/components/atoms/Button'
import IssueCard from '@/components/molecules/IssueCard'
import RecommendationCard from '@/components/molecules/RecommendationCard'
import ApperIcon from '@/components/ApperIcon'
import Loading from '@/components/ui/Loading'
import Error from '@/components/ui/Error'
import { auditService } from '@/services/api/auditService'

const AuditDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [audit, setAudit] = useState(null)
  const [activeTab, setActiveTab] = useState('issues')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  
  const loadAudit = async () => {
    try {
      setLoading(true)
      setError('')
      const data = await auditService.getById(parseInt(id))
      setAudit(data)
    } catch (err) {
      setError('Failed to load audit details')
      console.error('Error loading audit:', err)
    } finally {
      setLoading(false)
    }
  }
  
  useEffect(() => {
    loadAudit()
  }, [id])
  
  const handleExportPDF = () => {
    toast.success('PDF export started! You will receive a download link shortly.')
  }
  
  const handleDeleteAudit = async () => {
    if (window.confirm('Are you sure you want to delete this audit?')) {
      try {
        await auditService.delete(parseInt(id))
        toast.success('Audit deleted successfully')
        navigate('/')
      } catch (err) {
        toast.error('Failed to delete audit')
      }
    }
  }
  
  if (loading) return <Loading type="audit" />
  if (error) return <Error message={error} onRetry={loadAudit} />
  if (!audit) return <Error message="Audit not found" />
  
  const tabs = [
    { id: 'issues', label: 'Issues', count: audit.issues.length, icon: 'AlertTriangle' },
    { id: 'recommendations', label: 'Recommendations', count: audit.recommendations.length, icon: 'Lightbulb' },
    { id: 'screenshots', label: 'Screenshots', count: audit.screenshots.length, icon: 'Camera' }
  ]
  
  const issuesBySeverity = audit.issues.reduce((acc, issue) => {
    acc[issue.severity] = (acc[issue.severity] || 0) + 1
    return acc
  }, {})
  
  return (
    <div className="p-6 space-y-6">
      {/* Audit Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-card shadow-card p-6"
      >
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-2">
              <Button
                variant="ghost"
                size="sm"
                icon="ArrowLeft"
                onClick={() => navigate('/')}
              >
                Back
              </Button>
              <Badge variant="info" size="sm">
                {audit.pageType}
              </Badge>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{audit.storeUrl}</h1>
            <p className="text-gray-600">
              Analyzed on {new Date(audit.timestamp).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </p>
            
            {/* Issue Summary */}
            <div className="flex items-center space-x-4 mt-4">
              {Object.entries(issuesBySeverity).map(([severity, count]) => (
                <div key={severity} className="flex items-center space-x-1">
                  <div className={`w-3 h-3 rounded-full ${
                    severity === 'critical' ? 'bg-red-500' :
                    severity === 'high' ? 'bg-orange-500' :
                    severity === 'medium' ? 'bg-yellow-500' :
                    'bg-green-500'
                  }`} />
                  <span className="text-sm text-gray-600">
                    {count} {severity}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <ScoreRing score={audit.overallScore} size="lg" label="overall" />
            <div className="flex flex-col sm:flex-row gap-2">
              <Button
                icon="Download"
                onClick={handleExportPDF}
              >
                Export PDF
              </Button>
              <Button
                variant="danger"
                icon="Trash2"
                onClick={handleDeleteAudit}
              >
                Delete
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-card shadow-card"
      >
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6" aria-label="Tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-teal-500 text-teal-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <ApperIcon name={tab.icon} className="w-4 h-4" />
                  <span>{tab.label}</span>
                  <Badge variant="default" size="sm">
                    {tab.count}
                  </Badge>
                </div>
              </button>
            ))}
          </nav>
        </div>
        
        <div className="p-6">
          {activeTab === 'issues' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-4"
            >
              {audit.issues.length === 0 ? (
                <div className="text-center py-12">
                  <ApperIcon name="CheckCircle" className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No Issues Found</h3>
                  <p className="text-gray-600">This page passed all UX guidelines!</p>
                </div>
              ) : (
                audit.issues.map((issue, index) => (
                  <IssueCard key={issue.Id} issue={issue} index={index} />
                ))
              )}
            </motion.div>
          )}
          
          {activeTab === 'recommendations' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-6"
            >
              {audit.recommendations.length === 0 ? (
                <div className="text-center py-12">
                  <ApperIcon name="Lightbulb" className="w-16 h-16 text-teal-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No Recommendations</h3>
                  <p className="text-gray-600">All issues have been addressed!</p>
                </div>
              ) : (
                audit.recommendations.map((recommendation, index) => (
                  <RecommendationCard 
                    key={recommendation.Id} 
                    recommendation={recommendation} 
                    index={index} 
                  />
                ))
              )}
            </motion.div>
          )}
          
          {activeTab === 'screenshots' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {audit.screenshots.length === 0 ? (
                <div className="col-span-full text-center py-12">
                  <ApperIcon name="Camera" className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No Screenshots</h3>
                  <p className="text-gray-600">Screenshots will appear here when available.</p>
                </div>
              ) : (
                audit.screenshots.map((screenshot, index) => (
                  <motion.div
                    key={screenshot.Id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <h4 className="font-medium text-gray-900 mb-2 capitalize">
                      {screenshot.pageSection}
                    </h4>
                    <div className="relative bg-white rounded border overflow-hidden screenshot-viewer">
                      <img 
                        src={screenshot.url} 
                        alt={`${screenshot.pageSection} screenshot`}
                        className="w-full h-auto"
                        loading="lazy"
                      />
                      {screenshot.annotations.map((annotation, i) => (
                        <div
                          key={i}
                          className="annotation-overlay"
                          style={{
                            left: `${annotation.x}%`,
                            top: `${annotation.y}%`,
                            width: `${annotation.width}%`,
                            height: `${annotation.height}%`
                          }}
                        >
                          <div className="annotation-number">
                            {i + 1}
                          </div>
                        </div>
                      ))}
                    </div>
                    {screenshot.annotations.length > 0 && (
                      <div className="mt-3 space-y-2">
                        {screenshot.annotations.map((annotation, i) => (
                          <div key={i} className="flex items-start space-x-2 text-sm">
                            <div className="w-5 h-5 bg-teal-500 text-white rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0 mt-0.5">
                              {i + 1}
                            </div>
                            <p className="text-gray-700">{annotation.text}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))
              )}
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  )
}

export default AuditDetail