import ContactForm from '@/components/sections/contact/ContactForm';
import LocationSection from '@/components/sections/contact/LocationSection';
import TorontoOffice from '@/components/sections/contact/TorontoOffice';

export const metadata = {
  title: 'Contact — Innovia Partners',
  description:
    'Start a conversation with Innovia Partners. Whether you have clarity and are ready to act, or need help determining the best trajectory forward, we are here to help.',
};

export default function ContactPage() {
  return (
    <main>
      <ContactForm />
      <LocationSection />
      <TorontoOffice />
    </main>
  );
}
