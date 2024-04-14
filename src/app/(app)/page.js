import Article from '@/components/homepage/Article';
import Hero from '@/components/homepage/Hero';
import Testimonials from '@/components/homepage/Testimonials';
import TipsAndTrik from '@/components/homepage/TipsAndTrik';
import TrustedBy from '@/components/homepage/TrustedBy';

export default function Home() {
  return (
    <div>
      <Hero />
      <TrustedBy />
      <TipsAndTrik />
      <Article />
      <Testimonials />
    </div>
  );
}
