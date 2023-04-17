import Accordion from '../components/Accordion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ImageSlider from '../components/ImageSlider';
import FollowImg from '../assets/img/follow.jpg';

const Careers = () => {
  return (
    <>
      <Header />
      <section className="careers">
        <div className="bg-img">
          <h1 className="bg-text">careers at pixar</h1>
        </div>

        <div className="collaboration">
          <h2>a collaboration between art & technology</h2>
          <p>
            At Pixar, our goal is to make great films with great people. We are
            proud of our tradition of creative and technical excellence and are
            always looking for talented people to enrich our work and our
            community. We believe it’s important for our studio to reflect the
            diversity of the society we live in and the worldwide audiences for
            whom we make our films. Come see what we have to offer!
          </p>

          <hr />

          <a href="#" className="btn">
            visit career listings
          </a>

          <hr />
        </div>

        <div className="container">
          <ImageSlider />
        </div>

        <div className="career-faqs">
          <div className="bg-img">
            <h1 className="bg-text">career faqs</h1>
          </div>

          <div className="container">
            <Accordion />

            <a href="https://twitter.com/PixarRecruiting" className="follow">
              <img src={FollowImg} alt="" />
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Careers;
