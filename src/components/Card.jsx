import { Link } from 'react-router-dom';

const Card = ({ CardImg, text, path }) => {
  return (
    <>
      <div className="card">
        <Link to={path}>
          <img src={CardImg} alt="Careers" />
        </Link>
        <h3>{text}</h3>
      </div>
    </>
  );
};

export default Card;
