import Hero from '@/components/sections/home/Hero';
import AboutPreview from '@/components/sections/home/AboutPreview';
import ServiceStreams from '@/components/sections/home/ServiceStreams';
import CredibilityStrip from '@/components/sections/home/CredibilityStrip';
import InsightsList from '@/components/sections/home/InsightsList';
import InsightsCarousel from '@/components/sections/home/InsightsCarousel';
import ContactCTA from '@/components/sections/home/ContactCTA';

export const metadata = {
  title: 'Innovia Partners — Management Consulting for Architecture & AEC',
  description:
    'For 20 years, Innovia Partners has advised the world\'s most ambitious architecture, engineering and creative practices on strategy, operations and growth.',
};

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutPreview />
      <ServiceStreams />
      <CredibilityStrip />
      <InsightsCarousel />
      <ContactCTA />
    </main>
  );
}
