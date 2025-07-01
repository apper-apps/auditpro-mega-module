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
      setError('Failed to load audits')
      console.error('Error loading audits:', err)
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