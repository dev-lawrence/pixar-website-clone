import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Cards from '../components/Cards.jsx';
import HeroCaption from '../assets/img/hero-caption.png';

const Home = () => {
  return (
    <>
      <Header />
      <section className="home-content">
        <div id="hero">
          <div className="content">
            <div className="hero-img">
              <img src={HeroCaption} alt="Elemental" />
            </div>
          </div>
        </div>
        <div className="container">
          <Cards />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
