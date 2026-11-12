import { Header } from "./components/Header/Header";
import { Footer } from "./sections/FooterSection/FooterSection";
import { GallerySection } from "./sections/GallerySection/GallerySection";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { RecommendationsSection } from "./sections/RecommendationsSection/RecommendationsSection";
import { TipsSection } from "./sections/TipsSection/TipsSection";

function App() {
  return (
    <main>
      <Header />
      <HeroSection />
      <RecommendationsSection />
      <TipsSection />
      <GallerySection />
      <Footer />
    </main>
  );
}

export default App;
