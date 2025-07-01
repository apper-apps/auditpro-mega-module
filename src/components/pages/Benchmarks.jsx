import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import StatCard from '@/components/molecules/StatCard'
import ScoreRing from '@/components/atoms/ScoreRing'
import Badge from '@/components/atoms/Badge'
import ApperIcon from '@/components/ApperIcon'
import Loading from '@/components/ui/Loading'
import Error from '@/components/ui/Error'
import { auditService } from '@/services/api/auditService'
import { benchmarkService } from '@/services/api/benchmarkService'

const Benchmarks = () => {
  const [audits, setAudits] = useState([])
  const [benchmarks, setBenchmarks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [selectedIndustry, setSelectedIndustry] = useState('all')
  const [selectedMetric, setSelectedMetric] = useState('overall')
  
  const loadData = async () => {
    try {
      setLoading(true)
      setError('')
      const [auditData, benchmarkData] = await Promise.all([
        auditService.getAll(),
        benchmarkService.getAll()
      ])
      setAudits(auditData)
      setBenchmarks(benchmarkData)
    } catch (err) {
      setError('Failed to load benchmark data')
      console.error('Error loading data:', err)
    } finally {
      setLoading(false)
    }
  }
  
  useEffect(() => {
    loadData()
  }, [])
  
  if (loading) return <Loading />
  if (error) return <Error message={error} onRetry={loadData} />
  
  // Calculate your performance metrics
  const yourMetrics = {
    overall: audits.length > 0 ? Math.round(audits.reduce((sum, audit) => sum + audit.overallScore, 0) / audits.length) : 0,
    homepage: audits.filter(a => a.pageType === 'homepage').reduce((sum, audit) => sum + audit.overallScore, 0) / Math.max(1, audits.filter(a => a.pageType === 'homepage').length),
    product: audits.filter(a => a.pageType === 'product').reduce((sum, audit) => sum + audit.overallScore, 0) / Math.max(1, audits.filter(a => a.pageType === 'product').length),
    cart: audits.filter(a => a.pageType === 'cart').reduce((sum, audit) => sum + audit.overallScore, 0) / Math.max(1, audits.filter(a => a.pageType === 'cart').length)
  }
  
  // Get industry benchmarks
  const industryBenchmarks = benchmarks.filter(b => 
    selectedIndustry === 'all' || b.industry === selectedIndustry
  )
  
  const industries = [...new Set(benchmarks.map(b => b.industry))]
  
  const comparisonData = [
    {
      metric: 'Overall Score',
      your: Math.round(yourMetrics.overall),
      industry: 72,
      topPerformers: 85,
      change: '+5.2%'
    },
    {
      metric: 'Homepage UX',
      your: Math.round(yourMetrics.homepage || 0),
      industry: 68,
      topPerformers: 82,
      change: '+3.1%'
    },
    {
      metric: 'Product Pages',
      your: Math.round(yourMetrics.product || 0),
      industry: 75,
      topPerformers: 88,
      change: '+7.3%'
    },
    {
      metric: 'Cart Experience',
      your: Math.round(yourMetrics.cart || 0),
      industry: 70,
      topPerformers: 86,
      change: '+2.8%'
    }
  ]
  
  const performanceInsights = [
    {
      title: 'Above Industry Average',
      value: comparisonData.filter(d => d.your > d.industry).length,
      total: comparisonData.length,
      icon: 'TrendingUp',
      color: 'success'
    },
    {
      title: 'Areas for Improvement',
      value: comparisonData.filter(d => d.your < d.topPerformers).length,
      total: comparisonData.length,
      icon: 'Target',
      color: 'warning'
    },
    {
      title: 'Competitive Gap',
      value: Math.round(85 - yourMetrics.overall),
      total: 100,
      icon: 'Gap',
      color: 'info'
    }
  ]
  
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
            <h1 className="text-2xl font-bold gradient-text mb-2">Performance Benchmarks</h1>
            <p className="text-gray-600">
              Compare your UX performance against industry standards and top performers
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Industry
              </label>
              <select
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
                className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-teal-500 focus:border-teal-500 rounded-md"
              >
                <option value="all">All Industries</option>
                {industries.map(industry => (
                  <option key={industry} value={industry} className="capitalize">
                    {industry}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Performance Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {performanceInsights.map((insight, index) => (
          <StatCard
            key={insight.title}
            title={insight.title}
            value={`${insight.value}/${insight.total}`}
            icon={insight.icon}
            index={index}
            className={
              insight.color === 'success' ? 'border-l-4 border-green-500' :
              insight.color === 'warning' ? 'border-l-4 border-yellow-500' :
              'border-l-4 border-blue-500'
            }
          />
        ))}
      </div>
      
      {/* Detailed Comparison */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-card shadow-card p-6"
      >
        <h2 className="text-xl font-bold text-gray-900 mb-6">Detailed Performance Comparison</h2>
        
        <div className="space-y-6">
          {comparisonData.map((item, index) => (
            <motion.div
              key={item.metric}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="border rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.metric}</h3>
                  
                  <div className="space-y-3">
                    {/* Your Score */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Your Score</span>
                      <div className="flex items-center space-x-3">
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-teal-500 to-teal-600 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${item.your}%` }}
                          />
                        </div>
                        <span className="text-sm font-semibold text-gray-900 w-12 text-right">
                          {item.your}
                        </span>
                      </div>
                    </div>
                    
                    {/* Industry Average */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Industry Average</span>
                      <div className="flex items-center space-x-3">
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-gray-400 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${item.industry}%` }}
                          />
                        </div>
                        <span className="text-sm font-semibold text-gray-900 w-12 text-right">
                          {item.industry}
                        </span>
                      </div>
                    </div>
                    
                    {/* Top Performers */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Top Performers</span>
                      <div className="flex items-center space-x-3">
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-green-500 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${item.topPerformers}%` }}
                          />
                        </div>
                        <span className="text-sm font-semibold text-gray-900 w-12 text-right">
                          {item.topPerformers}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col items-center space-y-2">
                  <ScoreRing score={item.your} size="md" />
                  <Badge 
                    variant={item.your > item.industry ? 'success' : 'warning'} 
                    size="sm"
                  >
                    {item.change}
                  </Badge>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* Industry Insights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        {/* Top Issues */}
        <div className="bg-white rounded-card shadow-card p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <ApperIcon name="AlertTriangle" className="w-5 h-5 mr-2 text-orange-500" />
            Common Industry Issues
          </h3>
          <div className="space-y-3">
            {[
              { issue: 'Poor mobile navigation', frequency: '68%' },
              { issue: 'Slow page load times', frequency: '54%' },
              { issue: 'Unclear CTAs', frequency: '47%' },
              { issue: 'Missing trust signals', frequency: '41%' },
              { issue: 'Complex checkout flow', frequency: '38%' }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-sm text-gray-700">{item.issue}</span>
                <Badge variant="warning" size="sm">{item.frequency}</Badge>
              </div>
            ))}
          </div>
        </div>
        
        {/* Best Practices */}
        <div className="bg-white rounded-card shadow-card p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <ApperIcon name="CheckCircle" className="w-5 h-5 mr-2 text-green-500" />
            Top Performer Practices
          </h3>
          <div className="space-y-3">
            {[
              { practice: 'Mobile-first design', adoption: '92%' },
              { practice: 'Clear value proposition', adoption: '88%' },
              { practice: 'One-click checkout', adoption: '84%' },
              { practice: 'Social proof integration', adoption: '79%' },
              { practice: 'Progressive disclosure', adoption: '75%' }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-sm text-gray-700">{item.practice}</span>
                <Badge variant="success" size="sm">{item.adoption}</Badge>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Benchmarks