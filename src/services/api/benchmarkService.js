const mockBenchmarks = [
  {
    Id: 1,
    industry: "fashion",
    metric: "overall_score",
    average: 72,
    topPerformers: 85,
    bottomPerformers: 58,
    sampleSize: 150,
    lastUpdated: "2024-01-15T00:00:00Z"
  },
  {
    Id: 2,
    industry: "electronics",
    metric: "overall_score",
    average: 68,
    topPerformers: 82,
    bottomPerformers: 54,
    sampleSize: 200,
    lastUpdated: "2024-01-15T00:00:00Z"
  },
  {
    Id: 3,
    industry: "beauty",
    metric: "overall_score",
    average: 75,
    topPerformers: 88,
    bottomPerformers: 62,
    sampleSize: 120,
    lastUpdated: "2024-01-15T00:00:00Z"
  },
  {
    Id: 4,
    industry: "home",
    metric: "overall_score",
    average: 70,
    topPerformers: 84,
    bottomPerformers: 56,
    sampleSize: 180,
    lastUpdated: "2024-01-15T00:00:00Z"
  },
  {
    Id: 5,
    industry: "fashion",
    metric: "homepage_score",
    average: 68,
    topPerformers: 82,
    bottomPerformers: 54,
    sampleSize: 150,
    lastUpdated: "2024-01-15T00:00:00Z"
  },
  {
    Id: 6,
    industry: "fashion",
    metric: "product_score",
    average: 75,
    topPerformers: 88,
    bottomPerformers: 62,
    sampleSize: 150,
    lastUpdated: "2024-01-15T00:00:00Z"
  },
  {
    Id: 7,
    industry: "fashion",
    metric: "cart_score",
    average: 70,
    topPerformers: 86,
    bottomPerformers: 54,
    sampleSize: 150,
    lastUpdated: "2024-01-15T00:00:00Z"
  }
]

class BenchmarkService {
  constructor() {
    this.benchmarks = [...mockBenchmarks]
  }
  
  async getAll() {
    await this.delay(200)
    return [...this.benchmarks]
  }
  
  async getByIndustry(industry) {
    await this.delay(200)
    return this.benchmarks.filter(benchmark => benchmark.industry === industry)
  }
  
  async getByMetric(metric) {
    await this.delay(200)
    return this.benchmarks.filter(benchmark => benchmark.metric === metric)
  }
  
  async getById(id) {
    await this.delay(150)
    const benchmark = this.benchmarks.find(benchmark => benchmark.Id === id)
    if (!benchmark) {
      throw new Error(`Benchmark with Id ${id} not found`)
    }
    return { ...benchmark }
  }
  
  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }
}

export const benchmarkService = new BenchmarkService()