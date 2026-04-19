import EyebrowLabel from '@/components/ui/EyebrowLabel';
import Divider from '@/components/ui/Divider';
import SectionWrapper from '@/components/ui/SectionWrapper';

export const metadata = {
  title: 'Privacy Policy — Innovia Partners',
  description: 'How Innovia Partners collects, uses, and protects your personal information.',
};

const sections = [
  {
    heading: '1. Information we collect',
    body: [
      'When you contact us through this website, we may collect personal information such as your name, email address, phone number, and the contents of any message you send. We may also collect information about your practice or organization where you voluntarily provide it.',
      'We do not use cookies for tracking or advertising purposes. Basic server logs may record IP addresses for security and diagnostic purposes only.',
    ],
  },
  {
    heading: '2. How we use your information',
    body: [
      'Information you provide is used solely to respond to your enquiry, deliver services you have engaged us for, or send communications you have subscribed to (such as our newsletter). We do not use your personal information for any other commercial purpose.',
      'If you subscribe to our newsletter, you may unsubscribe at any time by following the link included in each email or by contacting us directly.',
    ],
  },
  {
    heading: '3. Information sharing',
    body: [
      'We do not sell, rent, or trade your personal information to third parties. We may share information with trusted service providers who assist us in operating this website or conducting our business, subject to those parties agreeing to keep the information confidential.',
      'We may disclose information where required by law or to protect the rights, property, or safety of Innovia Partners, our clients, or the public.',
    ],
  },
  {
    heading: '4. Data storage and security',
    body: [
      'Personal information is stored on secure servers and protected by appropriate technical and organizational measures. We retain personal data only for as long as necessary to fulfil the purposes for which it was collected, or as required by applicable law.',
      'Despite our efforts, no method of transmission over the internet is completely secure. We cannot guarantee the absolute security of information transmitted to or from this website.',
    ],
  },
  {
    heading: '5. Your rights',
    body: [
      'Subject to applicable privacy legislation, you have the right to access, correct, or request deletion of your personal information held by us. To exercise any of these rights, please contact us at rowley.mossop@innoviapartners.com.',
      'If you are located in the European Economic Area, you may also have the right to restrict or object to certain processing of your data, or to data portability, in accordance with the General Data Protection Regulation (GDPR).',
    ],
  },
  {
    heading: '6. Third-party links',
    body: [
      'This website may contain links to external sites, including our LinkedIn profile. We are not responsible for the privacy practices or content of those sites and encourage you to review their privacy policies independently.',
    ],
  },
  {
    heading: '7. Changes to this policy',
    body: [
      'We may update this Privacy Policy from time to time. The date of the most recent revision appears at the top of this page. We encourage you to review this policy periodically.',
    ],
  },
  {
    heading: '8. Contact',
    body: [
      'Questions or concerns about this policy or our privacy practices can be directed to Rowley Mossop, Principal, Innovia Partners Ltd., by email at rowley.mossop@innoviapartners.com or by phone at +1 (416) 518-1193.',
    ],
  },
];

export default function Privacy() {
  return (
    <main>
      <SectionWrapper background="dark" as="section">
        <EyebrowLabel tone="accentOnDark">Legal</EyebrowLabel>
        <h1 className="text-white mt-4 mb-4">Privacy Policy</h1>
        <p className="text-primary-300 text-sm">Last updated: January 2026</p>
      </SectionWrapper>

      <SectionWrapper as="section">
        <div className="max-w-2xl">
          <p className="text-neutral-700 leading-relaxed mb-10">
            Innovia Partners Ltd. (&ldquo;Innovia,&rdquo; &ldquo;we,&rdquo; &ldquo;our&rdquo;) is
            committed to protecting your privacy. This policy explains how we collect, use, and
            safeguard information when you visit our website or communicate with us.
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
