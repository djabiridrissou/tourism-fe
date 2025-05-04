import Hero from "@/components/home/Hero";
import FeaturedDestinations from "@/components/home/FeaturedDestinations";
import UniqueExperiences from "@/components/home/UniqueExperiences";
import InteractiveMap from "@/components/home/InteractiveMap";
import HiddenGems from "@/components/home/HiddenGems";
import RealTimeInfo from "@/components/home/RealTimeInfo";
import TravelerReviews from "@/components/home/TravelerReviews";
import PersonalizationBanner from "@/components/home/PersonalizationBanner";
import NewsletterBooking from "@/components/home/NewsletterBooking";
import IndexHome from "./IndexHome";

const Home = () => {
  return (
    <div>

      <IndexHome />
      {/*  <Hero />
      <FeaturedDestinations />
      <UniqueExperiences />
      <InteractiveMap />
  <HiddenGems /> 
      <RealTimeInfo />
     {/*  <TravelerReviews /> 
      <PersonalizationBanner />
      <NewsletterBooking /> */}
    </div>
  );
};

export default Home;
