import React from 'react'
import { config } from '../config/app'

export default function TermsPage() {
  const sections = [
    {
      title: '1. Acceptance of Terms',
      content: [
        'By accessing or using the TIFO platform, you agree to be bound by these Terms and Conditions.',
        'If you do not agree to these terms, please do not use the platform.',
        'These terms apply to all users of the platform, including customers, restaurant partners, and other visitors.',
      ],
    },
    {
      title: '2. Platform Description',
      content: [
        'TIFO is an AI-powered personalized food technology platform that connects users with restaurant partners.',
        'The platform provides meal recommendations, subscription services, and restaurant partnership tools.',
        'TIFO does not own or operate restaurants listed on the platform.',
        'Certain features may be in beta or development phase — such features are clearly labeled.',
      ],
    },
    {
      title: '3. User Accounts',
      content: [
        'You must provide accurate, complete, and current information when creating an account.',
        'You are responsible for maintaining the confidentiality of your account credentials.',
        'You are responsible for all activity that occurs under your account.',
        'You must notify TIFO immediately of any unauthorized account access.',
      ],
    },
    {
      title: '4. Acceptable Use',
      content: [
        'You may not use the platform for any unlawful purpose or in violation of these terms.',
        'You may not attempt to access or interfere with TIFO\'s systems or other users\' accounts.',
        'You may not reproduce, distribute, or create derivative works from platform content without permission.',
        'You may not use the platform to transmit spam, malware, or harmful content.',
      ],
    },
    {
      title: '5. Orders and Subscriptions',
      content: [
        'Orders placed through TIFO are subject to restaurant availability and operating hours.',
        'TIFO facilitates the order but the restaurant is responsible for food preparation and quality.',
        'Subscription terms, pricing, and cancellation policies are detailed at time of purchase.',
        'Refund policies apply as described in our Help Center.',
      ],
    },
    {
      title: '6. AI Recommendations',
      content: [
        'TIFO\'s AI recommendations are based on your provided preferences and usage history.',
        'Recommendations are for informational purposes and do not constitute medical or dietary advice.',
        'TIFO does not guarantee that recommendations will meet specific health or dietary requirements.',
        'Users with medical dietary requirements should consult healthcare professionals.',
      ],
    },
    {
      title: '7. Intellectual Property',
      content: [
        'The TIFO platform, logo, and all associated content are owned by TIFO Technologies.',
        'You retain ownership of content you submit to the platform.',
        'By submitting content, you grant TIFO a license to use it for platform operations and improvement.',
      ],
    },
    {
      title: '8. Limitation of Liability',
      content: [
        'TIFO provides the platform "as is" without warranties of any kind.',
        'TIFO is not liable for food quality, safety, or any issues arising from restaurant partners.',
        'TIFO\'s total liability for any claim is limited to the amount paid by you in the preceding 30 days.',
        'TIFO is not liable for indirect, incidental, or consequential damages.',
      ],
    },
    {
      title: '9. Governing Law',
      content: [
        'These terms are governed by the laws of India.',
        'Any disputes shall be subject to the jurisdiction of courts in India.',
      ],
    },
    {
      title: '10. Changes to Terms',
      content: [
        'TIFO reserves the right to modify these Terms at any time.',
        'We will notify users of material changes via email or platform notification.',
        'Continued use after changes constitutes acceptance of the new terms.',
      ],
    },
    {
      title: '11. Contact',
      content: [
        `For questions about these Terms, contact us at: ${config.COMPANY_EMAIL}`,
      ],
    },
  ]

  return (
    <main id="main-content">
      <section className="section-padding" style={{ paddingTop: '120px' }}>
        <div className="container-max" style={{ maxWidth: '860px' }}>
          <div className="mb-12">
            <span className="badge badge-orange mb-4 inline-flex">Legal</span>
            <h1 className="heading-lg text-white mb-4">Terms & Conditions</h1>
            <p className="text-sm text-gray-500">Last updated: July 2025</p>
          </div>

          <div className="glass rounded-2xl p-8 mb-6">
            <p className="body-md leading-relaxed">
              These Terms and Conditions govern your use of the TIFO platform operated by TIFO Technologies. Please read these terms carefully before using our services. By accessing or using TIFO, you acknowledge that you have read, understood, and agree to be bound by these terms.
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
