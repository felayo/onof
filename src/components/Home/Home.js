import Hero from "./Hero";
import Media from "./Media";
import Newsletter from "./Newsletter";
import Testimonials from "./Testimonials";

function Home() {
  return (
    <div>
      <Hero />
      <main id="main">
        <Media />
      </main>
      <Newsletter />
      <Testimonials />
    </div>
  );
}

export default Home;
