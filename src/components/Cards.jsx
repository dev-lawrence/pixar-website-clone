import CareersImg from '../assets/img/careers.jpeg';
import ElementalImg from '../assets/img/ele_trailer.jpg';
import WinLoseImg from '../assets/img/win-lose.jpg';
import Card from './Card';

const Cards = () => {
  return (
    <div className="cards">
      <Card
        CardImg={CareersImg}
        text="careers at pixar"
        path="careers-at-pixar"
      />
      <Card
        CardImg={ElementalImg}
        text="elemental trailer"
        path="https://www.youtube.com/watch?v=hXzcyx9V0xw"
        target="target"
      />
      <Card CardImg={WinLoseImg} text="win or lose" path="winlose" />
    </div>
  );
};

export default Cards;
