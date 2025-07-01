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
    ]
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
    ]
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
    ]
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
    ]
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
  
  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }
}

export const auditService = new AuditService()