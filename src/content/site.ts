export const siteContent = {
  company: {
    name: 'Aspirare',
    tagline: 'Transforming Enterprise Through Intelligent Automation',
    description:
      'We partner with companies to implement cutting-edge AI solutions that drive operational efficiency, reduce costs, and unlock new revenue streams.'
  },
  hero: {
    headline: 'Transform Your Enterprise with AI',
    subheadline:
      'Strategic AI implementation that delivers measurable ROI and competitive advantage for industry leaders.',
    cta: {
      primary: 'Schedule Consultation',
      secondary: 'View Case Studies'
    },
    metrics: [
      { value: '500+', label: 'AI Projects Delivered' },
      { value: '85%', label: 'Average Cost Reduction' },
      { value: '$2.3B', label: 'Client Value Generated' },
      { value: '99%', label: 'Client Retention Rate' }
    ]
  },
  services: {
    title: 'AI Transformation Services',
    subtitle: 'End-to-end AI implementation designed for enterprise scale',
    offerings: [
      {
        icon: '🧠',
        title: 'AI Strategy & Roadmap',
        description:
          'Comprehensive AI assessment and strategic planning tailored to your industry and business objectives.',
        features: [
          'Market Analysis',
          'Technology Audit',
          'ROI Modeling',
          'Implementation Timeline'
        ]
      },
      {
        icon: '⚡',
        title: 'Process Automation',
        description:
          'Intelligent automation solutions that streamline operations and eliminate manual bottlenecks.',
        features: [
          'Workflow Optimization',
          'RPA Integration',
          'Decision Automation',
          'Quality Assurance'
        ]
      },
      {
        icon: '📊',
        title: 'Data Intelligence',
        description:
          'Advanced analytics and machine learning models that turn your data into actionable insights.',
        features: [
          'Predictive Analytics',
          'Real-time Dashboards',
          'ML Model Development',
          'Data Pipeline Architecture'
        ]
      },
      {
        icon: '🔒',
        title: 'Enterprise Integration',
        description:
          'Secure, scalable AI deployment that integrates seamlessly with your existing infrastructure.',
        features: [
          'API Development',
          'Cloud Migration',
          'Security Compliance',
          'Change Management'
        ]
      }
    ]
  },
  about: {
    title: 'Leading AI Transformation Since 2018',
    description:
      'Our team of AI specialists, data scientists, and enterprise architects has successfully guided over 200 Fortune 500 companies through their digital transformation journey.',
    stats: [
      { number: '200+', label: 'Enterprise Clients' },
      { number: '50+', label: 'AI Experts' },
      { number: '15+', label: 'Industries Served' },
      { number: '6', label: 'Years Experience' }
    ],
    expertise: [
      'Machine Learning & Deep Learning',
      'Natural Language Processing',
      'Computer Vision',
      'Robotic Process Automation',
      'Cloud AI Platforms (AWS, Azure, GCP)',
      'Enterprise Architecture'
    ]
  },
  caseStudies: {
    title: 'Proven Results',
    subtitle: 'Real transformations, measurable impact',
    studies: [
      {
        company: 'Global Manufacturing Leader',
        industry: 'Manufacturing',
        challenge: 'Manual quality control processes causing 15% defect rate',
        solution: 'Implemented computer vision-based quality inspection system',
        results: [
          '92% reduction in defects',
          '$12M annual savings',
          '3x faster inspection speed'
        ]
      },
      {
        company: 'Fortune 100 Financial Services',
        industry: 'Financial Services',
        challenge: 'Manual document processing taking 48+ hours',
        solution: 'Deployed NLP-powered document automation platform',
        results: [
          '95% faster processing',
          '60% cost reduction',
          '99.8% accuracy rate'
        ]
      },
      {
        company: 'Enterprise Healthcare Provider',
        industry: 'Healthcare',
        challenge: 'Inefficient patient scheduling and resource allocation',
        solution: 'AI-driven predictive scheduling and capacity optimization',
        results: [
          '40% improvement in utilization',
          '25% reduction in wait times',
          '$8M operational savings'
        ]
      }
    ]
  },
  contact: {
    title: 'Ready to Transform Your Enterprise?',
    subtitle: "Let's discuss how AI can drive your business forward",
    form: {
      fields: [
        { name: 'name', label: 'Full Name', type: 'text', required: true },
        {
          name: 'email',
          label: 'Business Email',
          type: 'email',
          required: true
        },
        { name: 'company', label: 'Company', type: 'text', required: true },
        { name: 'role', label: 'Your Role', type: 'text', required: true },
        {
          name: 'budget',
          label: 'Project Budget Range',
          type: 'select',
          options: [
            '< $100K',
            '$100K - $500K',
            '$500K - $1M',
            '$1M - $5M',
            '$5M+'
          ]
        },
        {
          name: 'timeline',
          label: 'Desired Timeline',
          type: 'select',
          options: [
            'Immediate',
            'Within 3 months',
            '3-6 months',
            '6-12 months',
            'Planning phase'
          ]
        },
        {
          name: 'message',
          label: 'Project Details',
          type: 'textarea',
          required: true
        }
      ]
    },
    info: {
      address:
        'We have presence in Vancouver, BC, Canada and Ottawa, ON, Canada',
      phone: '+1 (123) 456-7890',
      email: 'joshua.chan@aspirare.ai'
    }
  }
}
