import { Link } from 'react-router-dom';

const Card = ({ path, target, CardImg, text }) => {
  return (
    <>
      <div className="card">
        <Link to={path} target={target}>
          <img src={CardImg} alt="" />
        </Link>
        <h3>{text}</h3>
      </div>
    </>
  );
};

export default Card;
