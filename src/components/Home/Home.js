import Hero from "./Hero";
import Media from "./Media";
import Newsletter from "./Newsletter";
import Testimonials from "./Testimonials";
import Event from './Event';

function Home() {
  return (
    <div>
      <Hero />
      <main id="main">
        <Event />
        <Media />
      </main>
      <Newsletter />
      <Testimonials />
    </div>
  );
}

export default Home;
