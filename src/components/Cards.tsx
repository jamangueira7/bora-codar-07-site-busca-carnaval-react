import { Card } from "./Card";
import styles from "./Cards.module.css";
import {v4 as uuidv4} from "uuid";

export interface CardProps {
  id: string;
  name: string;
  image: string;
  description: string;
  place: string;
}
interface CardsProps {
  blocks: CardProps[]
}

export function Cards({ blocks }: CardsProps) {
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
          {

            blocks.map(block => {
              return <Card block={block} key={block.id} />
            })
          }

        </section>
      </div>
    </main>
  );
}