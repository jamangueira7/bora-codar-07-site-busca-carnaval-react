import { Card } from "./Card";
import styles from "./Cards.module.css";

export function Cards() {
  return(
    <main>
      <div className={styles.content}>
        <section className={styles.top}>
          <h2>Blocos recomendados</h2>
          <div className={styles.view}>
            <button className="btn primary">Lista</button>
            <button className="btn secondary">Mapa</button>
          </div>
        </section>
        <section className={styles.cards}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </section>
      </div>
    </main>
  );
}