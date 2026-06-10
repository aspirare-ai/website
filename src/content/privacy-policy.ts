export type PolicySection = {
  title: string
  // Paragraphs (strings) and bullet lists (string arrays), rendered in order
  body: (string | string[])[]
  contact?: { email: string }
}

export type PolicyPage = {
  title: string
  lastUpdated: string
  sections: PolicySection[]
}

export const privacyPolicy: PolicyPage = {
  title: 'Privacy Policy',
  lastUpdated: 'June 2025',
  sections: [
    {
      title: 'Information We Collect',
      body: [
        'We collect information you provide directly to us, such as when you contact us through our website, request a consultation, or engage our services.',
        [
          'Contact information (name, email address, phone number)',
          'Company information and professional details',
          'Project requirements and business needs',
          'Communication preferences'
        ]
      ]
    },
    {
      title: 'How We Use Your Information',
      body: [
        'We use the information we collect to:',
        [
          'Provide and improve our AI consulting services',
          'Respond to your inquiries and requests',
          'Send you relevant business communications',
          'Analyze and improve our website and services',
          'Comply with legal obligations'
        ]
      ]
    },
    {
      title: 'Information Sharing',
      body: [
        'We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy:',
        [
          'With service providers who assist in our operations',
          'When required by law or to protect our rights',
          'In connection with a business transaction'
        ]
      ]
    },
    {
      title: 'Data Security',
      body: [
        'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.'
      ]
    },
    {
      title: 'Your Rights',
      body: [
        'You have the right to:',
        [
          'Access and update your personal information',
          'Request deletion of your personal information',
          'Opt-out of marketing communications',
          'Request a copy of your personal information'
        ]
      ]
    },
    {
      title: 'Contact Us',
      body: [
        'If you have any questions about this Privacy Policy, please contact us at:'
      ],
      contact: { email: 'joshua.chan@aspirare.ai' }
    }
  ]
}
