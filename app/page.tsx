import HeroSection from "./landingpage/herosection";
import TypeSection from "./landingpage/type";
import CommunicationSection from "./landingpage/communication";
import ReviewsSection from "./landingpage/reviews";
import Footer from "./landingpage/footer";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <TypeSection />
      <CommunicationSection />
      <ReviewsSection />
      <Footer />
    </div>
  );
}
