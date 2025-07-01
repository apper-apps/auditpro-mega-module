import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { toast } from 'react-toastify'
import Button from '@/components/atoms/Button'
import Badge from '@/components/atoms/Badge'
import ScoreRing from '@/components/atoms/ScoreRing'
import ApperIcon from '@/components/ApperIcon'
import Loading from '@/components/ui/Loading'
import Error from '@/components/ui/Error'
import Empty from '@/components/ui/Empty'
import { auditService } from '@/services/api/auditService'

const Reports = () => {
  const [audits, setAudits] = useState([])
  const [selectedAudits, setSelectedAudits] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [filterType, setFilterType] = useState('all')
  const [sortBy, setSortBy] = useState('date')
  
  const loadAudits = async () => {
    try {
      setLoading(true)
      setError('')
      const data = await auditService.getAll()
      setAudits(data)
    } catch (err) {
      setError('Failed to load audits')
      console.error('Error loading audits:', err)
    } finally {
      setLoading(false)
    }
  }
  
  useEffect(() => {
    loadAudits()
  }, [])
  
  const handleSelectAudit = (auditId) => {
    setSelectedAudits(prev => 
      prev.includes(auditId) 
        ? prev.filter(id => id !== auditId)
        : [...prev, auditId]
    )
  }
  
  const handleSelectAll = () => {
    if (selectedAudits.length === filteredAudits.length) {
      setSelectedAudits([])
    } else {
      setSelectedAudits(filteredAudits.map(audit => audit.Id))
    }
  }
  
  const handleExportSelected = () => {
    if (selectedAudits.length === 0) {
      toast.warning('Please select at least one audit to export')
      return
    }
    toast.success(`Exporting ${selectedAudits.length} audit${selectedAudits.length > 1 ? 's' : ''} to PDF...`)
  }
  
  const handleExportAll = () => {
    toast.success(`Exporting all ${audits.length} audits to PDF...`)
  }
  
  if (loading) return <Loading />
  if (error) return <Error message={error} onRetry={loadAudits} />
  
  // Filter and sort audits
  const filteredAudits = audits
    .filter(audit => filterType === 'all' || audit.pageType === filterType)
    .sort((a, b) => {
      switch (sortBy) {
        case 'date':
          return new Date(b.timestamp) - new Date(a.timestamp)
        case 'score':
          return b.overallScore - a.overallScore
        case 'issues':
          return b.issues.length - a.issues.length
        case 'name':
          return a.storeUrl.localeCompare(b.storeUrl)
        default:
          return 0
      }
    })
  
  const pageTypes = [...new Set(audits.map(audit => audit.pageType))]
  
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-card shadow-card p-6"
      >
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold gradient-text mb-2">Export Reports</h1>
            <p className="text-gray-600">
              Generate and download professional PDF reports for your audits
            </p>
          </div>
          
          <div className="flex items-center space-x-3">
            <Button
              variant="secondary"
              icon="Download"
              onClick={handleExportAll}
              disabled={audits.length === 0}
            >
              Export All
            </Button>
            <Button
              icon="Download"
              onClick={handleExportSelected}
              disabled={selectedAudits.length === 0}
            >
              Export Selected ({selectedAudits.length})
            </Button>
          </div>
        </div>
      </motion.div>
      
      {/* Filters and Controls */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-card shadow-card p-6"
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center space-x-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Filter by Type
              </label>
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-teal-500 focus:border-teal-500 rounded-md"
              >
                <option value="all">All Types</option>
                {pageTypes.map(type => (
                  <option key={type} value={type} className="capitalize">{type}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Sort by
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-teal-500 focus:border-teal-500 rounded-md"
              >
                <option value="date">Date</option>
                <option value="score">Score</option>
                <option value="issues">Issues</option>
                <option value="name">Name</option>
              </select>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">
              {filteredAudits.length} audit{filteredAudits.length !== 1 ? 's' : ''}
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleSelectAll}
            >
              {selectedAudits.length === filteredAudits.length ? 'Deselect All' : 'Select All'}
            </Button>
          </div>
        </div>
      </motion.div>
      
      {/* Audits List */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-card shadow-card"
      >
        {filteredAudits.length === 0 ? (
          <div className="p-6">
            <Empty 
              title="No audits found"
              description="No audits match your current filters. Try adjusting your search criteria."
              icon="FileText"
            />
          </div>
        ) : (
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    <input
                      type="checkbox"
                      checked={selectedAudits.length === filteredAudits.length && filteredAudits.length > 0}
                      onChange={handleSelectAll}
                      className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                    />
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Store
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Score
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Issues
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredAudits.map((audit, index) => (
                  <motion.tr
                    key={audit.Id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`hover:bg-gray-50 transition-colors ${
                      selectedAudits.includes(audit.Id) ? 'bg-teal-50' : ''
                    }`}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <input
                        type="checkbox"
                        checked={selectedAudits.includes(audit.Id)}
                        onChange={() => handleSelectAudit(audit.Id)}
                        className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {audit.storeUrl}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Badge variant="info" size="sm" className="capitalize">
                        {audit.pageType}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-2">
                        <ScoreRing score={audit.overallScore} size="sm" />
                        <span className="text-sm font-medium text-gray-900">
                          {audit.overallScore}/100
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-900">{audit.issues.length}</span>
                        <div className="flex space-x-1">
                          {audit.issues.filter(i => i.severity === 'critical').length > 0 && (
                            <div className="w-2 h-2 bg-red-500 rounded-full" title="Critical issues" />
                          )}
                          {audit.issues.filter(i => i.severity === 'high').length > 0 && (
                            <div className="w-2 h-2 bg-orange-500 rounded-full" title="High issues" />
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(audit.timestamp).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          icon="Download"
                          onClick={() => {
                            setSelectedAudits([audit.Id])
                            handleExportSelected()
                          }}
                        >
                          Export
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          icon="Eye"
                          onClick={() => window.open(`/audit/${audit.Id}`, '_blank')}
                        >
                          View
                        </Button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </motion.div>
    </div>
  )
}

export default Reports