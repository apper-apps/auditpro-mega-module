import { useState, useEffect } from 'react'
import { auditService } from '@/services/api/auditService'

export const useAudits = () => {
  const [audits, setAudits] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  
const loadAudits = async () => {
    try {
      setLoading(true)
      setError('')
      const data = await auditService.getAll()
      setAudits(data)
    } catch (err) {
      console.error('Error loading audits:', err)
      
      // Enhanced error handling with specific error types
      let errorMessage
      if (err.message?.includes('Network')) {
        errorMessage = 'Network error. Please check your connection and try again.'
      } else if (err.message?.includes('timeout')) {
        errorMessage = 'Request timed out. Please refresh the page.'
      } else {
        errorMessage = 'Failed to load audits. Please try refreshing the page.'
      }
      
      setError(errorMessage)
    } finally {
      setLoading(false)
    }
  }
  
  const refreshAudits = () => {
    loadAudits()
  }
  
  useEffect(() => {
    loadAudits()
  }, [])
  
  return {
    audits,
    loading,
    error,
    refreshAudits
  }
}