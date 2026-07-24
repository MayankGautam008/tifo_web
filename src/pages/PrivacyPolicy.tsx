import React from 'react'
import { config } from '../config/app'

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: '1. Information We Collect',
      content: [
        'Account information: Name, email address, and profile details you provide during registration.',
        'Usage data: Information about how you interact with the TIFO platform, including meal preferences, orders, and feedback.',
        'Device information: Technical information about the device and browser you use to access TIFO.',
        'Location data: General location information to provide nearby restaurant recommendations (with your permission).',
      ],
    },
    {
      title: '2. How We Use Your Information',
      content: [
        'To personalize your meal recommendations using our AI engine.',
        'To process and fulfill your meal orders and subscriptions.',
        'To improve our AI models and platform performance.',
        'To communicate with you about your account, orders, and platform updates.',
        'To analyze usage patterns and improve our services.',
      ],
    },
    {
      title: '3. Data Sharing',
      content: [
        'We share necessary order information with restaurant partners to fulfill your meal orders.',
        'We do not sell your personal information to third parties.',
        'We may share aggregated, anonymized data for research and analytics purposes.',
        'We may disclose information when required by law or to protect our rights.',
      ],
    },
    {
      title: '4. Data Security',
      content: [
        'We implement industry-standard security measures to protect your personal information.',
        'Your data is stored on secure servers with access controls.',
        'We regularly review and update our security practices.',
        'No system is 100% secure — we encourage strong passwords and responsible account management.',
      ],
    },
    {
      title: '5. Your Rights',
      content: [
        'Access: You can request a copy of the personal data we hold about you.',
        'Correction: You can update or correct inaccurate information in your account.',
        'Deletion: You can request deletion of your account and associated data.',
        'Opt-out: You can opt out of marketing communications at any time.',
      ],
    },
    {
      title: '6. Cookies',
      content: [
        'We use cookies to maintain your session, remember your preferences, and analyze platform usage.',
        'You can control cookies through your browser settings.',
        'Disabling certain cookies may affect platform functionality.',
      ],
    },
    {
      title: '7. Changes to This Policy',
      content: [
        'We may update this Privacy Policy periodically.',
        'We will notify you of significant changes via email or platform notification.',
        'Continued use of TIFO after changes constitutes acceptance of the updated policy.',
      ],
    },
    {
      title: '8. Contact Us',
      content: [
        `For privacy-related inquiries, contact us at: ${config.COMPANY_EMAIL}`,
      ],
    },
  ]

  return (
    <main id="main-content">
      <section className="section-padding" style={{ paddingTop: '120px' }}>
        <div className="container-max" style={{ maxWidth: '860px' }}>
          <div className="mb-12">
            <span className="badge badge-orange mb-4 inline-flex">Legal</span>
            <h1 className="heading-lg text-white mb-4">Privacy Policy</h1>
            <p className="text-sm text-gray-500">Last updated: July 2025</p>
          </div>

          <div className="glass rounded-2xl p-8 mb-6">
            <p className="body-md leading-relaxed">
              TIFO Technologies ("TIFO," "we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use the TIFO platform. Please read this policy carefully. By using TIFO, you consent to the practices described here.
            </p>
          </div>

          <div className="space-y-6">
            {sections.map((section) => (
              <div key={section.title} className="glass rounded-xl p-7">
                <h2 className="text-white font-bold text-lg mb-4" style={{ fontFamily: 'var(--font-display)' }}>{section.title}</h2>
                <ul className="space-y-2">
                  {section.content.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-400 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: '#C1440E' }}></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
