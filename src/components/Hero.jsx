import HeroCaption from '../assets/img/hero-caption.png';

const Hero = () => {
  return (
    <>
      <section id="hero">
        <div className="content">
          <div className="hero-img">
            <img src={HeroCaption} alt="Elemental" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
