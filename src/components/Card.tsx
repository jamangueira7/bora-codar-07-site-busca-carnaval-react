import styles from "./Card.module.css";
export function Card() {
  return(
    <div className={styles.card}>
      <img src="./img/img_card_1.svg" alt="O Python do vovô não sobe mais"/>
      <div className={styles.content}>
        <h3>O Python do vovô não sobe mais</h3>
        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
        <div className={styles.location}>
          <i className="ph-map-pin-light"></i>
          São Paulo
        </div>
      </div>
    </div>
  );
}