import styles from "./Card.module.css";
import { CardProps } from "./Cards";

interface CardElementProps {
  block: CardProps
}
export function Card({ block } : CardElementProps ) {

  const { id, name, description, place, image } = block;
  const imageComplete = `../../img/${image}`;

  return(
    <div className={styles.card}>
      <img src={imageComplete} alt={name}/>
      <div className={styles.content}>
        <h3>{name}</h3>
        <p>{description}</p>
        <div className={styles.location}>
          <i className="ph-map-pin-light"></i>
          {place}
        </div>
      </div>
    </div>
  );
}