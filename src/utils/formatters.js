export const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export const formatDateTime = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

export const formatScore = (score) => {
  return `${Math.round(score)}/100`
}

export const formatPercentage = (value) => {
  return `${value}%`
}

export const formatNumber = (num) => {
  return new Intl.NumberFormat().format(num)
}

export const truncateText = (text, maxLength = 100) => {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength) + '...'
}

export const getScoreColor = (score) => {
  if (score >= 80) return 'text-green-600'
  if (score >= 60) return 'text-yellow-600'
  return 'text-red-600'
}

export const getScoreBadgeVariant = (score) => {
  if (score >= 80) return 'success'
  if (score >= 60) return 'warning'
  return 'error'
}

export const getSeverityColor = (severity) => {
  const colors = {
    critical: 'text-red-600',
    high: 'text-orange-600',
    medium: 'text-yellow-600',
    low: 'text-green-600'
  }
  return colors[severity] || 'text-gray-600'
}

export const getSeverityBadgeVariant = (severity) => {
  const variants = {
    critical: 'critical',
    high: 'high',
    medium: 'medium',
    low: 'low'
}
  return variants[severity] || 'default'
}

export const getBaymardComplianceColor = (score) => {
  if (score >= 90) return 'text-green-600'
  if (score >= 80) return 'text-yellow-600'
  if (score >= 70) return 'text-orange-600'
  return 'text-red-600'
}

export const getBaymardComplianceBadgeVariant = (score) => {
  if (score >= 90) return 'success'
  if (score >= 80) return 'warning'
  if (score >= 70) return 'error'
  return 'critical'
}

export const formatBaymardScore = (score) => {
  return `${Math.round(score)}% Baymard Compliant`
}