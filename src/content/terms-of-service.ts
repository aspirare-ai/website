import type { PolicyPage } from './privacy-policy'

export const termsOfService: PolicyPage = {
  title: 'Terms of Service',
  lastUpdated: 'June 2025',
  sections: [
    {
      title: 'Acceptance of Terms',
      body: [
        "By accessing and using Aspirare's services, you accept and agree to be bound by the terms and provision of this agreement."
      ]
    },
    {
      title: 'Services Description',
      body: [
        'Aspirare provides enterprise AI transformation services including:',
        [
          'AI strategy and roadmap development',
          'Process automation implementation',
          'Data intelligence and analytics',
          'Enterprise AI integration',
          'Consulting and advisory services'
        ]
      ]
    },
    {
      title: 'Client Responsibilities',
      body: [
        'As a client, you agree to:',
        [
          'Provide accurate and complete information',
          'Cooperate in good faith during project execution',
          'Maintain confidentiality of proprietary methodologies',
          'Make timely payments as agreed',
          'Provide necessary access to systems and personnel'
        ]
      ]
    },
    {
      title: 'Intellectual Property',
      body: [
        'All intellectual property rights in our methodologies, frameworks, and deliverables remain with Aspirare unless otherwise agreed in writing. Client-specific implementations and data remain the property of the client.'
      ]
    },
    {
      title: 'Confidentiality',
      body: [
        'We maintain strict confidentiality regarding all client information and business operations. Both parties agree to protect confidential information disclosed during the engagement.'
      ]
    },
    {
      title: 'Limitation of Liability',
      body: [
        'Our liability is limited to the fees paid for the specific services. We are not liable for indirect, incidental, or consequential damages arising from the use of our services.'
      ]
    },
    {
      title: 'Payment Terms',
      body: [
        'Payment terms are specified in individual service agreements. Generally:',
        [
          'Invoices are due within 30 days of receipt',
          'Late payments may incur interest charges',
          'Services may be suspended for non-payment'
        ]
      ]
    },
    {
      title: 'Termination',
      body: [
        'Either party may terminate services with written notice as specified in the service agreement. Termination does not relieve obligations for services already provided.'
      ]
    },
    {
      title: 'Governing Law',
      body: [
        'These terms are governed by the laws of Ontario. Any disputes will be resolved through binding arbitration in Ottawa, ON.'
      ]
    },
    {
      title: 'Contact Information',
      body: ['For questions regarding these terms, please contact us at:'],
      contact: { email: 'joshua.chan@aspirare.ai' }
    }
  ]
}
