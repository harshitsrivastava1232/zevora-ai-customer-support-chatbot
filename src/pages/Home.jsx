import Hero from "../components/home/Hero";
import Search from "../components/home/Search";
import Categories from "../components/home/Categories";
import FeaturedRestaurants from "../components/home/FeaturedRestaurants";
import PopularDishes from "../components/home/PopularDishes";
import AISection from "../components/home/AISection";
import Reviews from "../components/home/Reviews";
import DownloadApp from "../components/home/DownloadApp";
import Footer from "../components/layout/Footer";

function Home() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>

      <Search />

      <section id="categories">
        <Categories />
      </section>

      <section id="restaurants">
        <FeaturedRestaurants />
      </section>

      <PopularDishes />

      <section id="assistant">
        <AISection />
      </section>

      <Reviews />

      <section id="download">
        <DownloadApp />
      </section>

      <Footer />
    </>
  );
}

export default Home;
