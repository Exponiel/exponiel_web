import { HeroSection } from "@/components/sections/hero";
import { ForWhomSection } from "@/components/sections/for-whom";
import { ProblemSolutionSection } from "@/components/sections/problem-solution";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { FeaturesSection } from "@/components/sections/features";
import { WhyExponielSection } from "@/components/sections/why-exponiel";
import { PilotCTASection } from "@/components/sections/pilot-cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ForWhomSection />
      <ProblemSolutionSection />
      <HowItWorksSection />
      <FeaturesSection />
      <WhyExponielSection />
      <PilotCTASection />
      <Footer />
    </main>
  );
}
