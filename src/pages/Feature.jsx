import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';

const Feature = () => {
  return (
    <>
      <Header />
      <section className="feature">
        <Hero text="feature films" />
      </section>
      <Footer />
    </>
  );
};

export default Feature;
