import EyebrowLabel from '@/components/ui/EyebrowLabel';
import Divider from '@/components/ui/Divider';
import SectionWrapper from '@/components/ui/SectionWrapper';

export const metadata = {
  title: 'Terms of Use — Innovia Partners',
  description: 'Terms and conditions governing use of the Innovia Partners website.',
};

const sections = [
  {
    heading: '1. Acceptance of terms',
    body: [
      'By accessing or using this website (innoviapartners.com), you agree to be bound by these Terms of Use. If you do not agree with any part of these terms, please do not use this website.',
    ],
  },
  {
    heading: '2. Use of this website',
    body: [
      'This website is provided for informational purposes only. You may use the content on this website for your personal, non-commercial purposes provided you do not modify, reproduce, or distribute any content without our prior written consent.',
      'You agree not to use this website in any way that is unlawful, harmful, or in violation of these terms. This includes attempting to gain unauthorized access to any part of the website or its associated systems.',
    ],
  },
  {
    heading: '3. Intellectual property',
    body: [
      'All content on this website, including text, graphics, logos, and images, is the property of Innovia Partners Ltd. or its content suppliers and is protected by applicable intellectual property laws.',
      'The Innovia Partners name and logo are trademarks of Innovia Partners Ltd. Nothing on this website should be interpreted as granting any licence or right to use any trademark without our prior written permission.',
    ],
  },
  {
    heading: '4. No professional advice',
    body: [
      'The information on this website is provided for general informational purposes and does not constitute professional advice. Nothing on this website creates a consulting, advisory, or other professional relationship between you and Innovia Partners.',
      'Before acting on any information you find on this website, we encourage you to seek qualified professional advice relevant to your specific circumstances.',
    ],
  },
  {
    heading: '5. Limitation of liability',
    body: [
      'To the fullest extent permitted by law, Innovia Partners Ltd. shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of, or inability to use, this website or its content.',
      'We make no warranties, express or implied, regarding the accuracy, completeness, or availability of the information on this website. We reserve the right to modify or withdraw content at any time without notice.',
    ],
  },
  {
    heading: '6. Third-party links',
    body: [
      'This website may include links to third-party websites. These links are provided for convenience only. Innovia Partners has no control over the content of those sites and accepts no responsibility for them or for any loss or damage that may arise from your use of them.',
    ],
  },
  {
    heading: '7. Governing law',
    body: [
      'These Terms of Use are governed by and construed in accordance with the laws of the Province of Ontario and the federal laws of Canada applicable therein, without regard to conflict of law principles.',
    ],
  },
  {
    heading: '8. Changes to these terms',
    body: [
      'We reserve the right to update these Terms of Use at any time. Changes take effect immediately upon posting. Your continued use of this website after any changes constitutes your acceptance of the revised terms.',
    ],
  },
  {
    heading: '9. Contact',
    body: [
      'If you have questions about these Terms of Use, please contact us at rowley.mossop@innoviapartners.com or by phone at +1 (416) 518-1193.',
    ],
  },
];

export default function Terms() {
  return (
    <main>
      <SectionWrapper background="dark" as="section">
        <EyebrowLabel tone="accentOnDark">Legal</EyebrowLabel>
        <h1 className="text-white mt-4 mb-4">Terms of Use</h1>
        <p className="text-primary-300 text-sm">Last updated: January 2026</p>
      </SectionWrapper>

      <SectionWrapper as="section">
        <div className="max-w-2xl">
          <p className="text-neutral-700 leading-relaxed mb-10">
            Please read these Terms of Use carefully before accessing or using the Innovia Partners
            website. These terms govern your access to and use of our website and all content
            provided through it.
          </p>

          <Divider className="mb-10" />

          <div className="space-y-10">
            {sections.map(({ heading, body }) => (
              <div key={heading}>
                <h2 className="mb-4">{heading}</h2>
                {body.map((para, i) => (
                  <p key={i} className="text-neutral-700 leading-relaxed mb-4 last:mb-0">
                    {para}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}
