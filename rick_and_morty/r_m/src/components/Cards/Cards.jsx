import Card from "../Card/Card";
import Styles from "./cards.module.css"
function Cards({ characters, onClose }) {
  return (
    <div className={Styles.contenedor}>
      {characters.map(
        ({ id, name, species, gender, image, origin, status }) => {
          return (
            <Card
              key={id}
              id={id}
              name={name}
              species={species}
              gender={gender}
              image={image}
              status={status}
              origin={origin.name}
              onClose={onClose}
            />
          );
        }
      )}
    </div>
  );
}

export default Cards;
