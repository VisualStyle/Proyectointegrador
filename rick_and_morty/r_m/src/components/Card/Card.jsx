import Styles from "./card.module.css";
import { Link } from "react-router-dom";

function Card({ id, name, status, species, gender, origin, onClose, image }) {
  return (
    <div className={Styles.container}>
      <Link to={`/detail/${id}`}>
      <button onClick={() => onClose(id)}>X</button>
      <div>
      <img src={image} alt="" className="imgTargeta" />
        <h2>{name}</h2>
        <h2>{status}</h2>
        <h2>{species}</h2>
        <h2>{gender}</h2>
        <h2>{origin}</h2>
      </div>
      </Link>
    </div>
  );
}
export default Card;
