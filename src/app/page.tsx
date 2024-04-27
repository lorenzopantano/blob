import NavigationBar from "@/components/features/navigation/navigation-bar";
import FeatureList from "@/components/pages/landing/feature-list";
import Footer from "@/components/pages/landing/footer";
import HeroSection from "@/components/pages/landing/hero-section";
import JoinNow from "@/components/pages/landing/join-now";
import Latest from "@/components/pages/landing/latest";
import Topics from "@/components/pages/landing/topics";
import TrendingStories from "@/components/pages/landing/trending-stories";

export default function Home() {
  return (
    <main className="flex flex-col gap-16 w-full relative">
      <NavigationBar />
      <HeroSection />
      <TrendingStories />
      <FeatureList />
      <div className="flex flex-row justify-between items-start w-full gap-12 ">
        <Latest />
        <div className="flex flex-col justify-center self-stretch ">
          <Topics />
          <JoinNow />
        </div>
      </div>
    </main>
  );
}
