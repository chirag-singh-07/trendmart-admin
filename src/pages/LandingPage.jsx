import LandingHeroSection from "@/components/landing/LandingHeroSection";
import LandingkeyFeature from "@/components/landing/LandingkeyFeature";
import LandingNew from "@/components/landing/LandingNew";
import LandingTools from "@/components/landing/LandingTools";

const LandingPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <LandingHeroSection />
      <LandingkeyFeature />
      <LandingTools/>
      <LandingNew/>
    </div>
  );
};

export default LandingPage;
