import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Cards from '../components/Cards';

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <section className="home-content">
        <div className="container">
          <Cards />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
