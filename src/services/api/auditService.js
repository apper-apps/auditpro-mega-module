// Baymard Institute UX Guidelines Database
const baymardGuidelines = {
  checkout: [
    { id: 'B001', title: 'Guest Checkout Option', weight: 10, study: 156 },
    { id: 'B002', title: 'Transparent Pricing', weight: 9, study: 201 },
    { id: 'B003', title: 'Security Indicators', weight: 8, study: 89 },
    { id: 'B004', title: 'Form Field Validation', weight: 7, study: 178 },
    { id: 'B005', title: 'Progress Indicators', weight: 6, study: 145 },
    { id: 'B006', title: 'Error Recovery', weight: 8, study: 134 },
    { id: 'B007', title: 'Payment Method Clarity', weight: 7, study: 167 },
    { id: 'B008', title: 'Shipping Options', weight: 6, study: 189 },
    { id: 'B009', title: 'Address Validation', weight: 5, study: 123 },
    { id: 'B010', title: 'Mobile Optimization', weight: 9, study: 198 }
  ],
  navigation: [
    { id: 'B011', title: 'Breadcrumb Navigation', weight: 7, study: 142 },
    { id: 'B012', title: 'Search Functionality', weight: 9, study: 156 },
    { id: 'B013', title: 'Category Hierarchy', weight: 8, study: 134 },
    { id: 'B014', title: 'Mobile Menu Design', weight: 8, study: 189 },
    { id: 'B015', title: 'Footer Navigation', weight: 5, study: 145 },
    { id: 'B016', title: 'Site Logo Placement', weight: 6, study: 167 },
    { id: 'B017', title: 'Contact Information', weight: 7, study: 178 },
    { id: 'B018', title: 'Search Suggestions', weight: 6, study: 198 },
    { id: 'B019', title: 'Category Filtering', weight: 7, study: 123 },
    { id: 'B020', title: 'Navigation Consistency', weight: 8, study: 201 }
  ],
  productPages: [
    { id: 'B021', title: 'Product Image Quality', weight: 9, study: 67 },
    { id: 'B022', title: 'Zoom Functionality', weight: 8, study: 89 },
    { id: 'B023', title: 'Size Information', weight: 7, study: 23 },
    { id: 'B024', title: 'Product Reviews', weight: 8, study: 156 },
    { id: 'B025', title: 'Stock Availability', weight: 6, study: 134 },
    { id: 'B026', title: 'Product Variations', weight: 7, study: 178 },
    { id: 'B027', title: 'Related Products', weight: 5, study: 145 },
    { id: 'B028', title: 'Price Comparison', weight: 6, study: 167 },
    { id: 'B029', title: 'Technical Specifications', weight: 7, study: 189 },
    { id: 'B030', title: 'Add to Cart Visibility', weight: 9, study: 198 }
  ],
  filtering: [
    { id: 'B031', title: 'Filter Usability', weight: 8, study: 134 },
    { id: 'B032', title: 'Filter Clarity', weight: 7, study: 156 },
    { id: 'B033', title: 'Sort Options', weight: 6, study: 178 },
    { id: 'B034', title: 'Filter Persistence', weight: 5, study: 145 },
    { id: 'B035', title: 'Result Counts', weight: 6, study: 167 },
    { id: 'B036', title: 'Filter Combinations', weight: 7, study: 189 },
    { id: 'B037', title: 'Clear All Filters', weight: 5, study: 198 },
    { id: 'B038', title: 'Filter Loading States', weight: 4, study: 123 },
    { id: 'B039', title: 'Mobile Filter Design', weight: 8, study: 201 },
    { id: 'B040', title: 'Filter Suggestions', weight: 6, study: 89 }
  ],
  trustSignals: [
    { id: 'B041', title: 'Security Badges', weight: 8, study: 89 },
    { id: 'B042', title: 'Customer Reviews', weight: 9, study: 156 },
    { id: 'B043', title: 'Return Policy', weight: 7, study: 134 },
    { id: 'B044', title: 'Contact Information', weight: 6, study: 178 },
    { id: 'B045', title: 'Privacy Policy', weight: 5, study: 145 },
    { id: 'B046', title: 'Company Information', weight: 6, study: 167 },
    { id: 'B047', title: 'SSL Certificates', weight: 7, study: 189 },
    { id: 'B048', title: 'Professional Design', weight: 8, study: 198 },
    { id: 'B049', title: 'Social Proof', weight: 7, study: 123 },
    { id: 'B050', title: 'Warranty Information', weight: 5, study: 201 }
  ],
  mobile: [
    { id: 'B051', title: 'Touch Target Size', weight: 9, study: 189 },
    { id: 'B052', title: 'Responsive Design', weight: 8, study: 198 },
    { id: 'B053', title: 'Mobile Navigation', weight: 8, study: 142 },
    { id: 'B054', title: 'Form Input Design', weight: 7, study: 178 },
    { id: 'B055', title: 'Loading Performance', weight: 8, study: 156 },
    { id: 'B056', title: 'Scroll Behavior', weight: 6, study: 134 },
    { id: 'B057', title: 'Gesture Support', weight: 7, study: 167 },
    { id: 'B058', title: 'Viewport Optimization', weight: 6, study: 145 },
    { id: 'B059', title: 'Mobile Checkout', weight: 9, study: 201 },
    { id: 'B060', title: 'App Store Optimization', weight: 5, study: 123 }
  ]
}

const mockAudits = [
  {
    Id: 1,
    storeUrl: "shopify-store-demo.myshopify.com",
    pageType: "homepage",
    timestamp: "2024-01-15T10:30:00Z",
    overallScore: 78,
    issues: [
      {
        Id: 1,
        category: "Navigation",
        severity: "high",
        title: "Mobile menu lacks clear hierarchy",
        description: "The mobile navigation menu doesn't provide clear visual hierarchy, making it difficult for users to understand the site structure.",
        location: { selector: ".mobile-nav", x: 10, y: 50 },
        guidelineRef: "Baymard #142: Mobile Navigation Patterns",
        timestamp: "2024-01-15T10:30:00Z"
      },
      {
        Id: 2,
        category: "Trust Signals",
        severity: "medium",
        title: "Missing security badges",
        description: "The checkout area lacks visible security badges and trust signals that could increase user confidence.",
        location: { selector: ".checkout-form", x: 60, y: 80 },
        guidelineRef: "Baymard #89: Trust & Security Indicators",
        timestamp: "2024-01-15T10:30:00Z"
      },
      {
        Id: 3,
        category: "Call to Action",
        severity: "critical",
        title: "Primary CTA button lacks contrast",
        description: "The main call-to-action button doesn't meet WCAG contrast requirements and may be difficult to see.",
        location: { selector: ".primary-cta", x: 45, y: 60 },
        guidelineRef: "WCAG 2.1 AA Contrast Requirements",
        timestamp: "2024-01-15T10:30:00Z"
      }
    ],
    recommendations: [
      {
        Id: 1,
        issueId: "1",
        priority: 1,
        problem: [
          "Users struggle to find key navigation items on mobile",
          "Menu hierarchy is unclear leading to confusion",
          "Important sections are buried in sub-menus"
        ],
        solutions: {
          copywriting: [
            "Use clear, descriptive menu labels",
            "Prioritize most important categories first",
            "Add brief descriptions for complex categories"
          ],
          uiux: [
            "Implement accordion-style navigation",
            "Use visual hierarchy with font sizes and colors",
            "Add icons to improve recognition"
          ]
        },
        estimatedImpact: {
          conversion: "+12%",
          bounceRate: "-8%",
          timeOnPage: "+25%",
          userSatisfaction: "+15%"
        },
        resources: [
          "Baymard Mobile Navigation",
          "Material Design Guidelines",
          "Apple HIG Navigation"
        ]
      }
    ],
    screenshots: [
      {
        Id: 1,
        url: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=1200&fit=crop",
        pageSection: "homepage",
        annotations: [
          {
            x: 10,
            y: 5,
            width: 80,
            height: 15,
            text: "Navigation bar needs better visual hierarchy and mobile optimization"
          },
          {
            x: 20,
            y: 70,
            width: 60,
            height: 10,
            text: "CTA button contrast is too low for accessibility standards"
          }
        ]
      }
],
    baymardCompliance: {
      overallScore: 78,
      guidelinesChecked: 25,
      passedGuidelines: 19,
      failedGuidelines: 6,
      categoryScores: {
        checkout: 85,
        navigation: 72,
        productPages: 90,
        filtering: 68,
        trustSignals: 75,
        mobile: 80
      },
      categoryDetails: {
        checkout: { passed: 8, failed: 2, total: 10 },
        navigation: { passed: 7, failed: 3, total: 10 },
        productPages: { passed: 9, failed: 1, total: 10 },
        filtering: { passed: 6, failed: 4, total: 10 },
        trustSignals: { passed: 7, failed: 3, total: 10 },
        mobile: { passed: 8, failed: 2, total: 10 }
      },
      topRecommendations: [
        {
          title: 'Implement Guest Checkout',
          description: 'Allow users to complete purchases without creating an account',
          category: 'Checkout',
          studyId: 'B001'
        },
        {
          title: 'Improve Mobile Navigation',
          description: 'Enhance mobile menu hierarchy and usability',
          category: 'Navigation',
          studyId: 'B014'
        },
        {
          title: 'Add Security Badges',
          description: 'Display trust signals prominently in checkout area',
          category: 'Trust Signals',
          studyId: 'B041'
        }
      ]
    }
  },
  {
    Id: 2,
    storeUrl: "fashion-boutique.myshopify.com",
    pageType: "product",
    timestamp: "2024-01-14T14:22:00Z",
    overallScore: 85,
    issues: [
      {
        Id: 4,
        category: "Product Images",
        severity: "medium",
        title: "Missing zoom functionality",
        description: "Product images lack zoom functionality which is essential for detailed product inspection.",
        location: { selector: ".product-images", x: 25, y: 30 },
        guidelineRef: "Baymard #67: Product Image Display",
        timestamp: "2024-01-14T14:22:00Z"
      },
      {
        Id: 5,
        category: "Product Information",
        severity: "low",
        title: "Size guide accessibility",
        description: "Size guide is difficult to access and not prominently displayed.",
        location: { selector: ".size-info", x: 70, y: 45 },
        guidelineRef: "Baymard #23: Size & Fit Information",
        timestamp: "2024-01-14T14:22:00Z"
      }
    ],
    recommendations: [
      {
        Id: 2,
        issueId: "4",
        priority: 2,
        problem: [
          "Users cannot inspect product details closely",
          "Missing zoom reduces confidence in purchase decisions",
          "Mobile users especially need better image interaction"
        ],
        solutions: {
          copywriting: [
            "Add 'Click to zoom' instruction text",
            "Include 'View full details' prompt",
            "Add image count indicator"
          ],
          uiux: [
            "Implement pinch-to-zoom on mobile",
            "Add hover zoom for desktop",
            "Include image gallery with thumbnails"
          ]
        },
        estimatedImpact: {
          conversion: "+8%",
          productPageViews: "+15%",
          averageOrderValue: "+5%",
          returnRate: "-12%"
        },
        resources: [
          "Shopify Image Zoom Apps",
          "UX Best Practices for Product Images",
          "Mobile Touch Interactions"
        ]
      }
    ],
    screenshots: [
      {
        Id: 2,
        url: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=1200&fit=crop",
        pageSection: "product",
        annotations: [
          {
            x: 5,
            y: 10,
            width: 45,
            height: 60,
            text: "Product images need zoom functionality for better user experience"
          }
        ]
      }
],
    baymardCompliance: {
      overallScore: 85,
      guidelinesChecked: 20,
      passedGuidelines: 17,
      failedGuidelines: 3,
      categoryScores: {
        checkout: 90,
        navigation: 88,
        productPages: 78,
        filtering: 85,
        trustSignals: 92,
        mobile: 82
      },
      categoryDetails: {
        checkout: { passed: 9, failed: 1, total: 10 },
        navigation: { passed: 8, failed: 2, total: 10 },
        productPages: { passed: 7, failed: 3, total: 10 },
        filtering: { passed: 8, failed: 2, total: 10 },
        trustSignals: { passed: 9, failed: 1, total: 10 },
        mobile: { passed: 8, failed: 2, total: 10 }
      },
      topRecommendations: [
        {
          title: 'Add Product Image Zoom',
          description: 'Implement zoom functionality for better product inspection',
          category: 'Product Pages',
          studyId: 'B022'
        },
        {
          title: 'Improve Size Guide Access',
          description: 'Make size information more prominent and accessible',
          category: 'Product Pages',
          studyId: 'B023'
        }
      ]
    }
  },
  {
    Id: 3,
    storeUrl: "tech-gadgets-store.myshopify.com",
    pageType: "cart",
    timestamp: "2024-01-13T09:15:00Z",
    overallScore: 72,
    issues: [
      {
        Id: 6,
        category: "Checkout Flow",
        severity: "critical",
        title: "No guest checkout option",
        description: "Users are forced to create an account before checkout, which significantly increases cart abandonment.",
        location: { selector: ".checkout-form", x: 30, y: 20 },
        guidelineRef: "Baymard #156: Guest Checkout Options",
        timestamp: "2024-01-13T09:15:00Z"
      },
      {
        Id: 7,
        category: "Shipping Information",
        severity: "high",
        title: "Hidden shipping costs",
        description: "Shipping costs are only revealed at the final checkout step, causing surprise and abandonment.",
        location: { selector: ".shipping-info", x: 50, y: 75 },
        guidelineRef: "Baymard #201: Transparent Pricing",
        timestamp: "2024-01-13T09:15:00Z"
      }
    ],
    recommendations: [
      {
        Id: 3,
        issueId: "6",
        priority: 1,
        problem: [
          "Account creation requirement causes 27% cart abandonment",
          "Users want quick purchase without commitment",
          "Registration friction reduces conversion rates"
        ],
        solutions: {
          copywriting: [
            "Add 'Continue as Guest' button",
            "Offer account creation after purchase",
            "Explain guest checkout benefits"
          ],
          uiux: [
            "Make guest checkout the primary option",
            "Simplify the checkout form",
            "Use single-page checkout flow"
          ]
        },
        estimatedImpact: {
          conversion: "+23%",
          cartAbandonment: "-35%",
          timeToCheckout: "-40%",
          customerSatisfaction: "+18%"
        },
        resources: [
          "Guest Checkout Statistics",
          "Checkout Optimization Guide",
          "Reducing Cart Abandonment"
        ]
      }
    ],
    screenshots: [
      {
        Id: 3,
        url: "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&h=1200&fit=crop",
        pageSection: "cart",
        annotations: [
          {
            x: 15,
            y: 25,
            width: 70,
            height: 30,
            text: "Checkout form forces account creation - add guest checkout option"
          },
          {
            x: 20,
            y: 70,
            width: 60,
            height: 15,
            text: "Shipping costs should be displayed earlier in the process"
          }
        ]
      }
],
    baymardCompliance: {
      overallScore: 72,
      guidelinesChecked: 30,
      passedGuidelines: 21,
      failedGuidelines: 9,
      categoryScores: {
        checkout: 45,
        navigation: 82,
        productPages: 88,
        filtering: 75,
        trustSignals: 70,
        mobile: 78
      },
      categoryDetails: {
        checkout: { passed: 4, failed: 6, total: 10 },
        navigation: { passed: 8, failed: 2, total: 10 },
        productPages: { passed: 8, failed: 2, total: 10 },
        filtering: { passed: 7, failed: 3, total: 10 },
        trustSignals: { passed: 7, failed: 3, total: 10 },
        mobile: { passed: 7, failed: 3, total: 10 }
      },
      topRecommendations: [
        {
          title: 'Add Guest Checkout Option',
          description: 'Critical: Implement guest checkout to reduce cart abandonment',
          category: 'Checkout',
          studyId: 'B001'
        },
        {
          title: 'Display Shipping Costs Earlier',
          description: 'Show shipping costs before final checkout step',
          category: 'Checkout',
          studyId: 'B002'
        },
        {
          title: 'Improve Security Indicators',
          description: 'Add more visible security badges and trust signals',
          category: 'Trust Signals',
          studyId: 'B041'
        }
      ]
    }
  },
  {
    Id: 4,
    storeUrl: "organic-skincare.myshopify.com",
    pageType: "collection",
    timestamp: "2024-01-12T16:45:00Z",
    overallScore: 91,
    issues: [
      {
        Id: 8,
        category: "Filtering",
        severity: "low",
        title: "Filter options could be more intuitive",
        description: "Some filter categories use technical terms that might not be familiar to average users.",
        location: { selector: ".filter-sidebar", x: 10, y: 40 },
        guidelineRef: "Baymard #134: Product Filtering UX",
        timestamp: "2024-01-12T16:45:00Z"
      }
    ],
    recommendations: [
      {
        Id: 4,
        issueId: "8",
        priority: 3,
        problem: [
          "Technical filter terms confuse users",
          "Filter labels don't match user mental models",
          "Some filters are rarely used due to unclear naming"
        ],
        solutions: {
          copywriting: [
            "Use customer-friendly language",
            "Add explanatory tooltips",
            "Test filter labels with users"
          ],
          uiux: [
            "Group related filters together",
            "Add filter result counts",
            "Implement smart filter suggestions"
          ]
        },
        estimatedImpact: {
          filterUsage: "+20%",
          productDiscovery: "+12%",
          timeOnPage: "+8%",
          conversionRate: "+3%"
        },
        resources: [
          "Filter Design Patterns",
          "E-commerce UX Guidelines",
          "User Testing for Filters"
        ]
      }
    ],
    screenshots: [
      {
        Id: 4,
        url: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=1200&fit=crop",
        pageSection: "collection",
        annotations: [
          {
            x: 5,
            y: 20,
            width: 25,
            height: 50,
            text: "Filter sidebar could use more user-friendly language and better organization"
          }
]
      }
    ],
    baymardCompliance: {
      overallScore: 91,
      guidelinesChecked: 15,
      passedGuidelines: 14,
      failedGuidelines: 1,
      categoryScores: {
        checkout: 95,
        navigation: 92,
        productPages: 88,
        filtering: 82,
        trustSignals: 94,
        mobile: 90
      },
      categoryDetails: {
        checkout: { passed: 9, failed: 1, total: 10 },
        navigation: { passed: 9, failed: 1, total: 10 },
        productPages: { passed: 8, failed: 2, total: 10 },
        filtering: { passed: 8, failed: 2, total: 10 },
        trustSignals: { passed: 9, failed: 1, total: 10 },
        mobile: { passed: 9, failed: 1, total: 10 }
      },
      topRecommendations: [
        {
          title: 'Improve Filter Labels',
          description: 'Use more user-friendly language for filter categories',
          category: 'Filtering',
          studyId: 'B032'
        }
      ]
    }
  }
]

class AuditService {
  constructor() {
    this.audits = [...mockAudits]
  }
  
  async getAll() {
    await this.delay(300)
    return [...this.audits]
  }
  
  async getById(id) {
    await this.delay(250)
    const audit = this.audits.find(audit => audit.Id === id)
    if (!audit) {
      throw new Error(`Audit with Id ${id} not found`)
    }
    return { ...audit }
  }
  
  async create(auditData) {
    await this.delay(400)
    const newAudit = {
      ...auditData,
      Id: Math.max(...this.audits.map(a => a.Id)) + 1,
      timestamp: new Date().toISOString()
    }
    this.audits.unshift(newAudit)
    return { ...newAudit }
  }
  
  async update(id, updateData) {
    await this.delay(350)
    const index = this.audits.findIndex(audit => audit.Id === id)
    if (index === -1) {
      throw new Error(`Audit with Id ${id} not found`)
    }
    this.audits[index] = { ...this.audits[index], ...updateData }
    return { ...this.audits[index] }
  }
  
  async delete(id) {
    await this.delay(300)
    const index = this.audits.findIndex(audit => audit.Id === id)
    if (index === -1) {
      throw new Error(`Audit with Id ${id} not found`)
    }
this.audits.splice(index, 1)
    return true
  }
  
  async delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }
  
  // Calculate Baymard compliance score based on issues and guidelines
  calculateBaymardCompliance(audit) {
    const categoryScores = {}
    const categoryDetails = {}
    let totalScore = 0
    let totalGuidelines = 0
    
    // Calculate scores for each category
    Object.entries(baymardGuidelines).forEach(([category, guidelines]) => {
      let categoryScore = 0
      let passed = 0
      let failed = 0
      
      guidelines.forEach(guideline => {
        // Check if audit has issues related to this guideline
        const hasIssue = audit.issues.some(issue => 
          issue.guidelineRef && issue.guidelineRef.includes(guideline.study.toString())
        )
        
        if (hasIssue) {
          failed++
        } else {
          passed++
          categoryScore += guideline.weight
        }
      })
      
      const maxCategoryScore = guidelines.reduce((sum, g) => sum + g.weight, 0)
      const categoryPercentage = maxCategoryScore > 0 ? (categoryScore / maxCategoryScore) * 100 : 100
      
      categoryScores[category] = Math.max(0, Math.min(100, categoryPercentage))
      categoryDetails[category] = {
        passed,
        failed,
        total: guidelines.length
      }
      
      totalScore += categoryScores[category]
      totalGuidelines += guidelines.length
    })
    
    const overallScore = totalScore / Object.keys(baymardGuidelines).length
    const passedGuidelines = Object.values(categoryDetails).reduce((sum, cat) => sum + cat.passed, 0)
    const failedGuidelines = Object.values(categoryDetails).reduce((sum, cat) => sum + cat.failed, 0)
    
    // Generate top recommendations based on failed guidelines
    const topRecommendations = []
    if (failedGuidelines > 0) {
      // Add category-specific recommendations based on lowest scores
      const sortedCategories = Object.entries(categoryScores)
        .sort(([,a], [,b]) => a - b)
        .slice(0, 3)
      
      sortedCategories.forEach(([category, score]) => {
        if (score < 90) {
          const categoryGuidelines = baymardGuidelines[category]
          const topGuideline = categoryGuidelines.find(g => 
            audit.issues.some(issue => 
              issue.guidelineRef && issue.guidelineRef.includes(g.study.toString())
            )
          ) || categoryGuidelines[0]
          
          topRecommendations.push({
            title: `Improve ${topGuideline.title}`,
            description: `Address ${category} issues to improve user experience`,
            category: category.charAt(0).toUpperCase() + category.slice(1),
            studyId: topGuideline.id
          })
        }
      })
    }
    
    return {
      overallScore: Math.round(overallScore),
      guidelinesChecked: totalGuidelines,
      passedGuidelines,
      failedGuidelines,
      categoryScores,
      categoryDetails,
      topRecommendations
}
  }

  // Perform comprehensive audit with realistic simulation
  async performAudit(auditData, progressCallback) {
    const phases = [
      { name: 'Validating URL and connectivity', duration: 1500, weight: 15 },
      { name: 'Analyzing page structure and content', duration: 3000, weight: 25 },
      { name: 'Detecting UX issues and accessibility problems', duration: 2500, weight: 25 },
      { name: 'Checking Baymard Institute compliance', duration: 2000, weight: 20 },
      { name: 'Generating recommendations and report', duration: 1500, weight: 15 }
    ]
    
    let totalProgress = 0
    
    try {
      // Phase 1: URL Validation
      progressCallback({
        phase: phases[0].name,
        progress: 5,
        message: `Connecting to ${auditData.storeUrl}...`
      })
      
      await this.delay(phases[0].duration)
      
      // Simulate URL validation
      if (Math.random() < 0.05) { // 5% chance of URL validation failure
        throw new Error('Unable to access the provided URL. Please check if the store is accessible.')
      }
      
      totalProgress += phases[0].weight
      progressCallback({
        phase: phases[0].name,
        progress: totalProgress,
        message: 'Connection established successfully'
      })
      
      // Phase 2: Page Analysis
      progressCallback({
        phase: phases[1].name,
        progress: totalProgress + 5,
        message: 'Scanning page elements and structure...'
      })
      
      await this.delay(phases[1].duration)
      totalProgress += phases[1].weight
      
      progressCallback({
        phase: phases[1].name,
        progress: totalProgress,
        message: 'Page analysis complete'
      })
      
      // Phase 3: Issue Detection
      progressCallback({
        phase: phases[2].name,
        progress: totalProgress + 5,
        message: 'Evaluating user experience patterns...'
      })
      
      await this.delay(phases[2].duration)
      
      // Generate issues based on page type
      const issues = this.generateIssuesForPageType(auditData.pageType, auditData.storeUrl)
      const recommendations = this.generateRecommendationsForIssues(issues)
      
      totalProgress += phases[2].weight
      progressCallback({
        phase: phases[2].name,
        progress: totalProgress,
        message: `Found ${issues.length} areas for improvement`
      })
      
      // Phase 4: Baymard Compliance
      progressCallback({
        phase: phases[3].name,
        progress: totalProgress + 5,
        message: 'Checking against Baymard Institute guidelines...'
      })
      
      await this.delay(phases[3].duration)
      
      const mockAudit = { issues, storeUrl: auditData.storeUrl }
      const baymardCompliance = this.calculateBaymardCompliance(mockAudit)
      
      totalProgress += phases[3].weight
      progressCallback({
        phase: phases[3].name,
        progress: totalProgress,
        message: `Compliance score: ${baymardCompliance.overallScore}%`
      })
      
      // Phase 5: Report Generation
      progressCallback({
        phase: phases[4].name,
        progress: totalProgress + 5,
        message: 'Compiling final report...'
      })
      
      await this.delay(phases[4].duration)
      
      const screenshots = this.generateScreenshotsForPageType(auditData.pageType)
      
      const finalAuditData = {
        ...auditData,
        overallScore: baymardCompliance.overallScore,
        issues,
        recommendations,
        screenshots,
        baymardCompliance
      }
      
      totalProgress = 100
      progressCallback({
        phase: 'Audit completed',
        progress: totalProgress,
        message: 'Report generated successfully'
      })
      
      // Create the audit record
      return await this.create(finalAuditData)
      
    } catch (error) {
      // Handle audit errors
      throw new Error(error.message || 'Audit process failed. Please try again.')
    }
  }
  
  // Generate issues based on page type
  generateIssuesForPageType(pageType, storeUrl) {
    const baseIssues = {
      homepage: [
        {
          category: "Navigation",
          severity: "high",
          title: "Mobile menu lacks clear hierarchy",
          description: "The mobile navigation menu doesn't provide clear visual hierarchy, making it difficult for users to understand the site structure.",
          location: { selector: ".mobile-nav", x: 10, y: 50 },
          guidelineRef: "Baymard #142: Mobile Navigation Patterns"
        },
        {
          category: "Call to Action",
          severity: "medium",
          title: "Primary CTA could be more prominent",
          description: "The main call-to-action button could benefit from better visual prominence and contrast.",
          location: { selector: ".primary-cta", x: 45, y: 60 },
          guidelineRef: "WCAG 2.1 AA Contrast Requirements"
        }
      ],
      product: [
        {
          category: "Product Images",
          severity: "medium",
          title: "Missing zoom functionality",
          description: "Product images lack zoom functionality which is essential for detailed product inspection.",
          location: { selector: ".product-images", x: 25, y: 30 },
          guidelineRef: "Baymard #67: Product Image Display"
        },
        {
          category: "Product Information",
          severity: "low",
          title: "Size guide accessibility",
          description: "Size guide could be more prominently displayed and easily accessible.",
          location: { selector: ".size-info", x: 70, y: 45 },
          guidelineRef: "Baymard #23: Size & Fit Information"
        }
      ],
      collection: [
        {
          category: "Filtering",
          severity: "medium",
          title: "Filter options could be more intuitive",
          description: "Some filter categories use technical terms that might not be familiar to average users.",
          location: { selector: ".filter-sidebar", x: 10, y: 40 },
          guidelineRef: "Baymard #134: Product Filtering UX"
        }
      ],
      cart: [
        {
          category: "Checkout Flow",
          severity: "critical",
          title: "Consider adding guest checkout option",
          description: "Offering guest checkout can significantly reduce cart abandonment rates.",
          location: { selector: ".checkout-form", x: 30, y: 20 },
          guidelineRef: "Baymard #156: Guest Checkout Options"
        },
        {
          category: "Shipping Information",
          severity: "high",
          title: "Shipping cost transparency",
          description: "Consider showing estimated shipping costs earlier in the checkout process.",
          location: { selector: ".shipping-info", x: 50, y: 75 },
          guidelineRef: "Baymard #201: Transparent Pricing"
        }
      ],
      search: [
        {
          category: "Search Results",
          severity: "medium",
          title: "Search result relevance",
          description: "Search results could benefit from improved relevance algorithms.",
          location: { selector: ".search-results", x: 20, y: 30 },
          guidelineRef: "Baymard #156: Search Functionality"
        }
      ],
      other: [
        {
          category: "General UX",
          severity: "medium",
          title: "Page loading performance",
          description: "Page loading times could be optimized for better user experience.",
          location: { selector: "body", x: 0, y: 0 },
          guidelineRef: "Web Performance Guidelines"
        }
      ]
    }
    
    const issues = baseIssues[pageType] || baseIssues.other
    
    // Add random additional issues for variety
    const additionalIssues = []
    if (Math.random() > 0.6) {
      additionalIssues.push({
        category: "Trust Signals",
        severity: "medium",
        title: "Missing security badges",
        description: "Adding visible security badges could increase user confidence.",
        location: { selector: ".trust-area", x: 60, y: 80 },
        guidelineRef: "Baymard #89: Trust & Security Indicators"
      })
    }
    
    if (Math.random() > 0.7) {
      additionalIssues.push({
        category: "Mobile Optimization",
        severity: "high",
        title: "Touch target sizes",
        description: "Some interactive elements may be too small for comfortable mobile interaction.",
        location: { selector: ".mobile-elements", x: 15, y: 25 },
        guidelineRef: "Baymard #189: Touch Target Size"
      })
    }
    
    const allIssues = [...issues, ...additionalIssues].map((issue, index) => ({
      ...issue,
      Id: index + 1,
      timestamp: new Date().toISOString()
    }))
    
    return allIssues
  }
  
  // Generate recommendations for issues
  generateRecommendationsForIssues(issues) {
    return issues.slice(0, 3).map((issue, index) => ({
      Id: index + 1,
      issueId: issue.Id.toString(),
      priority: index + 1,
      problem: [
        issue.description,
        "This affects user experience and conversion rates",
        "Implementation should follow best practices"
      ],
      solutions: {
        copywriting: [
          "Review and improve messaging clarity",
          "Use user-friendly language",
          "Test different approaches with users"
        ],
        uiux: [
          "Implement design improvements",
          "Follow accessibility guidelines",
          "Optimize for mobile devices"
        ]
      },
      estimatedImpact: {
        conversion: `+${Math.floor(Math.random() * 15) + 5}%`,
        userExperience: `+${Math.floor(Math.random() * 20) + 10}%`,
        accessibilityScore: `+${Math.floor(Math.random() * 10) + 5}%`
      },
      resources: [
        "UX Best Practices Guide",
        "Accessibility Guidelines",
        "Conversion Optimization Resources"
      ]
    }))
  }
  
  // Generate screenshots for page type
  generateScreenshotsForPageType(pageType) {
    const screenshots = {
      homepage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=1200&fit=crop",
      product: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=1200&fit=crop",
      collection: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=1200&fit=crop",
      cart: "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=800&h=1200&fit=crop",
      search: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=1200&fit=crop",
      other: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=1200&fit=crop"
    }
    
    return [{
      Id: 1,
      url: screenshots[pageType] || screenshots.other,
      pageSection: pageType,
      annotations: [
        {
          x: 10,
          y: 15,
          width: 60,
          height: 20,
          text: "Key areas identified for improvement based on UX analysis"
        }
      ]
    }]
  }
}
export const auditService = new AuditService()