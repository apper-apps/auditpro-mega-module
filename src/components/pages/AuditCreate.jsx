import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";
import { auditService } from "@/services/api/auditService";

const AuditCreate = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    storeUrl: '',
    pageType: 'homepage'
  })
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})
  const [auditProgress, setAuditProgress] = useState({
    phase: '',
    progress: 0,
    message: ''
  })

  const pageTypes = [
    { value: 'homepage', label: 'Homepage', icon: 'Home' },
    { value: 'product', label: 'Product Page', icon: 'Package' },
    { value: 'collection', label: 'Collection/Category', icon: 'Grid3X3' },
    { value: 'cart', label: 'Cart/Checkout', icon: 'ShoppingCart' },
    { value: 'search', label: 'Search Results', icon: 'Search' },
    { value: 'other', label: 'Other', icon: 'Globe' }
  ]

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.storeUrl.trim()) {
      newErrors.storeUrl = 'Store URL is required'
    } else {
      // Basic URL validation
      const urlPattern = /^[a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])?(\.[a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])?)*$/
      const cleanUrl = formData.storeUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')
      if (!urlPattern.test(cleanUrl)) {
        newErrors.storeUrl = 'Please enter a valid store URL'
      }
    }
    
    if (!formData.pageType) {
      newErrors.pageType = 'Page type is required'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      toast.error('Please fix the form errors')
      return
    }

    setLoading(true)
    setAuditProgress({ phase: 'Starting audit...', progress: 0, message: '' })
    
    try {
      // Clean the URL
      const cleanUrl = formData.storeUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')
      
      const auditData = {
        storeUrl: cleanUrl,
        pageType: formData.pageType
      }
      
      // Perform comprehensive audit with retry logic and progress tracking
      const newAudit = await auditService.performAuditWithRetry(auditData, (progress) => {
        setAuditProgress({
          phase: progress.phase,
          progress: progress.progress,
          message: progress.message
        })
      })
      
      toast.success('Audit completed successfully!')
      navigate(`/audit/${newAudit.Id}`)
    } catch (error) {
      console.error('Error performing audit:', error)
      
      // Enhanced error handling with specific messages
      let errorMessage
      if (error.message.includes('Invalid URL format')) {
        errorMessage = 'Please enter a valid store URL (e.g., yourstore.myshopify.com)'
      } else if (error.message.includes('Network timeout')) {
        errorMessage = 'Connection timeout. Please check your internet connection and try again.'
      } else if (error.message.includes('Unable to access')) {
        errorMessage = error.message
      } else {
        errorMessage = 'Failed to complete audit. Please try again.'
      }
      
      toast.error(errorMessage)
      setAuditProgress({ 
        phase: 'Audit failed', 
        progress: 0, 
        message: 'Ready to try again' 
      })
    } finally {
      setLoading(false)
      // Don't clear progress immediately on error to show failure state
      setTimeout(() => {
        if (!loading) {
          setAuditProgress({ phase: '', progress: 0, message: '' })
        }
      }, 3000)
    }
  }

  const handleCancel = () => {
    navigate(-1)
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-card shadow-card"
      >
        {/* Header */}
        <div className="border-b border-gray-200 px-6 py-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-teal-100 rounded-lg">
              <ApperIcon name="Plus" className="w-5 h-5 text-teal-600" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Create New Audit</h1>
              <p className="text-sm text-gray-600">
                Start a comprehensive UX audit for your store
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6">
          <div className="space-y-6">
            {/* Store URL */}
            <div>
              <label htmlFor="storeUrl" className="block text-sm font-medium text-gray-700 mb-2">
                Store URL
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="storeUrl"
                  value={formData.storeUrl}
                  onChange={(e) => handleInputChange('storeUrl', e.target.value)}
                  placeholder="example-store.myshopify.com"
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors ${
                    errors.storeUrl ? 'border-red-300 bg-red-50' : 'border-gray-300'
                  }`}
                />
                <ApperIcon 
                  name="Globe" 
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" 
                />
              </div>
              {errors.storeUrl && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <ApperIcon name="AlertCircle" className="w-4 h-4 mr-1" />
                  {errors.storeUrl}
                </p>
              )}
              <p className="mt-1 text-xs text-gray-500">
                Enter your store URL without http:// or https://
              </p>
            </div>

            {/* Page Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Page Type to Audit
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {pageTypes.map((type) => (
                  <motion.button
                    key={type.value}
                    type="button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleInputChange('pageType', type.value)}
                    className={`p-4 border-2 rounded-lg text-left transition-all ${
                      formData.pageType === type.value
                        ? 'border-teal-500 bg-teal-50 text-teal-700'
                        : 'border-gray-200 hover:border-gray-300 text-gray-700'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${
                        formData.pageType === type.value
                          ? 'bg-teal-100'
                          : 'bg-gray-100'
                      }`}>
                        <ApperIcon 
                          name={type.icon} 
                          className={`w-4 h-4 ${
                            formData.pageType === type.value
                              ? 'text-teal-600'
                              : 'text-gray-600'
                          }`} 
                        />
                      </div>
                      <div>
                        <div className="font-medium">{type.label}</div>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
              {errors.pageType && (
                <p className="mt-2 text-sm text-red-600 flex items-center">
                  <ApperIcon name="AlertCircle" className="w-4 h-4 mr-1" />
                  {errors.pageType}
                </p>
              )}
            </div>

            {/* Audit Info */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <ApperIcon name="Info" className="w-5 h-5 text-blue-600 mt-0.5" />
                <div className="text-sm text-blue-800">
                  <p className="font-medium mb-1">What happens next?</p>
                  <ul className="space-y-1 text-blue-700">
                    <li>• Comprehensive UX analysis based on Baymard Institute guidelines</li>
                    <li>• Issue identification with severity ratings</li>
                    <li>• Actionable recommendations for improvement</li>
                    <li>• Detailed compliance scoring and benchmarking</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex flex-col sm:flex-row justify-end space-y-3 sm:space-y-0 sm:space-x-3 mt-8 pt-6 border-t border-gray-200">
            <Button
              type="button"
              variant="secondary"
              onClick={handleCancel}
              disabled={loading}
              className="sm:order-1"
            >
              Cancel
</Button>
            <Button
              type="submit"
              variant="primary"
              icon={loading ? "Loader2" : "Play"}
              disabled={loading}
              className="sm:order-2"
            >
              {loading ? (auditProgress.phase || 'Starting Audit...') : 'Start Audit'}
            </Button>
          </div>
          
          {/* Progress Indicator */}
          {loading && (
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-blue-900">
                  Audit Progress
                </span>
                <span className="text-sm text-blue-700">
                  {auditProgress.progress}%
                </span>
              </div>
              <div className="w-full bg-blue-200 rounded-full h-2 mb-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${auditProgress.progress}%` }}
                ></div>
              </div>
              <div className="flex items-center space-x-2">
                <ApperIcon name="Loader2" className="w-4 h-4 text-blue-600 animate-spin" />
                <span className="text-sm text-blue-800">
                  {auditProgress.phase}
                </span>
              </div>
              {auditProgress.message && (
                <p className="mt-1 text-xs text-blue-700">
                  {auditProgress.message}
                </p>
              )}
            </div>
          )}
        </form>
      </motion.div>
    </div>
  )
}

export default AuditCreate