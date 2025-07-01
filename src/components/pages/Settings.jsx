import { useState } from 'react'
import { motion } from 'framer-motion'
import { toast } from 'react-toastify'
import Button from '@/components/atoms/Button'
import ApperIcon from '@/components/ApperIcon'

const Settings = () => {
  const [settings, setSettings] = useState({
    // General Settings
    auditFrequency: 'weekly',
    reportFormat: 'pdf',
    emailNotifications: true,
    
    // Analysis Settings
    analysisDepth: 'comprehensive',
    includeScreenshots: true,
    includeRecommendations: true,
    
    // Export Settings
    pdfTemplate: 'professional',
    includeCoverPage: true,
    includeExecutiveSummary: true,
    
    // Notification Settings
    auditCompleted: true,
    criticalIssuesFound: true,
    weeklyReports: false,
    
    // Integration Settings
    shopifyApiKey: '',
    webhookUrl: '',
    slackNotifications: false
  })
  
  const [saving, setSaving] = useState(false)
  
  const handleSettingChange = (key, value) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }))
  }
  
  const handleSave = async () => {
    setSaving(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      toast.success('Settings saved successfully!')
    } catch (error) {
      toast.error('Failed to save settings')
    } finally {
      setSaving(false)
    }
  }
  
  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset all settings to default?')) {
      setSettings({
        auditFrequency: 'weekly',
        reportFormat: 'pdf',
        emailNotifications: true,
        analysisDepth: 'comprehensive',
        includeScreenshots: true,
        includeRecommendations: true,
        pdfTemplate: 'professional',
        includeCoverPage: true,
        includeExecutiveSummary: true,
        auditCompleted: true,
        criticalIssuesFound: true,
        weeklyReports: false,
        shopifyApiKey: '',
        webhookUrl: '',
        slackNotifications: false
      })
      toast.info('Settings reset to default values')
    }
  }
  
  const settingSections = [
    {
      title: 'General Settings',
      icon: 'Settings',
      settings: [
        {
          key: 'auditFrequency',
          label: 'Default Audit Frequency',
          type: 'select',
          options: [
            { value: 'daily', label: 'Daily' },
            { value: 'weekly', label: 'Weekly' },
            { value: 'monthly', label: 'Monthly' },
            { value: 'custom', label: 'Custom' }
          ]
        },
        {
          key: 'reportFormat',
          label: 'Default Report Format',
          type: 'select',
          options: [
            { value: 'pdf', label: 'PDF' },
            { value: 'html', label: 'HTML' },
            { value: 'json', label: 'JSON' }
          ]
        },
        {
          key: 'emailNotifications',
          label: 'Enable Email Notifications',
          type: 'toggle'
        }
      ]
    },
    {
      title: 'Analysis Settings',
      icon: 'Search',
      settings: [
        {
          key: 'analysisDepth',
          label: 'Analysis Depth',
          type: 'select',
          options: [
            { value: 'basic', label: 'Basic' },
            { value: 'standard', label: 'Standard' },
            { value: 'comprehensive', label: 'Comprehensive' }
          ]
        },
        {
          key: 'includeScreenshots',
          label: 'Include Screenshots',
          type: 'toggle'
        },
        {
          key: 'includeRecommendations',
          label: 'Generate Recommendations',
          type: 'toggle'
        }
      ]
    },
    {
      title: 'Report Export',
      icon: 'FileText',
      settings: [
        {
          key: 'pdfTemplate',
          label: 'PDF Template',
          type: 'select',
          options: [
            { value: 'professional', label: 'Professional' },
            { value: 'minimal', label: 'Minimal' },
            { value: 'detailed', label: 'Detailed' }
          ]
        },
        {
          key: 'includeCoverPage',
          label: 'Include Cover Page',
          type: 'toggle'
        },
        {
          key: 'includeExecutiveSummary',
          label: 'Include Executive Summary',
          type: 'toggle'
        }
      ]
    },
    {
      title: 'Notifications',
      icon: 'Bell',
      settings: [
        {
          key: 'auditCompleted',
          label: 'Audit Completed',
          type: 'toggle'
        },
        {
          key: 'criticalIssuesFound',
          label: 'Critical Issues Found',
          type: 'toggle'
        },
        {
          key: 'weeklyReports',
          label: 'Weekly Summary Reports',
          type: 'toggle'
        }
      ]
    },
    {
      title: 'Integrations',
      icon: 'Link',
      settings: [
        {
          key: 'shopifyApiKey',
          label: 'Shopify API Key',
          type: 'text',
          placeholder: 'Enter your Shopify API key'
        },
        {
          key: 'webhookUrl',
          label: 'Webhook URL',
          type: 'text',
          placeholder: 'https://your-webhook-url.com'
        },
        {
          key: 'slackNotifications',
          label: 'Slack Notifications',
          type: 'toggle'
        }
      ]
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
            <h1 className="text-2xl font-bold gradient-text mb-2">Settings</h1>
            <p className="text-gray-600">
              Configure your audit preferences and integrations
            </p>
          </div>
          
          <div className="flex items-center space-x-3">
            <Button
              variant="secondary"
              icon="RotateCcw"
              onClick={handleReset}
            >
              Reset to Default
            </Button>
            <Button
              icon="Save"
              loading={saving}
              onClick={handleSave}
            >
              Save Changes
            </Button>
          </div>
        </div>
      </motion.div>
      
      {/* Settings Sections */}
      <div className="space-y-6">
        {settingSections.map((section, sectionIndex) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: sectionIndex * 0.1 }}
            className="bg-white rounded-card shadow-card p-6"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-teal-100 to-teal-200 rounded-lg flex items-center justify-center">
                <ApperIcon name={section.icon} className="w-4 h-4 text-teal-600" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900">{section.title}</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {section.settings.map((setting, settingIndex) => (
                <motion.div
                  key={setting.key}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (sectionIndex * 0.1) + (settingIndex * 0.05) }}
                  className="space-y-2"
                >
                  <label className="block text-sm font-medium text-gray-700">
                    {setting.label}
                  </label>
                  
                  {setting.type === 'select' && (
                    <select
                      value={settings[setting.key]}
                      onChange={(e) => handleSettingChange(setting.key, e.target.value)}
                      className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-teal-500 focus:border-teal-500 rounded-md"
                    >
                      {setting.options.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  )}
                  
                  {setting.type === 'text' && (
                    <input
                      type="text"
                      value={settings[setting.key]}
                      onChange={(e) => handleSettingChange(setting.key, e.target.value)}
                      placeholder={setting.placeholder}
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                    />
                  )}
                  
                  {setting.type === 'toggle' && (
                    <div className="flex items-center">
                      <button
                        type="button"
                        onClick={() => handleSettingChange(setting.key, !settings[setting.key])}
                        className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 ${
                          settings[setting.key] ? 'bg-teal-600' : 'bg-gray-200'
                        }`}
                      >
                        <span
                          className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                            settings[setting.key] ? 'translate-x-5' : 'translate-x-0'
                          }`}
                        />
                      </button>
                      <span className="ml-3 text-sm text-gray-600">
                        {settings[setting.key] ? 'Enabled' : 'Disabled'}
                      </span>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Advanced Settings */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="bg-white rounded-card shadow-card p-6"
      >
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-8 h-8 bg-gradient-to-r from-orange-100 to-orange-200 rounded-lg flex items-center justify-center">
            <ApperIcon name="AlertTriangle" className="w-4 h-4 text-orange-600" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900">Advanced Settings</h2>
        </div>
        
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
          <div className="flex items-start space-x-3">
            <ApperIcon name="Info" className="w-5 h-5 text-orange-600 mt-0.5" />
            <div>
              <h3 className="text-sm font-medium text-orange-800">Caution</h3>
              <p className="text-sm text-orange-700 mt-1">
                These settings can significantly impact your audit results. Only modify if you understand the implications.
              </p>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <Button variant="secondary" icon="Database">
            Clear Cache & Data
          </Button>
          <Button variant="secondary" icon="Download">
            Export All Settings
          </Button>
          <Button variant="secondary" icon="Upload">
            Import Settings
          </Button>
          <Button variant="danger" icon="Trash2">
            Reset All Data
          </Button>
        </div>
      </motion.div>
    </div>
  )
}

export default Settings